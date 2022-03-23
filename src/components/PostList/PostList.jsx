import React from 'react';
import EmptyPostList from './EmptyPostList/EmptyPostList';
import Post from './Post/Post';
import {useSelector, useDispatch} from "react-redux";
import AuthService from '../../service/AuthService';

const PostList = () => {

    const dispatch = useDispatch();

    const posts = useSelector(state=>state.posts.posts);

    const user = useSelector(state=>state.userAuth.user)

    const removePost = (post) => {
        if(post.authorId == user.id){
            let remove = AuthService.deletePost(post._id)
            dispatch({type: 'REMOVE_POST', payload: post._id})
        } else {
            console.log('Не твой пост')
        }
    }

    if (posts.length === 0){
        return(
            <EmptyPostList/>
        )
    }else{
        return (
            <div>
                {
                    posts.reverse().map(post=>
                        <Post post={post} key={post._id} removePost={removePost}/>
                    )
                }
            </div>
        )
    }
};

export default PostList;