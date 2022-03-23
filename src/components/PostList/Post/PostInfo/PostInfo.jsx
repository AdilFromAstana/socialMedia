import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './PostInfo.module.css';
import trash from './../../../../icons/trash.png';

const PostInfo = ({post, removePost}) => {

    const photo = useSelector(state => state.userInfo.photo);

    return (
        <div className={classes.postInfo}>
            <Link to={`/${post.authorId}`}>
                <img
                    src={photo}
                    className={classes.postImage}
                    alt="Аватар юзера"
                />
            </Link>
            <div className={classes.postText}>
                <Link to={`/${post.authorId}`} className={classes.link}>
                    <strong className={classes.postBG}>{post.author}</strong>
                    <br/> 
                </Link>
                <div className={classes.postBG}>Сегодня в 22:00</div>
            </div>
            <button className={classes.button} onClick={() => removePost(post)}>
                <img
                    src={trash}
                    alt="trash"
                    className={classes.ellipsis} 
                />
            </button>
        </div>
    );
}

export default PostInfo;