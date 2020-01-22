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

    onRefInput = ref => {
        this.input = ref;
    };

    handleChangeTask = (e) => {
        console.log('aaaa')
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
                toggled
            ]
        });
    };

    handleModifyTask = (e) => {
        console.log('bbbb');
        this.setState({
            modifyTask: e.target.value
        });
    };

    handleModify = (id) => {
        const idx = this.state.tasks.findIndex(
            (task) => id === task.id
        );

        const modified = {
            ...this.state.tasks[idx],
            readOnly: false
        };

        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, idx),
                modified,
                ...this.state.tasks.slice(idx + 1, this.state.tasks.length)
            ]
        });
        console.log(modified);
        //this.input.focus();
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
                    modifyTask={this.state.modifyTask}
                    handleCheck={this.handleCheck}
                    handleModify={this.handleModify}
                    handleDelete={this.handleDelete}
                    //onRefInput={this.onRefInput}
                    handleModifyTask={this.handleModifyTask}
                />
            </div>
        );
    }
}

export default App;
