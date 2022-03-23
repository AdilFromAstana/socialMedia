import React from 'react';
import AnyMessage from './AnyMessage/AnyMessage';
import classes from './ChatHistory.module.css';

const ChatHistory = () => {

    return (
        <div className={classes.content}>
            <AnyMessage/>
        </div>
    );
};

export default ChatHistory;