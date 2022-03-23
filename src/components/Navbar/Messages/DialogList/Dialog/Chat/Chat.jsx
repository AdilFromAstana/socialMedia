import React from 'react';
import classes from './Chat.module.css';
import ChatHistory from './ChatHistory/ChatHistory';
import ChatTitle from './ChatTitle/ChatTitle';
import MessageSendForm from './MessageSendForm/MessageSendForm';
import {useParams} from 'react-router-dom';

const Chat = () => {

    const params = useParams();

    return (
        <div className={classes.content}>
            <ChatTitle/>
            <ChatHistory/>
            <MessageSendForm/>
        </div>
    );
};

export default Chat;