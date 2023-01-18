import Add from './components/Add'
import Counter from './components/Counter'
import FetchData from './components/FetchData'
import Theme from './components/Theme'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
 
  return (
<>
    <header>
      <ul>
        <li><Link className='link' to={"/"}>Example 1</Link></li>
        <li><Link className='link' to={"/theme"}>Example 2</Link></li>
        <li><Link className='link' to={"/fetchdata"}>Example 3</Link></li>
        <li><Link className='link' to={"/add"}>Example 4</Link></li>
      </ul>
    </header>
    
      <Routes>
          <Route path='/' element={<Counter />}></Route>
          <Route path='/theme' element={<Theme />}></Route>
          <Route path='/fetchdata' element={<FetchData />}></Route>
          <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App
