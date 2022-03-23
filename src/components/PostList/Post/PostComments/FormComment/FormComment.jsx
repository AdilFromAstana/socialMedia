import React from 'react';
import classes from './FormComment.module.css';
import { Link } from 'react-router-dom';
import send from './../../../../../icons/send.png';
import { useSelector } from 'react-redux';

const FormComment = ({comment, setComment, addNewComment}) => {

    const userInfo = useSelector(state=>state.userInfo);

    return (
        <form className={classes.form} onSubmit={addNewComment}>
            <Link to='/profile' className={classes.comAuthor}><img src={userInfo.photo} alt={userInfo.name} className={classes.comPhoto}/></Link>
            <input
                value={comment.text}
                className={classes.textCom}
                type="text"
                onChange={e=>setComment(e.target.value)}
            />
            <button className={classes.sendComBtn}><img src={send} alt="send" className={classes.sendComImg}/></button>
        </form>
    );
};

export default FormComment;