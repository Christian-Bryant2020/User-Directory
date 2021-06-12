import React, { Component } from 'react';
import DataArea from '../DataArea/index';
import DataTable from '../DataTable/index';
import SearchBox from '../SearchBox/searchBox.js';
import API from "../../utils/API";
import Nav from "../Nav/index";


export default class Main extends Component {
    state = {
        employees: [],
        search: "",
        searchRes: []
    }

     componentDidMount() {
        console.log("Component did mount");
       API.fetchUsers()
        .then(res => {
            this.setState({ employees: res.data.results })
    }) }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
      renderEmployees = () => {
            const tableData = (
          employee => (
            <DataTable
              id={employee.id.value}
              key={employee.id.value}
              first={employee.name.first}
              last={employee.name.last}
              picture={employee.picture.thumbnail}
              phone={employee.phone}
              email={employee.email}
            />
          ))
    
        if (this.state.search === "") {
          return this.state.employees.map(tableData);
        } else {
          const filteredList = this.state.sortedList.filter(employee => (
            employee.name.first.toLowerCase().includes(this.state.search)
          ))
          return (filteredList.map(tableData))
        }
      }
    
    render() {
        return (
            <>
                    <Nav employees={this.state.employees}
            search={this.state.search}
            handleInputChange={this.handleInputChange}/>
                <DataArea />
                {/* <DataTable employees={this.state.searchRes} sorter={this.sorter}/> */}
                <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
                {this.renderEmployees()}
              </tbody>
            </table>
          </div>
            </>
        )
    }
}