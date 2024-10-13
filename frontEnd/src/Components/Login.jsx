import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = ({setLoginRegister}) => {

  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    const { name, value } = e.target
    setUser({
      ...user, [name]: value
    })
  }

  // axios.defaults.withCredentials=true;
  const login = ()=>{
    axios.post("https://blackpink-blink-beryl.vercel.app/login", user)
    .then(res => {
      toast(res.data.message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      console.log(res.data.user[0])
      setLoginRegister(res.data.user[0])
      navigate("/")
    })
  }

  return (
    <div className="flex justify-center text-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="border-[2px] border-black rounded-lg mx-20 my-4 py-7 px-10">
        {console.log(user)}
        <form>
          <div className="">
            <label className="form-label font-semibold mx-1 text-xl ">
              Email Address :{" "}
            </label>
            <input
              type="email"
              className="form-control border-[2px] px-1 py-[2px] text-[1.1rem] font-medium rounded-md border-pink-400 text-black"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
            <div id="emailHelp" className="form-text p-1 text-pink-800">
              We'll never share your email with with anyone else.
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label font-semibold mx-1 text-xl">
                Password :{" "}
              </label>
              <input
                type="password"
                value={user.password}
                onChange={handleChange}
                className="form-control border-[2px] px-1 py-[2px] text-[1.1rem] font-medium rounded-md border-pink-400 text-black"
                name="password"
                id="password"
              />
              <p className="mt-4">Log-In into your Account</p>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="btn mt-2 text-lg font-bold border-[2px] border-pink-700 rounded-lg px-5 bg-black text-white py-[2px] hover:text-black hover:bg-white hover:text-xl hover:py-[3px]" onClick={login}
                
              ><div className="flex gap-2 ">
                <lord-icon
                  src="https://cdn.lordicon.com/cgzlioyf.json"
                  trigger="hover"
                  colors="primary:#c7166f"
                  style={{width:'27px',height:'27px'}}
                ></lord-icon>
                LogIn
              </div>
              </div>
            </div>
            <div className="text-center py-1 font-semibold"><p>OR</p></div>
            <div className="flex items-center justify-center">
              <div className="btn mt-2 text-lg font-bold border-[2px] border-pink-700 rounded-lg px-5 bg-black text-white py-[2px] hover:text-black hover:bg-white hover:text-xl hover:py-[3px]"><NavLink to='/register' className="flex gap-1"><lord-icon
                  src="https://cdn.lordicon.com/cgzlioyf.json"
                  trigger="hover"
                  colors="primary:#c7166f"
                  style={{width:'27px',height:'27px'}}
                ></lord-icon>Don't Have an Account : Register</NavLink></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
