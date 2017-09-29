import React, { Component } from 'react';
import NavBar from './NavBar';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Recipe
          title='pasta'
          ingredients={['flour', 'water']}
          instructions='Mix ingredients'
          img='spaghetti.jpg'
          />
      </div>
    );
  }
}

export default RecipeApp;
