import React from 'react'
import { Typography } from '@mui/material';

const RecipePageContent = ({selectedRecipe}) => {
  return (
    <div className='recipePage__content'>
        <img
          src={selectedRecipe.recipe.image}
          style={{
            width: '300px',
            height: '300px',
          }}
        />
        <div>
          <h3>{selectedRecipe.recipe.label}</h3>
          <Typography
            variant="h6"
            style={{
              color:'#1167b1',
            }}
          >
            {selectedRecipe.recipe.dishType}
          </Typography>
        </div>
      </div>
  )
}

export default RecipePageContent
