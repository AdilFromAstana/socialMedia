import React from 'react';
import classes from './Chat.module.css';
import ChatHistory from './ChatHistory/ChatHistory';
import ChatTitle from './ChatTitle/ChatTitle';
import MessageSendForm from './MessageSendForm/MessageSendForm';

const Chat = () => {

    return (
        <div className={classes.content}>
            <ChatTitle/>
            <ChatHistory/>
            <MessageSendForm/>
        </div>
    );
};

export default Chat;