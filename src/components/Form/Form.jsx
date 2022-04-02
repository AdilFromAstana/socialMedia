import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import MyButton from './../../UI/MyButton/MyButton';
import MyInput from './../../UI/MyInput/MyInput';
import classes from './Form.module.css'
import AuthService from "../../service/AuthService";

const Form = () => {

    const user = useSelector(state=>state.userAuth.user);
    const anyPost = useSelector(state=>state.post.post.anyPost);

    const dispatch = useDispatch();

    const createPost = async (anyPost, user) => {
        try {
            await AuthService.posts(anyPost, user);
            dispatch({type: 'ADD_POSTS', payload: {
                anyPost: anyPost, 
                user: user
            }});
            dispatch({type: 'POST', payload: ''});
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form className={classes.form}>
            <div className={classes.content}>
                <Link to={`/${user.id}`}>
                    <img 
                        src={`http://localhost:5000/${user.img}`}
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
            <hr style={{border: 'none', height: '1px', background: 'gray'}}/>
            <MyButton onClick={()=>createPost(anyPost, user)}>
                Опубликовать
            </MyButton>
      </form>
    );
};

export default Form;