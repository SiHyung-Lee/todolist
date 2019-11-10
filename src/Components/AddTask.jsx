import React from 'react';

const AddTask = (props) => {
    return (
        <div className="add-task">
            <input type="text" placeholder="할일 추가" value={props.task} onChange={props.handleChangeTask}/>
            <button type="button" onClick={props.handleAddTask}>추가</button>
        </div>
    );
};

export default AddTask;