import {useState,useEffect} from 'react'
import { CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeCard = ({loading,results,count}) => {

  const [imgLoading, setImgLoading] = useState(true);
  const loadingGif = 'https://media.tenor.com/_dGu36t3VNEAAAAC/loading-buffering.gif';

  useEffect(() => {
    setImgLoading(true); // Reset isLoading state when results or loading prop changes
  }, [results, loading]);

  return (
    <div>
      {loading && <img src='https://media.tenor.com/YPOStjIfQ2IAAAAC/loading-waiting.gif' className='empty'></img>}
      {!loading && count === 0 && <div className='empty'>No Recipes Found</div>}
      {!loading && count > 0 && (
        <div
          className='recipe__card'
        >
          {results.map((result) => (
             <Link to={`/recipepage/${encodeURIComponent(result.recipe.uri)}`}
                    style={{
                             textDecoration:'none',
                          }}
                    className="no-visited-link"
                    key={result.recipe.uri}
              >
            <CardContent 
                    sx={{
                           width:'300px',
                           border:'1px solid rgba(181, 183, 186,0.5)',
                           backgroundColor:'#e8eaed',
                           borderRadius:'5px',
                           transition:'all 0.2s ease-in-out',
                           cursor:'pointer'
                        }}
                      className='recipe__card__content'
            >

              <CardMedia component="img" src={imgLoading ? loadingGif : result.recipe.image} onLoad={() => setImgLoading(false)} />
              <Typography 
                  variant="body1" 
                  component="div"
                  className='recipe__title'
                  sx={{
                    textAlign:'center',
                    marginTop:'5px',
                    fontFamily: 'Poppins'
                  }}
              >
                {result.recipe.label}
              </Typography>

              <div
                 style={{
                  border:"1px solid rgba(181, 183, 186,0.5)",
                  marginTop:'10px'
                 }}
              ></div>
              
              <div
                 style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:"space-around",
                 }}
              >
               <Typography 
                  variant="body1" 
                  component="div"
                  sx={{
                    textAlign:'center',
                    marginTop:'5px',
                    fontSize:'12px',
                    fontFamily: 'Poppins',
                    color:'black'
                  }}
              >
                {result.recipe.calories.toFixed(0)} calories
              </Typography>

              <div
                 style={{
                  border:"1px solid rgba(181, 183, 186,0.5)",
                  height:'10px'
                 }}
              ></div>
              
              <Typography 
                  variant="body1" 
                  component="div"
                  sx={{
                    textAlign:'center',
                    marginTop:'5px',
                    fontSize:'12px',
                    fontFamily: 'Poppins',
                    color:'black'
                  }}
              >
                {result.recipe.ingredients.length} ingredients
              </Typography>


              </div>

              <div
                 style={{
                  border:"1px solid rgba(181, 183, 186,0.5)",
                  marginTop:'5px'
                 }}
              ></div>

              <Typography 
                  variant="body1" 
                  component="div"
                  sx={{
                    textAlign:'center',
                    marginTop:'5px',
                    fontSize:'16px',
                    fontFamily: 'Poppins'
                  }}
              >
                {result.recipe.cuisineType}
              </Typography>

            </CardContent>
            </Link>
            
          ))}
        </div>
      )}
    </div>
  ) 
}

export default RecipeCard
