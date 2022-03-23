import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HeaderEntry.module.css';
import logo from './../../icons/logo.png';

const HeaderEntry = () => {

    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <Link to='/login' className={classes.logo}>
                    <img className={classes.imgLogo} src={logo} alt="" />
                    <span className={classes.logoText}>торғай</span>
                </Link>
            </div>
        </div>
    );
};

export default HeaderEntry;