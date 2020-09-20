import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.sass';
import Header from './components/header/header';
import Body from './components/body/body';

function App(props) {

  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Body categoriesData={props.state.categoriesData} addCategory={props.addCategory} />
    </div>
    </BrowserRouter>
  );
}

export default App;
