/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import loginIcon from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login">
      <div className="container p-4 mx-auto">
        <div className="w-full max-w-sm p-2 py-5 mx-auto bg-white rounded-sm">
          {/* login icon */}
          <div className="w-20 h-20 mx-auto">
            <img className="rounded-full" src={loginIcon} alt="login icon.." />
          </div>

          {/* form section */}
          <form 
          onSubmit={handleSubmit}
          className="pt-5">
            {/* email */}
            <div className="grid">
              <label>Email:</label>
              <div className="p-2 bg-slate-100">
                <input
                  className="w-full h-full bg-transparent outline-none"
                  onChange={handleOnChange}
                  value={data.email}
                  type="email"
                  name="email"
                  placeholder="enter your email"
                />
              </div>
            </div>
            {/* password */}
            <div>
              <label>Password:</label>
              <div className="relative p-2 bg-slate-100">
                <input
                  className="w-full h-full bg-transparent outline-none"
                  onChange={handleOnChange}
                  value={data.password}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="enter your password"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer right-3 top-3"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            <Link to="/forgotten-password">
              <p className="block ml-auto w-fit hover:underline hover:text-red-600">
                Forgotten password?
              </p>
            </Link>

            <button className="w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto px-6 py-2 text-white bg-red-600 block mt-6">
              Login
            </button>
          </form>
          <p className="block w-full mx-auto my-5">
            Don't have an account? Please{" "}
            <Link
              className="font-semibold text-orange-600 hover:underline"
              to={"/register"}
            >
              register
            </Link>{" "}
            now
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
