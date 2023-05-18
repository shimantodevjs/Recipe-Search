import { useState } from 'react'


function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=cb5b382d&app_key=aa55b4dfb894f52b9c9ff436fe9e57fc&to=10`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setResults(data.hits);
  } catch (error) {
    console.error(error);
  }
};



  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
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
    </div>
  );
}

export default App
