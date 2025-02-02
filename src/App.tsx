import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {NavBar} from './components/navBar/NavBar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {Setting} from './components/setting/Setting';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content ">
                    <Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/profile"} component={Profile}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/setting"} component={Setting}/>
                </div>

            </div>
        </BrowserRouter>
    )
        ;
};

export default App;
