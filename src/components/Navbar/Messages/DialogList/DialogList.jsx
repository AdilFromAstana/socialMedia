import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './DialogList.module.css';
import EmptyDialogList from './EmptyDialogList/EmptyDialogList';


const DialogList = () => {
    return (
        <div className={classes.dialogList}>
            <Dialog/>
        </div>
    );
};

export default DialogList;