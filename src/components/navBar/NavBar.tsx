import React from 'react';
import s from './NavBar.module.css';



export const NavBar = () => {
   return (
      <nav className={s.nav}>
         <ul>
            <li className={s.item}>
               <a href="/profile">Profile</a>
            </li>
            <li className={s.item}>
               <a href="/dialogs">Messages</a>
            </li>
            <li className={s.item}>
               <a href="#">News</a>
            </li>
            <li className={s.item}>
               <a href="#">Music</a>
            </li>
            <li className={s.item}>
               <a href="#">Setting</a>
            </li>
         </ul>
      </nav>
   );
};
