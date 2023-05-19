import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const RecipePage = ({ results }) => {
  const { recipeUri } = useParams();

  const selectedRecipe = results.find(
    (result) => result.recipe.uri === decodeURIComponent(recipeUri)
  );

  if (!selectedRecipe) {
    return <div className='empty'>Recipe not found</div>;
  }

  return (
    <div
       style={{
        paddingTop:'10px'
       }}
    >
      <div className='recipePage__content'>
        <img
          src={selectedRecipe.recipe.image}
          style={{
            width: '300px',
            height: '300px',
          }}
        />
        <div style={{ width: '300px', marginLeft: '50px' }}>
          <h3 style={{ width: '300px' }}>{selectedRecipe.recipe.label}</h3>
          <Typography
            variant="h6"
            style={{
              color:'#1167b1',
              textDecoration:'none',
            }}
          >
            {selectedRecipe.recipe.source}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

