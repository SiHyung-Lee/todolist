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
            {id: 3, text: 'Grid Layout study', done: false},
            {id: 4, text: 'css3 animation study', done: false},
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
        if (this.state.task === '') {
            alert('할일을 입력해주세요');
            return false;
        }
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

        const toggled = {
            ...this.state.tasks[idx],
            done: !this.state.tasks[idx].done
        };

        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, idx),
                ...this.state.tasks.slice(idx + 1, this.state.tasks.length),
                toggled,
            ]
        });
    };

    handleDelete = (id) => {
        const idx = this.state.tasks.findIndex(
            (task) => id === task.id
        );

        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, idx),
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
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
};

export default App;
