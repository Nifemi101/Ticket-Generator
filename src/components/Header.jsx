import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="bg-black border-gray-200">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex shrink-0 items-center">
              <NavLink to="/" className="flex items-center">
                <img className="h-15 w-auto" src={logo} alt="Coding Conf" />
                <span className="hidden md:block text-white text-2xl font-bold ml-1">
                  Generative Con
                </span>
              </NavLink>
            </div>

            <div className="flex items-center space-x-8">
              <NavLink to="/" className="text-white hover:text-gray-300">
                Home
              </NavLink>
              <NavLink to="/about" className="text-white hover:text-gray-300">
                About
              </NavLink>
              <NavLink
                to="/register"
                className="text-white hover:text-gray-300"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

/* Add all the Link tags back */
