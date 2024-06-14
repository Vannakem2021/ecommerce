import { NavLink, Link } from "react-router-dom";
import CartModal from "./CartModal";
import UserModal from "./UserModal";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useCart } from "../contexts/CartContext";
import { useEffect, useRef, useState } from "react";
import { useSearch } from "../contexts/SearchContext";
const Navbar = () => {
  //toggle cart
  const [toggleCart, setToggleCart] = useState(false);
  //Toggle user  modal
  const [toggleUser, setToggleUser] = useState(false);
  //Toggle mobile menu
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  //Context
  const { getTotalQuantityInCart } = useCart();
  const { searchQuery, handleSearch } = useSearch();
  //Handle open cart modal
  const handleOpenCart = () => {
    setToggleCart(true);
  };

  //Handle toggle user profile detail
  const handleToggleProfile = () => {
    setToggleUser(true);
  };
  //Handle close mobile menu
  const handleOpenMobileMenu = () => {
    setToggleMobileMenu(true);
  };
  const handleCloseMobileMenu = () => {
    setToggleMobileMenu(false);
  };

  const modalRef = useRef(null);
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setToggleMobileMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="lef-0 fixed right-0 top-0 z-10 w-full max-w-full bg-white">
      <CartModal toggleCart={toggleCart} setToggleCart={setToggleCart} />
      <UserModal toggleUser={toggleUser} setToggleUser={setToggleUser} />
      <nav className="relative px-6 py-3 shadow lg:px-24 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Left */}
          <button
            onClick={handleOpenMobileMenu}
            className="flex text-2xl lg:hidden"
          >
            <GiHamburgerMenu />
          </button>
          <div className="hidden items-center space-x-12 lg:flex">
            {/* Logo */}
            <Link className="text-3xl" to="/">
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                ZEN
              </h2>
            </Link>

            {/* Menu list */}
            <ul className="flex items-center space-x-4 text-lg font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "bg-slate-950 text-white" : ""} rounded-sm px-4 py-2`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${isActive ? "bg-slate-950 text-white" : ""} rounded-sm px-4 py-2`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "bg-slate-950 text-white" : ""} rounded-sm px-4 py-2`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Center */}
          <Link to="/">
            <h1 className="flex text-xl font-bold lg:hidden">ZEN</h1>
          </Link>
          <div className="hidden w-1/3 lg:flex">
            <div className="relative flex h-10 w-full items-center overflow-hidden rounded-lg border-[1px] border-slate-500/20 bg-white focus:shadow-md">
              <div className="grid h-full w-12 place-items-center text-gray-300">
                <FaSearch />
              </div>

              <input
                onChange={(e) => handleSearch(e.target.value)}
                value={searchQuery}
                className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center space-x-4">
            {/* User Profile Detail */}
            <button onClick={handleToggleProfile} className="flex items-center">
              <FaRegUser className="text-2xl" />
            </button>
            <button
              onClick={handleOpenCart}
              className="relative flex items-center space-x-2 text-3xl"
            >
              <IoMdCart />
              <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                {getTotalQuantityInCart()}
              </span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
      </nav>
      <div
        className={`${toggleMobileMenu ? "left-0 opacity-100" : "-left-full opacity-0"} absolute inset-x-0 top-[3.33rem] h-screen max-w-lg bg-white p-6 shadow transition-all duration-200 ease-in-out`}
      >
        <div ref={modalRef}>
          <ul className="flex items-start justify-between">
            <div className="w-full space-y-4">
              <li
                onClick={handleCloseMobileMenu}
                className="border-b-[1px] border-slate-400/20 pb-2"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={handleCloseMobileMenu}
                className="border-b-[1px] border-slate-400/20 pb-2"
              >
                <Link to="/products">Products</Link>
              </li>
              <li
                onClick={handleCloseMobileMenu}
                className="border-b-[1px] border-slate-400/20 pb-2"
              >
                <Link to="/contact">Contact</Link>
              </li>
            </div>
            <button onClick={handleCloseMobileMenu} className="text-xl">
              <IoMdClose />
            </button>
          </ul>
          <div className="relative mt-4 flex h-10 w-full items-center overflow-hidden rounded-lg border-[1px] border-slate-500/20 bg-white focus:shadow-md">
            <div className="grid h-full w-12 place-items-center text-gray-300">
              <FaSearch />
            </div>

            <input
              onChange={(e) => handleSearch(e.target.value)}
              value={searchQuery}
              className="peer pr-2 text-sm text-gray-700 outline-none"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
