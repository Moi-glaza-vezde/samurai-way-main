import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/dialogs">Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/news">News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/music">Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/setting">Setting</NavLink>
                </li>
            </ul>
        </nav>
    );
};
