import React from 'react';
import s from './Profile.module.css';
export const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7ZM5IRn9GL1_cdI8TDtkdKFx_9YVRBOUNw&s"
               alt=""
            />
         </div>
         <div>
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAusHk8prvj8i_jBTp_c-ViMgjSGEum7kFw&s"
               alt=""
            />
         </div>
         <div>
            My posts
            <div>New posts</div>
            <div className={s.posts}>
               <div className={s.item}>Post 1</div>
               <div className={s.item}>Post 2</div>
            </div>
         </div>
      </div>
   );
};
