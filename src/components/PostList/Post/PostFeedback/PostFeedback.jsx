import React, {useState} from 'react';
import classes from './PostFeedback.module.css';
import repost from './../../../../icons/repost.png';
import comments from './../../../../icons/comments.png';
import likes from './../../../../icons/likes.png';
import visible from './../../../../icons/visible.png';

const PostFeedback = ({comCount, comShow ,setComShow}) => {

    const [like, setLike] = useState(0);

    const addLike = (e) => {
      e.preventDefault()
      setLike(like+1)
    }

    return (
        <div className={classes.feedbackAll}>
            <div className={classes.feedback}>
                <div onClick={addLike} className={classes.likes}>
                    <img className={classes.img} src={likes}/>
                    <div style={{padding: '0 5px'}}>
                        {like}
                    </div>
                </div>
                <div onClick={()=>setComShow(!comShow)} className={classes.likes}>
                    <img className={classes.img} src={comments}/>
                    <div style={{padding: '0 5px'}}>
                        {comCount}
                    </div>
                </div>
                <div className={classes.likes}>
                    <img className={classes.img} src={repost}/>
                    <div style={{padding: '0 5px'}}>
                        1
                    </div>
                </div>
            </div>
            <div className={classes.views}>
                <img style={{backgroundColor: '#595959',width:'25px', height:'25px'}} src={visible}/><div style={{backgroundColor: '#595959', padding: '0 5px', display: 'flex', alignItems: 'center'}}>102</div>
            </div>
        </div>
    );
};

export default PostFeedback;