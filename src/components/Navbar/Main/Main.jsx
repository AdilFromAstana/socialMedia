import React, {useEffect} from 'react';
import Form from '../../Form/Form';
import PostList from '../../PostList/PostList';
import classes from './Main.module.css'
import {useDispatch} from "react-redux";
import UserService from "../../../service/UserService";

const Main = () => {

    const dispatch = useDispatch();

    async function getAllPosts(){
        try {
            const response = await UserService.fetchPosts()
            if(response.data.length !== 0){
                dispatch({type: 'POSTS', payload: response.data});
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=> {
        getAllPosts()
    })

    return (
        <div className={classes.content}>
            <div className={classes.posts}>
                <Form/>
                <PostList/>
            </div>
            <div className={classes.linksList}>
                <div className={classes.a} >Новости</div>
                <div className={classes.a} >Рекомендации</div>
                <div className={classes.a} >Поиск</div>
                <div className={classes.a} >Реакции</div>
                <div className={classes.a} >Обновления</div>
                <div className={classes.a} >Комментарии</div>
            </div>
        </div>
    );
};

export default Main;