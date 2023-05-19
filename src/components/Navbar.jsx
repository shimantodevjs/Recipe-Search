import React from 'react'
import { Login, Search, DarkMode } from '@mui/icons-material';

const Navbar = ({query,onChangeHandler,handleEnterSearch,handleSearch}) => {
  return (
    <div className='navBar'>
      <div className="navBar__container">
      <h1 className='title'>RECIPES</h1>
      <div className="searchBar">
      <input 
            type="text" 
            value={query} 
            onChange={onChangeHandler} 
            onKeyDown={handleEnterSearch}
      />
      <button onClick={handleSearch}><Search/></button>
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
