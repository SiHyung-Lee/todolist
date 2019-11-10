import React from 'react';
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";
import "./App.css";

class App extends React.Component {
    state = {
        task: '',
        tasks: ''
    };

    handleChangeTask = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    handleAddTask = () => {
        this.setState({
            tasks: this.state.task
        });
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <AddTask
                    task={this.state.task}
                    handleChangeTask={this.handleChangeTask}
                    handleAddTask={this.handleAddTask}
                />
                <DisplayTask
                    tasks={this.state.tasks}
                />
            </div>
        );
    }
};

export default App;
