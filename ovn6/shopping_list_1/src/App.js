import { useState, useEffect } from 'react'

function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a97a27dba4msh0406c51ffc2c3b6p1e955djsnfc510facd835',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=milk', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}, []);

//loopa igenom resultatet och sätt namn i Recepy -kolla hur jag gjorde med Contacts (har nog bokmärke till tutorial)
//sedan tar jag från övn 5 för själva inköpslistans
return (
  <div className="App">
    Groceries Shopping List
  </div>
);
}

export default App;
