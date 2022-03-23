import React from 'react';
import { useSelector } from 'react-redux';
import classes from './AnyMessage.module.css';

const AnyMessage = () => {

    const userInfo = useSelector(state=>state.userInfo);

    return (
        <div className={classes.message}>
            <div className={classes.authorLinkImg}>
                <img src={userInfo.photo} alt="" className={classes.authorImg}/>
            </div>
            <div className={classes.messageTitle}>
                <div className={classes.authorLinkName}>{userInfo.name}</div>
                <div className={classes.messageText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique vel minima quaerat dolore saepe nulla ad? Eos dolore at perferendis, sequi assumenda voluptates harum ratione dolorem explicabo deleniti commodi ipsa?
                </div>
            </div>
        </div>
    );
};

export default AnyMessage;