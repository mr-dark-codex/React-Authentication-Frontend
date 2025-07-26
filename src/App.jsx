import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PrivateRoute from './Routes/PrivateRoute'
import NotFound from './Pages/404'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
