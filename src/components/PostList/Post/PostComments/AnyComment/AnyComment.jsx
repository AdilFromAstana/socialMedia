import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AnyComment.module.css';
import cross from './../../../../../icons/cross.png';

const AnyComment = ({comAuthor, comment, remove}) => {

    return (
        <div className={classes.content}>
            <Link to={`/${comAuthor.id}`}>
                <img
                    className={classes.commentAuthorPhoto} 
                    src={`http://localhost:5000/${comAuthor.img}`}
                    alt={comAuthor.name}
                />
            </Link>
            <div className={classes.commentAuthor}>
                <Link to={`/${comAuthor.id}`} className={classes.commentAuthorName}>
                    {comAuthor.name + ' ' + comAuthor.surname}
                </Link>
                <div className={classes.commentAuthorText}>{comment.text}</div>
            </div>
            <img src={cross} alt="" className={classes.removeBtn} onClick={()=>remove(comment)}/>
        </div>
    );
};

export default AnyComment;