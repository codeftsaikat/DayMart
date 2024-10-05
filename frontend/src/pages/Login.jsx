import loginIcon from "../assets/signin.gif";
const Login = () => {
  return (
    <section id="login">
      <div className="container p-4 mx-auto">
        <div className="w-full max-w-md p-2 py-5 mx-auto bg-white">
          {/* login icon */}
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icon.." />
          </div>

          {/* form section */}
          <form>
            {/* email */}
            <div>
              <label>Email:</label>
              <input type="email" name="email" placeholder="enter your email" />
            </div>
            {/* password */}
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
