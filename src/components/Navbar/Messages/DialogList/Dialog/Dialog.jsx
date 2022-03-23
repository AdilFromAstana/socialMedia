import React from 'react';
import { useSelector } from 'react-redux';
import cross from './../../../../../icons/cross.png';
import classes from './Dialog.module.css';
import {useNavigate} from 'react-router-dom'; 

const Dialog = () => {

    const userList = useSelector(state=>state.userList.Diana);

    const router = useNavigate();

    return (
        <div className={classes.dialog} onClick={() => router(`/messages/${userList.name}`)}>
            <div className={classes.personPhoto}><img className={classes.personPhoto} src={userList.photo} alt="" /></div>
            <div className={classes.title}>
                <div className={classes.personName}>{userList.allname}</div>
                <div className={classes.lastMessage}>текст</div>
            </div>
            <div className={classes.deleteBtn}><img src={cross} alt="" className={classes.deleteImg}/></div>
        </div>
    );
};

export default Dialog;