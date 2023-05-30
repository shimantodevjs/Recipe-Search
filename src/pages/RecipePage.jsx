import { useParams } from 'react-router-dom';
import RecipePageContent from '../components/RecipePageContent';
import RecipePageInfo from '../components/RecipePageInfo';


const RecipePage = ({ results }) => {
  const { recipeUri } = useParams();

  const selectedRecipe = results.find(
    (result) => result.recipe.uri === decodeURIComponent(recipeUri)
  );

  if (!selectedRecipe) {
    return <div className='empty'>Recipe not found</div>;
  }

  return (
    <div>
      <RecipePageContent 
        selectedRecipe={selectedRecipe}
      />
      <RecipePageInfo
        selectedRecipe={selectedRecipe}
      />
    </div>
  );
};

export default RecipePage;

