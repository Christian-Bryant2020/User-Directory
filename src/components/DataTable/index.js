import React from "react";

function DataTable(props) {
    return (
      <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" onClick={props.handleOnClick}>Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(props.results)}
                    {props.results.map(result => (
                        <tr key={result.index}>
                            <td><img alt="thumbnail" className="img-fluid" src={result.picture.thumbnail} /></td>
                            <td>{result.name.first} {result.name.last}</td>
                            <td>{result.phone}</td>
                            <td>{result.email}</td>
                            <td>{result.dob.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     )}

export default DataTable;