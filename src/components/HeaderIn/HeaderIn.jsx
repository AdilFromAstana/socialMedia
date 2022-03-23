import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropMenu from './DropMenu/DropMenu';
import classes from './HeaderIn.module.css';
import logo from './../../icons/logo.png';
import arrow from './../../icons/arrow.png';
import { useSelector } from 'react-redux';

const HeaderIn = () => {

const userInfo = useSelector(state=>state.userInfo)

const [active, setActive] = useState(false);

    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <Link to='/main'className={classes.logo}>
                    <img className={classes.imgLogo} src={logo} alt="" />
                    <span className={classes.logoText}>торғай</span>
                </Link>
                <button className={classes.profile} onClick={()=>setActive(!active)}>
                    <img src={userInfo.photo} alt="" className={classes.profileImg} />                
                    <img src={arrow} alt="" className={classes.profileMore}/>
                </button>
                <DropMenu active={active}/>
            </div>
        </div>
    );
};

export default HeaderIn;