import React, { Component } from 'react';
import DataArea from '../DataArea/index';
import DataTable from '../DataTable/index';
import SearchBox from '../SearchBox/searchBox.js';
import API from "../../utils/API";
import Nav from "../Nav/index";


export default class Main extends Component {
    state = {
        response: [],
        name: "",
        search: "",
        searchRes: []
    }

    async componentDidMount() {
        console.log("Component did mount");
       const employees = await API.fetchUsers()
       console.log(employees)
        this.setState({response:employees.data.results, searchRes: employees.data.results})
    } 

    handleInputChange = event => {
        this.setState({ search: event.target.value })
        
    }

    handleFormSubmit = event => {
        console.log("handleformsubmit working")
        event.preventDefault();
        this.findIt()
    }

    findIt = () => {
        console.log("Findit function is working");
        const finder = this.state.response.filter((boot) => {
            return (boot.name.first === this.state.search) 
        })
        this.setState({
            searchRes: finder
        })
        console.log(finder);
    }

    sorter = (property, property2) => {
        const employees = this.state.response.sort(function (a, b) {
        if (property2) {
            if (a[property][property2].toLowerCase() < b[property][property2].toLowerCase()) { return -1; }
       
            if (a[property][property2].toLowerCase() > b[property][property2].toLowerCase()) { return 1; }
          return 0; 
            
        } else {
            if (a[property].toLowerCase() < b[property].toLowerCase()) { return -1; }
       
            if (a[property].toLowerCase() > b[property].toLowerCase()) { return 1; }
          return 0; 
           
        }
        })
        this.setState({searchRes: employees})
      }

    render() {
        return (
            <>
                    <Nav />
                <DataArea />
                <DataTable employees={this.state.searchRes} sorter={this.sorter}/>
            </>
        )
    }
}