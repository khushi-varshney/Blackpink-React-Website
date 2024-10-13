import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = ({setLoginRegister}) => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })

  const handleChange=(e)=>{
    const { name, value } = e.target
    setUser({
      ...user, [name]: value
    })
  }
  axios.defaults.withCredentials=true;


  const register = () =>{
    const { name, email, password, reEnterPassword } = user
    if( name && email && password && (password == reEnterPassword)){
      // axios.post("http://localhost:9002/register", user)
      axios.post("https://blackpink-blink-beryl.vercel.app/register", {
        user
    }, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: false,
        crossdomain: true
    })
      .then(res =>{
        // toast(res.data.message, {
        // position: "top-right",
        // autoClose: 2000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: false,
        // draggable: true,
        // progress: undefined,
        // theme: "dark",
        // });
        setLoginRegister(res.data.user);
        navigate("/login");
    })
    }else {
      toast("Invalid Inputs", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className="py-32 bg-pink-100 w-[100%] h-[100%]">
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
      {console.log("User :", user)}
      <div className="flex justify-center text-center">
        <div className="border-[2px] border-black rounded-lg mx-20 my-4 py-7 px-10">
          <form>
            <div className="">
              <label className="form-label font-semibold mx-1 text-xl ">
              Your FullName :{" "}
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control border-[2px] px-1 py-[2px] mb-5 text-[1.1rem] font-medium rounded-md border-pink-400 text-black"
                id="name"
                value={user.name}
                name="name"
                placeholder="Khushi Varshney"
              />
              <br />
              <label className="form-label font-semibold mx-1 text-xl ">
                Email Address :{" "}
              </label>
              <input
                type="email"
                onChange={handleChange}
                className="form-control border-[2px] px-1 py-[2px] text-[1.1rem] font-medium rounded-md border-pink-400 text-black"
                id="email"
                value={user.email}
                name="email"
                aria-describedby="emailHelp"
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
                  onChange={handleChange}
                  value={user.password}
                  className="form-control border-[2px] px-1 py-[2px] text-[1.1rem] font-medium rounded-md border-pink-400 text-black"
                  name="password"
                  id="password"
                />
                
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label font-semibold mx-1 text-xl">
                  Re-Enter Password :{" "}
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  value={user.reEnterPassword}
                  className="form-control border-[2px] px-1 py-[2px] text-[1.1rem] font-medium rounded-md border-pink-400 text-black"
                  name="reEnterPassword"
                  id="reEnterPassword"
                />
                <p className="mt-4">
                  Create Your Account With Blackpink-Blinks
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div onClick={register}
                  className="btn mt-2 text-lg font-bold border-[2px] text-center border-pink-700 rounded-lg px-5 bg-black text-white py-[2px] hover:text-black hover:bg-white hover:text-xl hover:py-[3px]"
                >
                  <div className="flex gap-2 ">
                    <lord-icon
                      src="https://cdn.lordicon.com/cgzlioyf.json"
                      trigger="hover"
                      colors="primary:#c7166f"
                      style={{ width: "27px", height: "27px" }}
                    ></lord-icon>
                    Register
                  </div>
                </div>
              </div>
              <div className="text-center py-1 ">
                <p>OR</p>
              </div>
              <div className="text-center flex flex-col justify-center items-center">
                <div
                  className="btn mt-2 text-lg font-bold border-[2px] text-center border-pink-700 rounded-lg px-5 bg-black text-white py-[2px] hover:text-black hover:bg-white hover:text-xl hover:py-[3px]"
                >
                  <div className="flex gap-2 ">
                    <lord-icon
                      src="https://cdn.lordicon.com/cgzlioyf.json"
                      trigger="hover"
                      colors="primary:#c7166f"
                      style={{ width: "27px", height: "27px" }}
                    ></lord-icon>
                    <NavLink to="/login">Already Registered : Login</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
