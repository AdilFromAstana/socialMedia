import React from 'react';
import emptyPostList from './emptyPostList.png';
import classes from './EmptyPostList.module.css';

const EmptyPostList = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.content}>
                <img src={emptyPostList} alt="" className={classes.img}/>
                <div className={classes.text}>Посты не найдены</div>
            </div>
        </div>
    );
};

export default EmptyPostList;