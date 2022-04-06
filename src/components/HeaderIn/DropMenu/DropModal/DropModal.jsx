import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './DropModal.module.css';
import AuthService from "../../../../service/AuthService";

const DropModal = ({modal, setModal}) => {

    const dispatch = useDispatch();

    const logout = async () => {
        try {
            let response = await AuthService.logout();
            localStorage.removeItem('token');
            dispatch({type: 'LOGIN_AUTH', payload: false});
            dispatch({type: 'LOGIN_USER', payload: {}});
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    const cancel = (e) => {
        e.preventDefault();
        setModal(!modal)
    }

    if(modal){
        return(
            <div></div>
        )
    }
        return (
            <div className={classes.modal}>
                <div className={classes.content}>
                    Хотите выйти из учетной записи?
                    <div className={classes.option}>
                        <button className={classes.exit} onClick={()=>logout()}>Да, хочу выйти</button>
                        <button className={classes.cancel} onClick={cancel}>Нет, останусь</button>
                    </div>
                </div>
            </div>
        );
};

export default DropModal;