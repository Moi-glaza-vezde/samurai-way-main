import React from 'react';
import s from './MyPosts.module.css';
import { Post } from '../post/Post';

export const MyPosts = () => {
   return (
      <div>
         My posts
         <div>
            <textarea></textarea>
            <button>add post</button>
         </div>
         <div className={s.posts}>
            <Post message={'Hi, how are you'} likeCount={'3'} />
            <Post message={'its my first post'} likeCount={'5'} />
         </div>
      </div>
   );
};
