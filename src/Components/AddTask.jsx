import React from 'react';

const AddTask = () => {
    return (
        <div className="add-task">
            <input type="text" placeholder="할일 추가"/>
            <button type="button">추가</button>
        </div>
    );
};

export default AddTask;