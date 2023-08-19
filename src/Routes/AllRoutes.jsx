import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../Components/Navbar'
import Project1 from '../Pages/Project1'
import Project2 from '../Pages/Project2'
import Project3 from '../Pages/Project3'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>} >
          <Route path='*' element={<Project1/>} />
          <Route path='/project2' element={<Project2/>} />
          <Route path='/project3' element={<Project3/>} />
        </Route>
    </Routes>
  )
}

export default AllRoutes