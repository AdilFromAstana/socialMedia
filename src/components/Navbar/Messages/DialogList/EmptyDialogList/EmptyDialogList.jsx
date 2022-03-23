import React from 'react';
import classes from './EmptyDialogList.module.css';
import EmptyDialogListIcon from './../../../../../icons/EmptyDialogList.png';

const EmptyDialogList = () => {
    return (
        <div className={classes.emptyDialogList}>
            <img src={EmptyDialogListIcon} alt="" className={classes.emptyDialogListImg}/>
            <div className={classes.emptyDialogListTitle}>
                Чаты не найдены, начните с кем-то диалог первым!
            </div>
        </div>
    );
};

export default EmptyDialogList;