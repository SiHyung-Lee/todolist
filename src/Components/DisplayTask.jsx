import React from 'react';

const DisplayTask = (props) => {
    return props.tasks.map(task => {
        return (
            <div className="task" key={task.id}>
                <input type="checkbox" checked={task.done} onChange={props.handleCheck}/>
                <p>{task.text}</p>
                <button type="button">삭제</button>
            </div>
        )
    })
};

export default DisplayTask;