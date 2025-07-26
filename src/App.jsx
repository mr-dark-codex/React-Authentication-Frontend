import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PrivateRoute from './Routes/PrivateRoute'
import NotFound from './Pages/404'
import About from './Pages/About'


function App() {
  return (
    <>
      <Routes>
        
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> 
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />


        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
