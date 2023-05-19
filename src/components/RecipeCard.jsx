import React from 'react'
import { CardContent, Typography, CardMedia } from '@mui/material';

const RecipeCard = ({loading,results,count}) => {
  return (
    <div>
      {loading && <img src='https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif' className='empty'></img>}
      {results.length > 0 && (
        <div
          className='recipe__card'
        >
          {results.map((result) => (
            <CardContent 
                   key={result.recipe.uri}
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

              <CardMedia component='img' src={result.recipe.image} />

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
                  className='recipe__title'
                  sx={{
                    textAlign:'center',
                    marginTop:'5px',
                    fontSize:'12px',
                    fontFamily: 'Poppins'
                  }}
              >
                {result.recipe.calories.toFixed(2)} calories
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
                  className='recipe__title'
                  sx={{
                    textAlign:'center',
                    marginTop:'5px',
                    fontSize:'12px',
                    fontFamily: 'Poppins'
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
                  className='recipe__title'
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
          ))}
        </div>
      )}
      {count === 0 && (
        <div className='empty'>No Recipes Found</div>
      )}
    </div>
  )
}

export default RecipeCard
