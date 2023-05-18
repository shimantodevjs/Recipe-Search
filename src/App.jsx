import { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';


function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [count , setCount]= useState('')

  const handleSearch = async () => {
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=cb5b382d&app_key=aa55b4dfb894f52b9c9ff436fe9e57fc&to=10`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setResults(data.hits);
    setCount(data.count);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <div className='navBar'>
      <h1>RECIPES</h1>
      <div className="searchBar">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}><SearchIcon /></button>
      </div>
      <button className='loginBtn'><LoginIcon /></button>
      </div>
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.recipe.uri}>
              <pre>
                {result.recipe.label}
              </pre>
            </li>
          ))}
        </ul>
      )}
      {count === 0 && (
        <div className='empty'>No Recipes Found</div>
      )}
    </div>
  );
}

export default App
