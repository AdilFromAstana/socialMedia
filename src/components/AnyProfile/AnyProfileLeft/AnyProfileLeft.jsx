import React from 'react';
import classes from "./AnyProfileLeft.module.css";

const AnyProfileLeft = ({user}) => {

    return (
        <div className={classes.content}>
            <div className={classes.photo}>
                <img src={`http://localhost:5000/${user.img}`} className={classes.imgProfile} alt="profile photo"/>
                <div className={classes.textToChange}>Редактировать</div>
            </div>
            <div className={classes.friends_content}>
                <span style={{color: 'white'}}>Друзья 20</span>
                <div className={classes.friends_list}>
                    <div className={classes.friend_profile}>
                        <div className={classes.imgIcons}></div>
                        <div className={classes.friend_name}>Abay</div>
                    </div>
                    <div className={classes.friend_profile}>
                        <div className={classes.imgIcons}></div>
                        <div className={classes.friend_name}>Abay</div>
                    </div>
                    <div className={classes.friend_profile}>
                        <div className={classes.imgIcons}></div>
                        <div className={classes.friend_name}>Abay</div>
                    </div>
                    <div className={classes.friend_profile}>
                        <div className={classes.imgIcons}></div>
                        <div className={classes.friend_name}>Abay</div>
                    </div>
                    <div className={classes.friend_profile}>
                        <div className={classes.imgIcons}></div>
                        <div className={classes.friend_name}>Abay</div>
                    </div>
                    <div className={classes.friend_profile}>
                        <div className={classes.imgIcons}></div>
                        <div className={classes.friend_name}>Abay</div>
                    </div>
                </div>
            </div>
            <div className='groups'></div>
        </div>
    );
};

export default AnyProfileLeft;