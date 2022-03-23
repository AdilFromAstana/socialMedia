import React, {useState} from 'react';
import classes from "./RegistrationForm.module.css";
import AuthService from "../../../../service/AuthService";
import {useDispatch} from "react-redux";

const RegistrationForm = () => {

    const dispatch = useDispatch();

    const registration = async (email, password, name, surname) => {
        const response = await AuthService.registration(email, password, name, surname);
        localStorage.setItem('token', response.data.accessToken);
        dispatch({type: 'LOGIN_AUTH', payload: true});
        dispatch({type: 'LOGIN_USER', payload: response.data.user});
    }

    const [userInfo, setUserInfo] = useState({email: '', password: '', name: '', surname: ''});

    return (
        <div>
            <div className={classes.content}>
               <div className={classes.registrationText}>
                   <div className=''>Нет аккаунта в Торғай?</div><br/>
                   <div className=''>Моментальная регистрация</div>
               </div>
                <div className={classes.registrationForm}>
                    <input
                        className={classes.input}
                        placeholder='Ваш электронный адрес'
                        type="text"
                        value={userInfo.email}
                        onChange={e=>setUserInfo({...userInfo, email: e.target.value})}
                    />
                    <input
                        className={classes.input}
                        placeholder='Ваше имя'
                        type="text"
                        value={userInfo.name}
                        onChange={e=>setUserInfo({...userInfo, name: e.target.value})}
                    />
                    <input
                        className={classes.input}
                        placeholder='Ваша фамилия'
                        type="text"
                        value={userInfo.surname}
                        onChange={e=>setUserInfo({...userInfo, surname: e.target.value})}
                    />
                    <input
                        className={classes.input}
                        placeholder='Пароль'
                        type="password"
                        value={userInfo.password}
                        onChange={e=>setUserInfo({...userInfo, password: e.target.value})}
                    />
                    <button onClick={()=>registration(userInfo.email, userInfo.password, userInfo.name, userInfo.surname)}>Создать аккаунт!</button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;