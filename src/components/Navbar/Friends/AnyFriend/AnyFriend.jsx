import React from 'react';
import classes from './AnyFriend.module.css';
import {useNavigate} from "react-router-dom";

const AnyFriend = ({user}) => {

    const router = useNavigate();

    return (
        <div className={classes.anyUser}>
            <img
                onClick={() => router(`/${user._id}`)}
                className={classes.photo}
                src={`http://localhost:5000/${user.img}`}
                alt="userPhoto"
            />
            <div className={classes.infoBlock}>
                <div
                    className={classes.userName}
                    onClick={() => router(`/${user._id}`)}
                >
                    {user.name + ' ' + user.surname}
                </div>
                <div className={classes.writeMessage}>Написать сообщение</div>
            </div>
        </div>
    );
};

export default AnyFriend;