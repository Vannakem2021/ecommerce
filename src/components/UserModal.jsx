import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

const UserModal = ({ toggleUser, setToggleUser }) => {
  const { user, handleLogout } = useAuth();
  const modalRef = useRef(null);
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setToggleUser(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const { totalWishlistProducts } = useCart();
  return (
    <div
      className={`absolute top-[3.4rem] max-w-xl transform rounded border-[1px] border-slate-400/20 bg-white shadow transition-all duration-200 md:top-[3.5rem] lg:top-[4.5rem] ${
        toggleUser ? "right-4 opacity-100" : "-right-full opacity-0"
      }`}
    >
      <div ref={modalRef} className="h-full w-full space-y-2 p-6">
        <h1 className="text-center text-lg font-medium">
          Welcome to Zen Store
        </h1>
        <ul className="space-y-3">
          <li className="border-b-[1px] border-slate-400/20 pb-[2px]">
            <Link to="/profile">My account</Link>
          </li>
          <li className="border-b-[1px] border-slate-400/20 pb-[2px]">
            <Link to="/favourites">Favourites</Link>
            <span>({totalWishlistProducts})</span>
          </li>
        </ul>
        {user ? (
          <div className="pt-3">
            <button
              className="flex h-8 w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center pt-3">
            <button
              type="button"
              className="mb-2 me-2 flex h-8 items-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              <Link to="/signup">Register</Link>
            </button>
            <button
              type="button"
              className="mb-2 me-2 flex h-8 items-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              <Link to="/signin">Sign in</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserModal;
