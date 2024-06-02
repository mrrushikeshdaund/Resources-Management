import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";

const GridTable = () => {
  const [rowData, setRowData] = useState([]);

  const colDefs = [
    {field:'id',width:'70px'},
    {field:'firstName'},
    {field:'lastName'},
    {field:'maidenName'},
    {field:'age'},
    {field:'gender'},
    {field:'email'},
    {field:'phone'},
    {field:'birthDate'},
    {field:'bloodGroup'},
    {field:'eyeColor'},
    {field:'username'},
    {field:'password'},
  ]

  const handleGridReady = () => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setRowData(data["users"]));
  };

  return (
    <div className="ag-theme-balham" style={{ height: 300,margin:'20px' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        onGridReady={handleGridReady}
      />
    </div>
  );
};

export default GridTable;
