import React, {useEffect} from 'react';
import classes from './Friends.module.css';
import AnyFriend from "./AnyFriend/AnyFriend";
import UserService from "../../../service/UserService";
import {useDispatch, useSelector} from "react-redux";

const Friends = () => {

    const dispatch = useDispatch();

    const users = useSelector(state=>state.usersList.users)

    async function getUsers(){
        dispatch({type: 'USERS_LOADING', payload: true})
        try {
            let response = await UserService.fetchUsers()
            dispatch({type: 'USERS', payload: response.data})
        } catch (e) {
            console.log(e)
        } finally {
            dispatch({type: 'USERS_LOADING', payload: false})
        }
    }

    useEffect(()=> {
        getUsers()
    })

    if(users.isLoading){
        return (
            <div>Загрузка...</div>
        )
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                {users.map(user=>
                    <AnyFriend user={user} key={user._id}/>
                )}
            </div>
        </div>
    );
};

export default Friends;