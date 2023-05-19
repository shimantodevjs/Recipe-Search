import React from 'react'
import { Login, Search, DarkMode } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = ({query,onChangeHandler,handleEnterSearch,handleSearch}) => {
  return (
    <div className='navBar'>
      <div className="navBar__container">
      <Link to='/'
           style={{
            textDecoration:'none'
           }}
      >
      <h1 className='title'>RECIPES</h1>
      </Link>
      <div className="searchBar">
      <input 
            type="text" 
            value={query} 
            onChange={onChangeHandler} 
            onKeyDown={handleEnterSearch}
            placeholder='Hungry? Search here....'
      />
       <Link to='/'
           style={{
            textDecoration:'none'
           }}
      >
      <button onClick={handleSearch}><Search/></button>
      </Link>
      </div>
      <div className='loginBtn'>
      <button><Login /></button>
      <button><DarkMode/></button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
