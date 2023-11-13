import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { atom, useRecoilState } from 'recoil';
import { useState } from 'react';
import { searchTermState } from '../Recoil/store';
interface NavbarProps {
    // Add your prop types here
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
    const [searchTerm, setsearchTerm] = useRecoilState(searchTermState);
    const [searchTxt, setsearchTxt] = useState("");
    const navigate = useNavigate();
    return (
        <div className='w-full flex justify-center'>
        <div className='h-16 border-b-2 border-b-grey flex justify-items-center fixed  shadow-2xl z-20 bg-yellow-100 align-items-center w-full max-w-screen-xl mx-auto'>
            <div className='flex flex-row justify-between w-full mx-4 items-center text-amber-700'>
                <div className="flex align-items-center">
                    <Icon icon="simple-icons:codechef" fontSize={50} />
                    <div className="flex flex-col items-start flex-nowrap justify-center">
                        <h1 className='font-bold text-2xl text-center align-middle'>RecipeRadar</h1>
                        <h1 className='font-bold text-sm mt-0 text-center align-middle italic'>Your Recipe Expert</h1>
                    </div>
                </div>
                <div className="">
                    <label className="mx-auto bg-inherit min-w-sm max-w-2xl flex flex-col md:flex-row items-center border-amber-700 border-2 justify-center py-1 px-1 rounded-2xl shadow-2xl focus-within:border-gray-300" htmlFor="search-bar">
                        <input onChange={(e) => { setsearchTxt(e.target.value); }} id="search-bar" placeholder="your keyword here" className="px-1 py-1 w-full rounded-md flex-1 outline-none bg-inherit" />
                        <button onClick={(e) => {e.preventDefault(); setsearchTerm(searchTxt);}}  className="w-full md:w-auto px-1 py-1 bg-amber-700 border-amber-900 text-white fill-amber-200 active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                            <div className="relative">
                                {/* Loading animation change opacity to display */}
                                <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    {/* <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg> */}
                                </div>
                                <div className="flex items-center transition-all opacity-1 valid:"><span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                    <Icon icon="ic:baseline-search" fontSize={20} />
                                </span>
                                </div>
                            </div>
                        </button>
                    </label>
                </div>
                <div className='flex gap-4 font-semibold'>

                    <div className="cursor-pointer" onClick={() => navigate("/home")}>Home</div>
                    <div className="cursor-pointer" onClick={() => navigate("/recipedetails")}>Recipe Details</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar