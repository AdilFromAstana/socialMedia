import React from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import MyProfile from './../MyProfile/MyProfile';
import Navbar from './../Navbar/Navbar';
import classes from './PageContent.module.css';
import Messages from '../Navbar/Messages/Messages';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import Login from '../Login/Login';
import HeaderIn from '../HeaderIn/HeaderIn';
import HeaderEntry from '../HeaderEntry/HeaderEntry';
import {useDispatch, useSelector} from 'react-redux';
import Main from '../Navbar/Main/Main';
import Chat from '../Navbar/Messages/DialogList/Dialog/Chat/Chat';
import Friends from "../Navbar/Friends/Friends";
import AnyProfile from "../AnyProfile/AnyProfile";

const PageContent = () => {

    const userAuth = useSelector(state=>state.userAuth);
    const isLoading = useSelector(state => state.userAuth.isLoading);

    if(isLoading){
        return (
            <div>Загрузка...</div>
        )
    }

    return (
        userAuth.isAuth
        ?
        <div className={classes.content}>
            <HeaderIn/>
            <Navbar/>
            <Routes>
                <Route path='/main' element={<Main/>}/>
                <Route path='/messages' element={<Messages/>}/>
                <Route path='/messages/:id' element={<Chat/>}/>
                <Route path='/friends' element={<Friends/>}/>
                <Route path='/profile' element={<MyProfile/>}/>
                <Route path='/:id' element={<AnyProfile/>}/>
                <Route path='*' element={<Navigate to='/main'/>}/>
                <Route path='/profileSettings' element={<ProfileSettings/>}/>
            </Routes>
        </div>
        :
        <div className={classes.contentLogin}>
            <HeaderEntry/>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<Navigate to='/login'/>}/>
            </Routes>
        </div>
    )
};

export default PageContent;