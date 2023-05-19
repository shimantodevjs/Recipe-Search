import { useState} from 'react'
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';


function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [count , setCount]= useState('')
  const [loading, setLoading]=useState(false)

  const handleSearch = async () => {
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=cb5b382d&app_key=aa55b4dfb894f52b9c9ff436fe9e57fc&to=10`;

  try {
    setLoading(true)
    setResults([])
    setCount([])

    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setResults(data.hits);
    setCount(data.count);
  } catch (error) {
    console.error(error);
  } finally{
    setLoading(false)
  }

};

  const handleEnterSearch=(e)=>{
    if(e.key === 'Enter'){
      handleSearch();
    }
  }

  const onChangeHandler=(e)=>{
      setQuery(e.target.value)
  }


  return (
    <div>
      
    <Navbar
       query={query}
       onChangeHandler={onChangeHandler}
       handleEnterSearch={handleEnterSearch}
       handleSearch={handleSearch}
    />

    <div className='main__content'>
      <RecipeCard
         loading={loading}
         results={results}
         count={count}
      />
    </div>

    </div>
  );
}

export default App
