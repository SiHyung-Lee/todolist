import React from 'react';

const DisplayTask = (props) => {
    return (
        <div className="task">
            <input type="checkbox"/>
            <p>{props.tasks}</p>
            <button type="button">삭제</button>
        </div>
    );
};

export default DisplayTask;