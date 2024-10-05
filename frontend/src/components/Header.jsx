import logo from "../assets/logo.png";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-2 mx-auto">
        
        {/* logo */}
        <Link to="/">
          <div className="relative flex items-center">
            <img
              className="h-16 cursor-pointer"
              src={logo}
              alt="logo not found"
            />
            <h2 className="absolute font-serif text-xl font-semibold text-black left-11">
              DayMart
            </h2>
          </div>
        </Link>
        
        {/* search section */}
        <div className="items-center justify-between hidden w-full max-w-sm pl-2 border rounded-full md:flex focus-within:shadow-md">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="search product here..."
          />
          <div className="h-8 text-lg text-white bg-red-600 min-w-[50px] rounded-r-full flex items-center justify-center cursor-pointer">
            <GrSearch />
          </div>
        </div>

        {/* user cart and login section */}
        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>
          <div className="relative text-2xl">
            <FaShoppingCart />
            <div className="absolute flex items-center justify-center w-5 h-5 p-1 text-white bg-red-600 rounded-full -right-3 -top-3">
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            <button className="px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
