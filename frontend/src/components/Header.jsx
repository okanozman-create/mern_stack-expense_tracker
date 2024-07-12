import React from 'react'
import Register from './Register'
import Login from './Login'

const Header = () => {
  return (
    <div className='flex items-center justify-between h-20'>
      <div><h1 className='text-3xl tracking-wider ml-4'>Expense Tracker</h1></div>

<div className='flex'>

<Register />
<Login/>


</div>


    </div>
  )
}

export default Header
