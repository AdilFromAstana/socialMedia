import React from 'react';
import MyProfileLeft from './MyProfileLeft/MyProfileLeft';
import MyProfileRight from './MyProfileRight/MyProfileRight';
import classes from './MyProfile.module.css'

const MyProfile = () => {
    return (
        <div className={classes.content}>
            <MyProfileLeft/>
            <MyProfileRight/>
        </div>
    );
};

export default MyProfile;