import {createBrowserRouter, RouterProvider} from 'react-router-dom'  
import Productos from './Productos'
import PantallaPrincipal from './PantallaPrincipal'

const router = createBrowserRouter ([

  {
      path: '/',
      element: <PantallaPrincipal/>
  },

  {
    path: '/Productos',
    element: <Productos/>
  }

])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
