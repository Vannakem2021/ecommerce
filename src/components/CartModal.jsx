import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useCart } from "../contexts/CartContext";
import { useMain } from "../contexts/MainContext";
const CartModal = ({ toggleCart, setToggleCart }) => {
  const { getProductQty, getTotalCost } = useCart();
  const { removeFromCart } = useMain();
  const { carts, clearCart } = useMain();
  const checkout = () => {
    fetch("http://localhost:5001/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        items: carts,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((err) => console.log(err.error));
    clearCart();
  };

  const handleCloseCart = () => {
    setToggleCart(false);
  };

  return (
    <>
      <aside
        className={`fixed inset-0 z-10 transition-opacity duration-500 ${
          toggleCart ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ${
            toggleCart ? "opacity-75" : "opacity-0"
          }`}
        ></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div
                className={`pointer-events-auto w-screen max-w-md transform transition-transform duration-500 ${
                  toggleCart ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          onClick={handleCloseCart}
                          type="button"
                          className="relative -m-2 p-2 text-2xl text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5"></span>
                          <IoCloseOutline />
                        </button>
                      </div>
                    </div>
                    {carts.length === 0 ? (
                      <h2 className="flex h-[60vh] items-center justify-center text-lg font-medium lg:text-xl">
                        <p>Oops! Your cart is empty😆</p>
                      </h2>
                    ) : (
                      carts.map((product) => (
                        <div key={product.id} className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              <li className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{product.title}</h3>
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.category}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {getProductQty(product.id)}
                                    </p>

                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          removeFromCart(product.id)
                                        }
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${getTotalCost()}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={checkout}
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <button onClick={handleCloseCart}>
                        <span className="cursor-default">or</span>
                        <Link
                          to="/products"
                          type="button"
                          className="ml-2 font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartModal;
