import React from 'react';
import RecipeSearchForm from './RecipeSearchForm';
import './normalize.css';
import './skeleton.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="u-full-width">
          <header className="App-header">
            Surely Meal Planner
          </header>
        </div>
      </div>
      <RecipeSearchForm />
    </div>
  );
}

export default App;
