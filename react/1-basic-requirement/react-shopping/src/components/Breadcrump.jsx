import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrump = ({currentPageTitle}) => {
  return (
    <div className='w-full flex gap-3 mb-5'>
        <Link to={"/"} className='text-gray-400 hover:text-blue-500'>Home</Link>
        <span> / </span>
        <p className='font-bold'>{currentPageTitle}</p>
    </div>
  )
}

export default Breadcrump