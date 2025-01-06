import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Pizza from "./Pages/Pizza"
import Hamburger from "./Pages/Hamburger"
import Cart from "./Pages/Cart"
import Drinks from "./Pages/Drinks"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar/> <Home/> </>
    },
    {
      path: '/pizza',
      element: <> <Navbar/> <Pizza/> </>
    },
    {
      path: '/hamburguer',
      element: <> <Navbar/> <Hamburger/> </>
    },
    {
      path: '/cart',
      element: <> <Navbar/> <Cart/> </>
    },
    {
      path: '/drinks',
      element: <> <Navbar/> <Drinks/> </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
