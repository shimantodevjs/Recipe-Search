import React from 'react'
import { Typography } from '@mui/material'

const RecipePageInfo = ({selectedRecipe}) => {
  return (
    <div
      className='info__box'
    >
      <div className="ingridients__info info">
        <Typography 
             variant="h6"
             sx={{
                textAlign:'start',
                marginBottom:'10px'
             }}
             >
                {selectedRecipe.recipe.ingredients.length} Ingridients
        </Typography>

         <div>
            {selectedRecipe.recipe.ingredientLines.map((ingridient,index)=>(
                <div key={index}>{ingridient}</div>
            ))}
         </div>

      </div>

      <div className="calories__info info">
        <Typography 
             variant="h6"
             >
                {selectedRecipe.recipe.calories.toFixed(0)} calories
        </Typography>

         <div>
          {selectedRecipe.recipe.digest.map((digestItem, index) => {
           if (index < 8) {
               return <div key={index}
                           style={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-between',
                            width:'200px',
                            marginBottom:'5px'
                           }}
                      >
                               <span>{digestItem.label}: </span>
                               <span>{digestItem.total.toFixed(0)}{digestItem.unit}</span>
                               </div>;
            }
               return null; 
            })}
         </div>
      </div>

      <div className="type__info info">
        <div
           style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              marginBottom:'20px'
           }}
        >
        <Typography 
             variant="h6"
             >
                Cuisine
        </Typography>

         <div
           style={{
            fontSize:'14px'
           }}
         >
            {selectedRecipe.recipe.cuisineType}
         </div>
        </div>

        <div
           style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              marginBottom:'20px'
           }}
        >
        <Typography 
             variant="h6"
             >
                Diet
        </Typography>

         <div
           style={{
            fontSize:'14px'
           }}
         >
            {selectedRecipe.recipe.dietLabels.length===0  ? 'N/A' : selectedRecipe.recipe.dietLabels}
         </div>
        </div>

        <div
           style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              marginBottom:'20px'
           }}
        >
        <Typography 
             variant="h6"
             >
                Dish Type
        </Typography>

         <div
           style={{
            fontSize:'14px'
           }}
         >
            {selectedRecipe.recipe.dishType.length===0  ? 'N/A' : selectedRecipe.recipe.dishType}
         </div>
        </div>

        <div
           style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
           }}
        >
        <Typography 
             variant="h6"
             >
                Meal Type
        </Typography>

         <div
           style={{
            fontSize:'14px'
           }}
         >
            {selectedRecipe.recipe.mealType.length===0  ? 'N/A' : selectedRecipe.recipe.mealType}
         </div>
        </div>

      </div>

      <div className="info">
        <Typography 
             variant="h6"
             sx={{
                marginBottom:'20px'
             }}
             >
                Health Labels
        </Typography>

         <div>
          {selectedRecipe.recipe.healthLabels.map((healthLabel, index) => {
           if (index < 7) {
               return <div key={index}
                           style={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            flexDirection:'column',
                            marginBottom:'10px'
                           }}
                      >{healthLabel} </div>;
            }
               return null; 
            })}
         </div>
      </div>

    </div>
  )
}

export default RecipePageInfo
