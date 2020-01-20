import React from 'react';

const AddTask = (props) => {
    return (
        <form onSubmit={props.handleAddTask} className="add-task">
            <input type="text" placeholder="할일 추가" value={props.task} onChange={props.handleChangeTask}/>
            <button type="button" onClick={props.handleAddTask}>추가</button>
        </form>
    );
};

export default AddTask;