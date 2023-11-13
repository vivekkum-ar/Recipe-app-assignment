import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { recipeId, searchTermState } from '../Recoil/store';
import { dataTemp } from '../components/Data';
import { useNavigate } from 'react-router-dom';
interface HomeProps {
  // Add your prop types here
}

const Home: React.FC<HomeProps> = ({}) => {
  const navigate = useNavigate();
  const [Recipes, setRecipes] = useState<any>({});
  const [searchTerm, setsearchTerm] = useRecoilState(searchTermState);
  const [recipeIdVal,setrecipeIdVal] = useRecoilState(recipeId);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getRecipesforSearch = async () => {
      if(count === 0) {
        let data = dataTemp;
        setCount(data.results.length);
        let recipeObj = [];
        for (let i = 0; i < Math.ceil(data.results.length / 5); i++) {
          recipeObj[i] = data.results.slice(i * 5, i * 5 + 5);
      }
      setRecipes(recipeObj);
      return;
      }
        try {
            const response = await fetch(`https://api.spoonular.com/recipes/complexSearch?query=${searchTerm}&number=20&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`, {
                method: 'GET',
            });
            if (!response.ok) {
                console.log('Failed to get recipes from the server.');
                throw new Error('Failed to get recipes from the server.');
            }
            const data = await response.json();
            let recipeObj = [];
            for (let i = 0; i < Math.ceil(data.results.length / 5); i++) {
                recipeObj[i] = data.results.slice(i * 5, i * 5 + 5);
            }
            setRecipes(recipeObj);
        } catch (error: any) {
            console.log('Failed to get recipes from the server.');
        }
    };
    getRecipesforSearch();
}, [searchTerm]);

// useEffect(() => {
//     const getRecipes = async () => {
//         try {
//             const response = await fetch(`https://api.spoocular.com/recipes/omplexSearch?query=pizza&number=20&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`, {
//                 method: 'GET',
//             });
//             if (!response.ok) {
//                 console.log('Failed to get recipes from the server.');
//                 throw new Error('Failed to get recipes from the server.');
//             }
//             const data = await response.json();
//             let recipeObj = [];
//             for (let i = 0; i < Math.ceil(data.results.length / 5); i++) {
//                 recipeObj[i] = data.results.slice(i * 5, i * 5 + 5);
//             }
//             setRecipes(recipeObj);
//         } catch (error: any) {
//             console.log('Failed to get recipes from the server.');
//         }
//     };
//     getRecipes();
// }, []);


 
  return (
    <>
    <div className='max-w-screen-xl mx-auto pt-20 text-amber-700 text-md px-4'>
    <h1 className=" text-5xl font-bold w-full  justify-center flex">
      Recipies
    </h1>
    {searchTerm && <h6 className="text-amber-500 text-lg italic font-semibold w-full justify-center flex">
      You searched for "{searchTerm}". Found {count} results.
    </h6>}
    <div className='max-w-screen-lg mx-auto text-amber-700 text-md px-4 mt-5'>

    {
  Array.isArray(Recipes) ? 
  Recipes.map((recipeList:any, index:number) => {
    return (
      <div key={index} className="flex flex-row gap-8 w-full mx-4 items-center">
        {recipeList.map((recipe:any, recipeIndex:number) => {
          return (
            <div key={recipeIndex} onClick={() => {setrecipeIdVal(recipe.id); navigate("/recipedetails");}} style={{background:`url(${recipe.image})`,backgroundRepeat:"no-repeat"}} className="cursor-pointer w-44 h-60 rounded-lg flex flex-col border-2 mb-6 shadow-md shadow-amber-200 border-amber-200 justify-end">
              <div className="bg-white px-2 font-semibold opacity-1 rounded-lg">{recipe.title}</div>
              {/* <div className="bg-white px-2 text-sm rounded-b-lg">Hi</div> */}
            </div>
          );
        })}
      </div>
    );
  }) :
  <p>Recipes data is not valid</p>
}
    </div>
    </div>
    </>
  )
}

export default Home