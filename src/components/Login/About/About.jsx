import React from 'react';
import classes from './About.module.css';
import Title from './Title/Title';
import logo from './../../../icons/logo.png';

const About = () => {
    return (
        <div className={classes.about}>
            <Title/>
            <div className={classes.bgImg}>
                <img 
                    className={classes.img}
                    src={logo}
                    alt="Логотип" 
                />
            </div>
        </div>
    );
};

export default About;