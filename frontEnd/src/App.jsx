import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Footer from "./Components/Footer"
import About from "./Components/About"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Blackpink from "./Components/Blackpink"
import BPMembers from "./Components/BPMembers"
import Section1 from "./Components/Section1"
import Register from "./Components/Register"
import { useState } from "react"
import Contact from "./Components/Contact"


function App() {

  const [user, setLoginRegister] = useState({});

  const router = createBrowserRouter([
    {
      path : "/",
      element : <>{user && user._id ? <><Navbar user={user.name} setLoginRegister={setLoginRegister}/><Home /><Blackpink /><Section1 /><Footer /></> : <Register setLoginRegister={setLoginRegister} />}</>
    },
    {
      path : "/about",
      element : <><Navbar user={user.name}/><About /><Footer /></>
    },
    {
      path: "/BP-Members",
      element: <><BPMembers /></>
    },
    {
      path: "/login",
      element: <><Navbar user={user.name}/><Login setLoginRegister={setLoginRegister}/><Footer /></>
    },
    {
      path:"/register",
      element: <><Register setLoginRegister={setLoginRegister}/></>
    },
    {
      path:"/contact",
      element: <><Navbar user={user.name}/><Contact/><Footer/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
