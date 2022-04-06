import React from 'react';
import classes from '../Modal/Modal.module.css';

const Modal = ({modal, setModal}) => {

    if(!modal){
        return(
            <div></div>
        )
    }

    return (
        <div className={classes.modal} onClick={()=>setModal(false)}>
            <div className={classes.content}>
                Хотите выйти из учетной записи?
                <div className={classes.option}>
                    <button className={classes.exit}>Да, хочу выйти</button>
                    <button className={classes.cancel}>Нет, останусь</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;