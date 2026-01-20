
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Product_Details from './components/pages/Product_Details'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import Cart from './components/pages/Cart'
import Chackout from './components/pages/Chackout'
// import QuckView from './components/section/QuckView'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product_Details' element={<Product_Details/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/chackout' element={<Chackout/>}/>
          {/* <Route path='/quick' element={<QuckView/>}/> */}

        </Route>
      </Routes>
    </>
  )
}

export default App
