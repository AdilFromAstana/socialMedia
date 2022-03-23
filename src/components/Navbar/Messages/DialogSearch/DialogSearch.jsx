import React from 'react';
import search from './../../../../icons/search.png';
import classes from './DialogSearch.module.css';

const DialogSearch = () => {
    return (
        <div className={classes.dialogSearch}>
            <img src={search} alt="" className={classes.searchImg}/>
            <input type="text" className={classes.searchInput}/>
        </div>
    );
};

export default DialogSearch;