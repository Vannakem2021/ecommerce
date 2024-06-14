import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
const BestSellerCard = ({ product }) => {
  const { addOneToCart, addToWishlist, isWishlist } = useCart();
  const inWishlist = isWishlist(product.id);
  return (
    <section>
      <div className="relative rounded-2xl border-[1px] border-slate-600/10 p-5 transition-all hover:-translate-y-2">
        <button
          onClick={() => addToWishlist(product.id)}
          className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100"
        >
          {inWishlist ? <FaHeart /> : <FaRegHeart />}
        </button>
        <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-11/12 overflow-hidden md:mb-2">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-gray-800">
            {product.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {product.description.substring(0, 40)}...
          </p>
          <div className="flex items-center justify-between">
            <h4 className="mt-4 text-lg font-bold text-gray-800">
              ${product.price}
            </h4>

            <button
              onClick={() => addOneToCart(product.id)}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[1px] border-slate-600/10 text-2xl"
            >
              <IoMdCart />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerCard;
