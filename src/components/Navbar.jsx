import { Login, Search } from '@mui/icons-material';
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

      <Link to='/recipepage'>
      <input 
            type="text" 
            value={query}
            onChange={onChangeHandler} 
            onKeyDown={handleEnterSearch}
            placeholder='Hungry? Search here....'
            style={{
              padding:'10px'
            }}
      />
      </Link>
      
       <Link to='/recipepage'
           style={{
            textDecoration:'none'
           }}
      >
      <button onClick={handleSearch}><Search/></button>
      </Link>
      </div>
      <div className='loginBtn'>
      <Link to='/login'>
      <button><Login /></button>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
