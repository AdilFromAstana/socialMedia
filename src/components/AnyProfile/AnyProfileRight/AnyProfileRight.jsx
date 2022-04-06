import React, {useEffect} from 'react';
import PostList from "../../PostList/PostList";
import Form from "../../Form/Form";
import {useDispatch, useSelector} from "react-redux";
import UserService from "../../../service/UserService";
import classes from './AnyProfileRight.module.css';

const AnyProfileRight = ({anyUser, id, modal, setModal}) => {

    const user = useSelector(state=>state.userAuth.user)

    const posts = useSelector(state=>state.posts.posts)

    const dispatch = useDispatch();

    async function getUserPosts(){
        try {
            let posts = await UserService.getUserPosts(id);
            dispatch({type: 'USER_POSTS', payload: posts.data});
        } catch (e) {
            console.log(e)
        }
    }

    const userName = `${anyUser.name} ${anyUser.surname}`

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
                    <div className={classes.oneOfInfo}>
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
            <div className={classes.imgInfo}>
                <div className={classes.imgCount}>
                    {user.id === id 
                    ? 
                        <span>Мои фото</span>
                    :
                        <span>Фотографии {anyUser.name}</span>
                    }
                </div>
                <div className={classes.allImg}>
                    <img 
                        onClick={() => setModal(true)}
                        className={classes.anyImg}
                        src={`http://localhost:5000/${anyUser.img}`} 
                        alt="" 
                    />
                </div>
            </div>
            {user.id === id
            ?
                <Form/>
            :
                ''
            }
            <PostList/>
        </div>
    );
};

export default AnyProfileRight;