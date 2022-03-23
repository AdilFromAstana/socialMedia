import React from 'react';
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <textarea 
            className={classes.myInput}
            {...props}
        >
            
        </textarea> 
    );
};

export default MyInput;