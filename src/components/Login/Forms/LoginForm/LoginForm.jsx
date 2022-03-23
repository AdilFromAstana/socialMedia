import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './LoginForm.module.css';
import AuthService from "../../../../service/AuthService";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (email, password) => {
        try{
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response.data.user)
            dispatch({type: 'LOGIN_AUTH', payload: true})
            dispatch({type: 'LOGIN_USER', payload: response.data.user})
            navigate('/main')
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className={classes.content}>
            <div className={classes.loginTitle}>Войти в систему</div>
            <div className={classes.form}>
                <input 
                    className={classes.input}
                    type="text"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    className={classes.input}
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className={classes.button} onClick={()=>login(email, password)}>Войти</button>
            </div>
        </div>
    );
};

export default LoginForm;