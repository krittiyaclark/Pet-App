import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    return (
    <header>
      <h2><a>Recipe App</a></h2>
      <nav>
        <li><a>New Recipe</a></li>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact Us</a></li>
      </nav>
    </header>

    );
  }
}

export default NavBar;
