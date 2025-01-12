import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { IoCart } from "react-icons/io5";
import UseCart from "../../../hooks/UseCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li className="text-white ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white">
        <Link to="/menu">Menu</Link>
      </li>
      <li className="text-white">
        <Link to="/order">Order Food</Link>
      </li>

      <li className="text-white">
        <Link to="/signUp">Sign Up</Link>
      </li>
      <li className="text-white">
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to='/'><button className="btn btn-ghost">
        <IoCart />
          <div className="badge badge-secondary">+{cart.length}</div>
        </button></Link>
      </li>

      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/logIn">LogIn</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="max-w-screen-xl navbar bg-black text-white fixed z-10 bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
