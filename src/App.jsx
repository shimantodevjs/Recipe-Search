import {useEffect ,useState} from 'react'
import { Route, Routes , useLocation } from "react-router-dom"
import RecipePage from './pages/RecipePage';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';


function App() {
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [count , setCount]= useState('');
  const [loading, setLoading]=useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const { pathname } = useLocation();

  

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);


const handleSearch = async () => {
    const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=cb5b382d&app_key=aa55b4dfb894f52b9c9ff436fe9e57fc&to=10`;

  try {
    setLoading(true)
    setResults([])
    setCount([])

    const response = await fetch(API_URL);
    const data = await response.json();
    setResults(data.hits);
    setCount(data.count);
  } catch (error) {
    console.error(error);
  } finally{
    setLoading(false)
  }

};


  const handleEnterSearch = (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
};

  const onChangeHandler=(e)=>{
      setQuery(e.target.value)
  }


  return (
    <div className='app'>
    <Navbar
       query={query}
       onChangeHandler={onChangeHandler}
       handleEnterSearch={handleEnterSearch}
       handleSearch={handleSearch}
       darkMode={darkMode}
       setDarkMode={setDarkMode}
    />

     <div className='main__content'>
        <Routes>

          <Route
             path='/'
             element={<Homepage />}
          />
         
          <Route
            path='/recipepage'
            element={<RecipeCard 
                           results={results} 
                           loading={loading}
                           count={count}
                    />}
          />
          <Route
            path='/recipepage/:recipeUri'
            element={<RecipePage 
                          results={results}
                          />}
          />
          <Route
             path='/login'
             element={<LoginPage />}
          />
        </Routes>
      </div>

    </div>
  );
}

export default App
