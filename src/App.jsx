
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import AboutPage from './Pages/AboutPage/AboutPage'
import PackagesPage from './Pages/PackagesPage/PackagesPage'
import ServicePage from './Pages/ServicePage/ServicePage'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<HomePage></HomePage>

    },

    {
      path:"/about",
      element:<AboutPage/>

    }, {
      path:"/packages",
      element:<PackagesPage/>

    }
    ,
    {
      path:"/services",
      element:<ServicePage/>

    }





], { basename: import.meta.env.BASE_URL });


function App() {

  return (
    <>
    <RouterProvider router={router}>

      <NavBar menu={[{ title: "home", path: "/" }, { title: "about", path: "/about" }, { title: "Packages", path: "/packages" }, { title: "services", path: "/services" }]} />
      <Routes>
        <Route path='/' element={< HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/packages' element={<PackagesPage />}></Route>
        <Route path='/services' element={<ServicePage />}></Route>
      </Routes>
      <Footer />
      </RouterProvider>

    </>
  )
}

export default App
