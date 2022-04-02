import React from 'react';
import classes from './FormComment.module.css';
import { Link } from 'react-router-dom';
import send from './../../../../../icons/send.png';

const FormComment = ({comAuthor, comment, setComment, addNewComment}) => {

    return (
        <form className={classes.form} onSubmit={addNewComment}>
            <Link to={`/${comAuthor.id}`} className={classes.comAuthor}>
                <img src={`http://localhost:5000/${comAuthor.img}`} alt={comAuthor.name} className={classes.comPhoto}/>
            </Link>
            <input
                value={comment.text}
                className={classes.textCom}
                type="text"
                onChange={e=>setComment(e.target.value)}
            />
            <button className={classes.sendComBtn}>
                <img src={send} alt="send" className={classes.sendComImg}/>
            </button>
        </form>
    );
};

export default FormComment;