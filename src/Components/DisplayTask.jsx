import React from 'react';

const DisplayTask = (props) => {
    const displayTask = props.tasks.map(task => {
        return (
            <div className="task">
                <input type="checkbox"/>
                <p>{task}</p>
                <button type="button">삭제</button>
            </div>
        )
    });

    return displayTask;
};

export default DisplayTask;