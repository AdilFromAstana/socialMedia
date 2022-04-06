import React, {useState} from 'react';
import classes from './PostComments.module.css';
import AnyComment from './AnyComment/AnyComment';
import FormComment from './FormComment/FormComment';
import { useSelector } from 'react-redux';
import AuthService from '../../../../service/AuthService';

const PostComments = ({
        comCount, 
        setComCount, 
        comShow,
        post,
    }) => {

    const comAuthor = useSelector(state=>state.userAuth.user);

    const commentAuthor = `${comAuthor.name} ${comAuthor.surname}`;

    const commentAuthorId = `${comAuthor.id}`;

    const postId = `${post._id}`
    
    const [comments, setComments] = useState([]);
    const [commentValue, setCommentValue] = useState('');

    const addNewComment = async (e) => {
        if (commentValue === ''){
            e.preventDefault();
        } else {
            e.preventDefault();
            await AuthService.postComment(postId, commentValue, commentAuthor, commentAuthorId);
            setComments([...comments, { ...commentValue, id: Date.now() }]);
            setCommentValue('');
            setComCount(comCount+1)
        }
    }

    const removeCom = (comment) => {
        setComments(comments.filter(p => p.id !== comment.id))
        setComCount(comCount-1)
    }

    if(comShow){
        return(
            <div className={classes.wrapper}>
                <div className={classes.commentList}>
                    {
                        comments.map((comment,index)=>
                            <AnyComment comAuthor={comAuthor} comment={comment} remove={removeCom} key={index}/>
                        )
                    }
                </div>
                <FormComment comAuthor={comAuthor} addNewComment={addNewComment} setComment={setCommentValue} comment={commentValue}/>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
};

export default PostComments;