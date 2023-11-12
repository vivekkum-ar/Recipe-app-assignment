import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
interface NavbarProps {
    // Add your prop types here
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
    const [Recipes, setRecipes] = useState<any>({});

    useEffect(() => {
        const getRecipes = async () => {
            // e.preventDefault();

            try {
                const response = await fetch(`https://api.spoonaclar.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`, {
                    method: 'GET',
                });
                if (!response.ok) {
                    console.log('Failed to get recipes from the server.');
                    throw new Error('Failed to get recipes from the server.');
                }
                const data = await response.json();
                setRecipes(data.results);
                console.log(Recipes); // Output success message

            } catch (error: any) {
                console.log('Failed to get recipes from the server.');

            }
        };
        getRecipes();
    }, []);

    const navigate = useNavigate();
    return (
        <div className='h-16 border-b-2 border-b-black flex justify-items-center fixed w-full shadow-2xl z-20 bg-yellow-100 align-items-center max-w-screen-xl mx-auto'>
            <div className='flex flex-row justify-between w-full mx-4 items-center text-amber-700'>
                <div className="flex align-items-center">
                    <Icon icon="simple-icons:codechef" fontSize={50} />
                    <div className="flex flex-col items-start flex-nowrap justify-center">
                        <h1 className='font-bold text-2xl text-center align-middle'>RecipeRadar</h1>
                        <h1 className='font-bold text-sm mt-0 text-center align-middle italic'>Your Recipe Expert</h1>
                    </div>
                </div>
                <div className='flex gap-4 font-semibold'>

                    <div className="cursor-pointer" onClick={() => navigate("/home")}>Home</div>
                    <div className="cursor-pointer" onClick={() => navigate("/recipedetails")}>Recipe Details</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar