import React from 'react';
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <AddTask/>
            <DisplayTask/>
            <DisplayTask/>
            <DisplayTask/>
            <DisplayTask/>
            <DisplayTask/>
            <DisplayTask/>
            <DisplayTask/>
            <DisplayTask/>
            <DisplayTask/>
        </div>
    );
};

export default App;
