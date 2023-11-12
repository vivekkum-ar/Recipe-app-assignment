import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './pages/Home.tsx'
import RecipeDetails from './pages/Recipedetails.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/RecipeDetails" element={<RecipeDetails/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
