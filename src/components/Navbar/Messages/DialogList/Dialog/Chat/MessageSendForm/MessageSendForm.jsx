import React from 'react';
import classes from './MessageSendForm.module.css';
import send from './../../../../../../../icons/send.png';
import attach from './../../../../../../../icons/attach.png';

const MessageSendForm = () => {

    const messageSend = (e) => {
        e.preventDefault()
    }

    return (
        <form className={classes.chatMessage}>
            <button className={classes.textSend} onClick={messageSend}>
                <img src={attach} alt="" className={classes.sendImg}/>
            </button>
            <input role='textbox' className={classes.input} type='text' placeholder='Напишите сообщение...'/>
            <button className={classes.textSend} onClick={messageSend}>
                <img src={send} alt="" className={classes.sendImg}/>
            </button>
        </form>
    );
};

export default MessageSendForm;