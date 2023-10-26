import React, { useState } from 'react';
import './App.css';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import {items} from './data/glossaryItems'
import { sortAlphabetic } from './utils'

function App() {
  const [glossaryItems, setGlossaryItems] = useState([]);

  const categories = [...new Set(items.map(item => item.category))];

  // handle checkbox toggle to filter items
  const handleToggle = (event) => {
    if (event.target.checked) {
        setGlossaryItems(sortAlphabetic([...glossaryItems, ...items.filter(item => item.category === event.target.value)]));
    } else {
        setGlossaryItems(sortAlphabetic(glossaryItems.filter(item => item.category !== event.target.value)));
      }
  }

  return (
    <div className="App">
      <header className="App-header">
      {/* <a href="../public/logo192.png" download="logo">Download</a> */}
      <h1>Climbing Terms</h1>
        <FormGroup className="categoriesChecks">{categories.map(category => 
        <FormControlLabel className='checkBox' key={category} label={category} control={<Checkbox value={category} onChange={(e)=>handleToggle(e)} />} />)}
        </FormGroup>
        {glossaryItems.map(item => (
          <div key={item.glossaryItem}>
            <h2>{item.glossaryItem}</h2>
            <p>{item.definition}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
