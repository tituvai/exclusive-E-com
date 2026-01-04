
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Product_Details from './components/pages/Product_Details'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/product_Details' element={<Product_Details/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
