import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import profile from './../../icons/profile.png';
import posts from './../../icons/posts.png';
import message from './../../icons/message.png';
import friends from './../../icons/friends.png';

const Navbar = () => {
    return (
            <div className={classes.navbar}>
                <Link className={classes.link} to='/profile'>
                    <img className={classes.img} src={profile} alt="" />
                    <span className={classes.linkText}>Мой профиль</span>
                </Link>

                <Link className={classes.link} to='/main'>
                    <img className={classes.img} src={posts} alt="" />
                    <span className={classes.linkText}>Новости</span>
                </Link>

                <Link className={classes.link} to='/messages'>
                    <img className={classes.img} src={message} alt="" />
                    <span className={classes.linkText}>Сообщение</span>
                </Link>

                <Link className={classes.link} to='/friends'>
                    <img className={classes.img} src={friends} alt="" />
                    <span className={classes.linkText}>Друзья</span>
                </Link>
            </div>
    );
};

export default Navbar;