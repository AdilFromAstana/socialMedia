import React, {useEffect, useState} from 'react';
import PostList from "../../PostList/PostList";
import {useDispatch, useSelector} from "react-redux";
import UserService from "../../../service/UserService";
import classes from './AnyProfileRight.module.css';
import { posts } from '../../../store/posts';

const AnyProfileRight = ({user, id}) => {

    const dispatch = useDispatch();

    async function getUserPosts(){
        try {
            let posts = await UserService.getUserPosts(id)
            dispatch({type: 'USER_POSTS', payload: posts.data});
        } catch (e) {
            console.log(e)
        }
    }

    const userName = `${user.name} ${user.surname}`

    useEffect(()=> {
        getUserPosts()
    }, [])

    return (
        <div className={classes.content}>
            <div className={classes.info}>
                <div className={classes.mainInfo}>
                    <h1>{userName}</h1>
                    <span className={classes.status}>online</span>
                </div>
                <hr style={{border: 'none', height: '1px', backgroundColor: 'white'}}/>
                <div className={classes.otherInfo}>
                    <div className={classes.oneOfInfo}>
                        <div className={classes.question}>Родной город</div>
                        <div className={classes.answear}>Степногорск</div>
                    </div>
                    <div className='oneOfInfo'>
                        <div className={classes.question}>Родной язык</div>
                        <div className={classes.answear}>Русский язык</div>
                    </div>
                </div>
                <hr style={{border: 'none', height: '1px', backgroundColor: 'white', margin: '10px 0'}}/>
                <div className={classes.countInfo}>
                    <div className={classes.countI}>
                        <div className={classes.postsCount}>{posts.length}</div>
                        <div>Постов</div>
                    </div>
                    <div className={classes.countI}>
                        <div className={classes.photoCount}>1</div>
                        <div>Фото</div>
                    </div>
                    <div className='countI'>
                        <div className={classes.groupCount}>5</div>
                        <div>Группы</div>
                    </div>
                </div>
            </div>
            <div className={classes.photoInfo}>
                <div className={classes.photoCount}>
                    <div className={classes.countP}>Мои фото 1</div>
                    <div className={classes.allP}>Показать все</div>
                </div>
            </div>
            <PostList/>
        </div>
    );
};

export default AnyProfileRight;