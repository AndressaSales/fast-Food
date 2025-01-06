import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Pizza from "./Pages/Pizza"
import Hamburger from "./Pages/Hamburger"
import Cart from "./Pages/Cart"
import Drinks from "./Pages/Drinks"
import Footer from "./Components/Footer"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar/> <Home/> <Footer/> </>
    },
    {
      path: '/pizza',
      element: <> <Navbar/> <Pizza/> <Footer/> </>
    },
    {
      path: '/hamburguer',
      element: <> <Navbar/> <Hamburger/> <Footer/> </>
    },
    {
      path: '/cart',
      element: <> <Navbar/> <Cart/> <Footer/> </>
    },
    {
      path: '/drinks',
      element: <> <Navbar/> <Drinks/> <Footer/> </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
