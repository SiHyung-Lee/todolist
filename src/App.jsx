import React from 'react';
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";
import "./App.css";

class App extends React.Component {
    state = {
        task: '',
        tasks: []
    };

    id = 0;
    getId = () => {
        return this.id++
    };

    handleChangeTask = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    handleAddTask = () => {
        this.setState({
            tasks: [
                ...this.state.tasks,
                {
                    id: this.getId(),
                    text: this.state.task,
                    done: false
                }
            ]
        });
    };

    handleCheck = (e) => {
        this.setState({
            tasks: []
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
                    handleCheck={this.handleCheck}
                />
            </div>
        );
    }
};

export default App;
