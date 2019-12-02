import React from 'react';

const DisplayTask = (props) => {
    return props.tasks.map(task => {
        return (
            <div className="task" key={task.id}>
                <input type="checkbox" checked={task.done} onChange={() => props.handleCheck(task.id)}/>
                <p>{task.text}</p>
                <button type="button" onClick={() => props.handleDelete(task.id)}>삭제</button>
            </div>
        )
    })
};

export default DisplayTask;