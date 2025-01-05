import React from 'react';
import './App.css';

const App = () => {
   return (
      <div className="App">
         Hello, samurai! Let's go!
         <Header />
         <Technologies />
      </div>
   );
};

const Header = () => {
   return (
      <div>
         <a href="#">Home </a>
         <a href="#">New Feed </a>
         <a href="#">Messages </a>
      </div>
   );
};
const Technologies = () => {
   return (
      <ul>
         <li>CSS</li>
         <li>Html</li>
         <li>js</li>
         <li>REACT</li>
      </ul>
   );
};

export default App;
