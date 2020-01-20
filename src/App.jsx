import React from 'react';
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";
import "./App.css";

class App extends React.Component {
    state = {
        task: '',
        readOnly: true,
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

    handleAddTask = (e) => {
        e.preventDefault();

        if (this.state.task === '') {
            alert('할일을 입력해주세요');
            return false;
        }

        this.setState({
            task: '',
            tasks: [
                {
                    id: this.getId(),
                    text: this.state.task,
                    readOnly: true,
                    done: false
                },
                ...this.state.tasks,
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

    handleModify = (id) => {
        console.log(id);
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
