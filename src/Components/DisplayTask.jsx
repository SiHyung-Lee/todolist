import React from 'react';

const DisplayTask = () => {
    return (
        <div className="task">
            <input type="checkbox"/>
            <p>나의 할일</p>
            <button type="button">삭제</button>
        </div>
    );
};

export default DisplayTask;