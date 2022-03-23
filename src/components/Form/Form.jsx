import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import MyButton from './../../UI/MyButton/MyButton';
import MyInput from './../../UI/MyInput/MyInput';
import classes from './Form.module.css'
import AuthService from "../../service/AuthService";

const Form = () => {

    const userInfo = useSelector(state=>state.userInfo);
    const anyPost = useSelector(state=>state.post.post);

    const authorName = useSelector(state=>state.userAuth.user.name);
    const authorSurname = useSelector(state=>state.userAuth.user.surname);
    const author = authorName + ' ' + authorSurname;
    const authorId = useSelector(state=>state.userAuth.user.id);

    const dispatch = useDispatch();

    const createPost = async (e, anyPost, author, authorId) => {
        try {
            e.preventDefault()
            const response = await AuthService.posts(anyPost, author, authorId);
            console.log(response);
            dispatch({type: 'ADD_POSTS', payload: anyPost});
            dispatch({type: 'POST', payload: ''});
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form className={classes.form}>
            <div className={classes.content}>
                <Link to='/profile'>
                    <img 
                        src={userInfo.photo}
                        className={classes.authorImage}
                        alt="profile photo"
                    />
                </Link>
                <MyInput
                    type='text'
                    value={anyPost}
                    onChange={e=>dispatch({type:'POST', payload: e.target.value})}
                    placeholder='Что у вас нового?'
                />
                </div>
            <hr style={{border: 'none' ,height: '1px', background: 'gray'}}/>
            <MyButton onClick={(e)=>createPost(e, anyPost, author, authorId)}>
                Опубликовать
            </MyButton>
      </form>
    );
};

export default Form;