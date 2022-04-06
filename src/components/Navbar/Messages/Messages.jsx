import React from 'react';
import DialogList from './DialogList/DialogList';
import classes from './Messages.module.css';
import DialogSearch from './DialogSearch/DialogSearch';

const Messages = () => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <DialogSearch/>
                <DialogList/>
            </div>
        </div>    
    );
};

export default Messages;