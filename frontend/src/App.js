import React from 'react'
import ExpenseTracker from './components/ExpenseTracker'
// import Login from './components/Login'
// import Register from './components/Register'
import Header from './components/Header'

const App = () => {
  return (
    <div className=''>
      {/* <Login/>
      <Register/> */}
      <Header/>
    <ExpenseTracker/>
    </div>
  )
}

export default App
