import React, { useEffect, useState } from 'react'
import { RecipieData } from '../components/Data';
import { Icon } from '@iconify/react/dist/iconify.js';
interface RecipeDetailsProps {
  // Add your prop types here
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ }) => {
  const [Details, setDetails] = useState<any>({});
  useEffect(() => {
  setDetails(RecipieData);
    
}, []);
  
  return (
    <div className='max-w-screen-xl mx-auto pt-20 text-amber-700 text-md px-4'>
      <h1 className="italic text-3xl font-bold w-full  justify-center flex">
        {Details.title}
      </h1>
{/* {Details.extendedIngredients[1].original} */}
      <div className='flex flex-col md:flex-row  gap-10 max-w-screen-xl mx-auto text-amber-700 text-md px-4 mt-5'>
        <div className=" h-max w-1/2 sticky top-20">
        <div className="border-2 border-amber-200 shadow-2xl" style={{ background: `url(${Details.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius: "3rem",height:"80vh" }}>
        </div>
          </div>
          <div className="w-1/2 static">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="flex flex-row w-full justify-center">
                  <div className="flex flex-row  w-1/2"><Icon className='text-3xl' icon="solar:chat-square-like-bold" />Likes: {Details.aggregateLikes}</div>
                  <div className="flex flex-row  w-1/2"><Icon className='text-3xl' icon="ph:link-bold" />Source: <a href={Details.sourceUrl} className='ms-1 underline'> {Details.sourceName}</a></div>
                </div>
                <div className="flex flex-row w-full justify-center">
                  <div className="flex flex-row  w-1/2"><Icon className='text-3xl' icon="mdi:person" />Servings: {Details.servings}</div>
                  <div className="flex flex-row  w-1/2"><Icon className='text-3xl' icon="ion:time" />Time: {Details.readyInMinutes} mins</div>
                </div>
                <div className="flex flex-row w-full justify-center">
                  <div className="flex flex-row  w-1/2"><Icon className='text-3xl' icon="game-icons:bowl-of-rice" />Per Serve: {Details.pricePerServing}</div>
                  <div className="flex flex-row  w-1/2"><Icon className='text-3xl' icon="mage:health-square-fill" /> Health Score:  {Details.healthScore}</div>
                </div>
              </div>

              <div className="border-b-2 border-amber-700 pb-5">
            <h3 className="text-2xl font-semibold text-center mt-2 ">Ingredients</h3>
            <ul>
            {Details.extendedIngredients.map((ingredient: any) => {
              return (
                <li className="list-disc text-lg" key={ingredient.id}>{ingredient.original}</li>
              )
            })}
              {/* {Details.extendedIngredients.map((ingredient: any) => {
                return (
                  <li className="text-lg" key={ingredient.id}>{ingredient.original}</li>
                )
              })} */}
            </ul>
            </div>
            <div className="border-b-2 border-amber-700 pb-5 ">
            <h3 className="text-2xl font-semibold text-center mt-2 ">Summary</h3>
            <p className='first-letter:text-4xl' dangerouslySetInnerHTML={{ __html: Details.summary }} />
          </div>
            <div className="border-b-2 border-amber-700 pb-5 ">
            <h3 className="text-2xl font-semibold text-center mt-2 ">Wine Pairing</h3>
            <p className='first-letter:text-4xl' dangerouslySetInnerHTML={{ __html: Details.winePairing.pairingText }} />
          </div>
          </div>
              </div>
      </div>
    </div>
  )
}

export default RecipeDetails