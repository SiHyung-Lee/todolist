import React from 'react';

const DisplayTask = (props) => {
    return props.tasks.map(task => {
        return (
            <div className="task" key={task.id}>
                <input type="checkbox" checked={task.done} onChange={() => props.handleCheck(task.id)}/>
                <input type="text" value={task.text} readOnly={task.readOnly} ref={props.onRefInput} onChange={props.handleModifyTask}/>
                <button type="button" className="button-modify" onClick={() => props.handleModify(task.id)}>수정</button>
                <button type="button" className="button-delete" onClick={() => props.handleDelete(task.id)}>삭제</button>
            </div>
        )
    })
};

export default DisplayTask;