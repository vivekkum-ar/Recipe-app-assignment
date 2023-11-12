import React from 'react'

interface HomeProps {
  // Add your prop types here
}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
    <div>Home</div>
    <h1 className="font-bold">
      Hi tailwind
    </h1>
    </>
  )
}

export default Home