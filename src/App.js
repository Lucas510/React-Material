import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './reactblog';
import ContainedButtons from './ContainedButtons';
import SinglelineGridlist from './SinglelineGridlist';
import { Footer } from './reactblog';
function App() {
  return (
    <div className="App">

      <header className="App-header">
      <h1>El Pais del Chocolate</h1>
      </header>
      
      <body className="App-body">

      <ContainedButtons/>
      <SinglelineGridlist/>
      <Blog/>
      <Footer/>

      </body>
      
    </div>

  );
}

export default App;

