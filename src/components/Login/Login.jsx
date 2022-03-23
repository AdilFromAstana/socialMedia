import React from 'react';
import classes from './Login.module.css';
import LoginForm from './Forms/LoginForm/LoginForm';
import About from './About/About';
import RegistrationForm from "./Forms/RegistrationForm/RegistrationForm";

const Login = () => {

    return (
        <div className={classes.content}>
            <About/>
            <div>
                <LoginForm/>
                <RegistrationForm/>
            </div>
        </div>
    );
};

export default Login;