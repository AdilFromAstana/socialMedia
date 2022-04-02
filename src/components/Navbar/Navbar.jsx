import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import classes from './Navbar.module.css';
import profile from './../../icons/profile.png';
import posts from './../../icons/posts.png';
import message from './../../icons/message.png';
import friends from './../../icons/friends.png';

const Navbar = () => {

    const user = useSelector(state=>state.userAuth.user)

    return (
            <div className={classes.navbar}>
                <Link className={classes.link} to={`/${user.id}`}>
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