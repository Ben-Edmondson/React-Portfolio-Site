import React from "react";
import MonthlyEntry from "./MonthlyEntry";

function Journal() {
    const month = "August";
    return(
    <div>
        <header className="App-header">
        <h1>Journal</h1>
        <MonthlyEntry month = {month}/>
        </header>
      </div>
    );
};

export default Journal;