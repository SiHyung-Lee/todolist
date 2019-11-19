import React from 'react';
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";
import "./App.css";

class App extends React.Component {
    state = {
        task: '',
        tasks: [
            {id: 0, text: 'react study', done: false},
            {id: 1, text: 'es6 study', done: false},
            {id: 2, text: 'typescript study', done: false},
        ]
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
            task: '',
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

    handleCheck = (id) => {
        const idx = this.state.tasks.findIndex(
            (task) => id === task.id
        );
        console.log(this.state.tasks[idx]);
        const toggled = {
            ...this.state.tasks[idx],
            //done: !this.state.tasks[idx].done
        };
        console.log(toggled);

        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, idx),
                toggled,
                ...this.state.tasks.slice(idx + 1, this.state.tasks.length)

            ]
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
