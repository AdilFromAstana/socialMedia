import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ChatTitle.module.css';
import searchImg from './../../../../../../../icons/search.png';
import arrow from './../../../../../../../icons/arrow.png';

const ChatTitle = () => {

    const userList = useSelector(state=>state.userList.Diana);

    return (
        <div className={classes.chatTitle}>
            <div className={classes.backToListBtn}>
                <img src={arrow} alt="" className={classes.arrowImg}/>
                <div className={classes.backText}>Назад</div>
            </div>
            <div className={classes.personName}>
                {userList.allname}
            </div>
            <div className={classes.buttons}>
                <div className={classes.searchBtn}>
                    <img src={searchImg} alt="" className={classes.searchImg}/>
                </div>
                <img src={userList.photo} alt="" className={classes.personPhoto}/>
            </div>
        </div>
    );
};

export default ChatTitle;