import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to={'/circle'}>
        <button>To circles</button>
      </Link>
      <Outlet />
    </>
  )
}

export default App
