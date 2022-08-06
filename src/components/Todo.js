import React from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import './Todo.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const Todo = ({rowData}) => {
    console.log(rowData);
    
    
    return(
        <div className="todo">
            <div className="ag-theme-alpine ag-style">
                <AgGridReact
                    pagination={true}
                    paginationAutoPageSize={true}
                    defaultColDef={{ flex: 1 }}
                    rowHeight={60}
                    rowData={rowData}>

                    <AgGridColumn field="userName" headerName="User" sortable={true} filter={true} cellClass="vertical-middle" />
                    <AgGridColumn field="text" headerName="Todo" sortable={true} filter={true} cellClass="vertical-middle" />
                    <AgGridColumn field="status" headerName="State" sortable={true} filter={true} cellClass="vertical-middle" />
                </AgGridReact>
            </div>
        </div>
    );
};

export default Todo;