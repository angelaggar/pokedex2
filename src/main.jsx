import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import PokeCard from './components/PokeCard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/pokemon',
        element: <Pokemon />
      }
    ]
  },
  {
    path: '/pokemon/:name',
    element: <PokeCard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
