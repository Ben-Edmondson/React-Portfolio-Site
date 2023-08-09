import React from "react";
import MonthlyEntry from "./MonthlyEntry";
import Calendar from "./Calendar";

function Journal() {
    const month = "August";
    return(
    <div>
        <header className="App-header">
        <h1>Journal</h1>
        <Calendar/>
        </header>
      </div>
    );
};

export default Journal;