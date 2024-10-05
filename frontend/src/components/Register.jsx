import { useState } from "react";
import registerIcon from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUploadPic = e =>{
    const file = e.target.files[0]
    console.log("file",file);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="register">
      <div className="container p-4 mx-auto">
        <div className="w-full max-w-sm p-2 py-5 mx-auto bg-white rounded-sm">
          {/* register icon */}
          <div className="relative w-20 h-20 mx-auto overflow-hidden rounded-full">
            <div>
              <img className="" src={registerIcon} alt="login icon.." />
            </div>
            <form>
              <label>
                <div className="absolute bottom-0 w-full pt-2 pb-4 font-sans text-xs font-medium text-center cursor-pointer bg-opacity-80 bg-slate-200">
                  Upload Photo
                </div>
                <input 
                onChange={handleUploadPic}
                className="hidden"
                type="file" 
                name="photo"
                 />
              </label>
            </form>
          </div>

          {/* form section */}
          <form onSubmit={handleSubmit} className="pt-5 space-y-2">
            {/* name */}
            <div className="grid">
              <label>Name:</label>
              <div className="p-2 bg-slate-100">
                <input
                  className="w-full h-full bg-transparent outline-none"
                  onChange={handleOnChange}
                  value={data.name}
                  type="text"
                  name="name"
                  placeholder="enter your name"
                />
              </div>
            </div>
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
            {/*confirm password */}
            <div>
              <label>Confirm Password:</label>
              <div className="relative p-2 bg-slate-100">
                <input
                  className="w-full h-full bg-transparent outline-none"
                  onChange={handleOnChange}
                  value={data.password}
                  type={showConfirmPassword ? "text" : "password"}
                  name="password"
                  placeholder="enter confirm password"
                />
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute cursor-pointer right-3 top-3"
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>

            <button className="w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto px-6 py-2 text-white bg-red-600 block mt-6">
              Register
            </button>
          </form>
          <p className="block w-full mx-auto my-5">
            Have an account? Please{" "}
            <Link
              className="font-semibold text-orange-600 hover:underline"
              to={"/login"}
            >
              login
            </Link>{" "}
            now
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
