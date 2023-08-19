import React from 'react'
import image from '../assets/react.svg'
const Project1 = () => {
  return (
    <div className=' w-80 m-auto my-11 h-24 space-x-4 rounded-lg p-2 flex items-center bg-slate-300 shadow-lg ' >
        <div><img src={image} alt="React" className='h-16 w-16  ' /></div>
        <div >
            <div className='
            text-2xl font-medium text-gray-700' >Krishna Chaturvedi</div>
            <p className='text-gray-600' >Iam a full-stack developer</p>
        </div>
    </div>
  )
}

export default Project1