import React from 'react';
import s from './ProfileInfo.module.css'
export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7ZM5IRn9GL1_cdI8TDtkdKFx_9YVRBOUNw&s"
                    alt=""
                />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};

