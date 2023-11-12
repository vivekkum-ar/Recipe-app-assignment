import React from 'react'

interface HomeProps {
  // Add your prop types here
}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
    <div className='max-w-screen-xl mx-auto pt-20 text-amber-700 text-md px-4'>Home

    <h1 className="font-bold">
      Hi tailwind
    </h1>
    </div>
    </>
  )
}

export default Home