import React from 'react';
import classes from './PostContent.module.css';

const PostContent = ({post}) => {

    return (
        <div className={classes.content}>
            {post.anyPost}
        </div>
    );
};

export default PostContent;