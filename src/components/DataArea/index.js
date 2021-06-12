import React from "react";

function DataTable(props) {

        return (
            <table class="table">
            <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col" onClick={props.handleOnClick}>Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        </table>

  );
}
export default DataTable;