import React, { useState, useEffect } from 'react';
import './App.css';
import { Checkbox, FormControlLabel, FormGroup, TextField } from '@material-ui/core';
import {items} from './data/glossaryItems'
import { sortAlphabetic } from './utils'

function App() {
  const [glossaryItems, setGlossaryItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  const categories = [...new Set(items.map(item => item.category))];

  // handle checkbox toggle to filter items
  const handleToggle = (event) => {
    if (event.target.checked) {
        setGlossaryItems(sortAlphabetic([...glossaryItems, ...items.filter(item => item.category === event.target.value)]));
    } else {
        setGlossaryItems(sortAlphabetic(glossaryItems.filter(item => item.category !== event.target.value)));
      }
  }

  // handle search text to filter items
  useEffect(() => {
    setGlossaryItems(sortAlphabetic(items.filter(item => item.glossaryItem.toLowerCase().includes(searchText.toLowerCase()))));
  }, [searchText]);
  
  return (
    <div className="App">
      <header className="App-header">
      {/* <a href="../public/logo192.png" download="logo">Download</a> */}
      <h1>Climbing Terms</h1>
        <FormGroup>{categories.map(category => 
        <FormControlLabel  key={category} label={category} control={<Checkbox value={category} onChange={(e)=>handleToggle(e)} />} />)}
        </FormGroup>
        <TextField label='search' onChange={e => setSearchText(e.target.value)}/>
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
