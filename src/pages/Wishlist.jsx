import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useMain } from "../contexts/MainContext";
import { useSearch } from "../contexts/SearchContext";
import SearchResults from "../components/SearchResult";

const Wishlist = () => {
  const { removeFromWishlist, wishlists } = useMain();
  const { isSearching } = useSearch();
  return (
    <section className="mx-auto min-h-[50vh] max-w-6xl pt-24">
      {isSearching ? (
        <SearchResults />
      ) : (
        <>
          <div className="text-center">
            <h2 className="text-2xl font-medium md:text-3xl">
              Your Favourite Products
            </h2>
            <div className="mx-auto mt-2 h-1 w-48 bg-black"></div>
          </div>
          {wishlists.length === 0 ? (
            <div className="flex h-[50vh] items-center justify-center text-xl font-semibold">
              Your wishlist is empty!
            </div>
          ) : (
            <div className="relative grid grid-cols-1 gap-6 px-4 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
              {wishlists.map((product) => (
                <div
                  key={product.id}
                  className="relative rounded-2xl border-[1px] border-slate-600/10 p-5 transition-all hover:-translate-y-2"
                >
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100"
                  >
                    <FaHeart />
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-w-16 aspect-h-8 mx-auto mb-4 h-[210px] w-11/12 overflow-hidden md:mb-2">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </Link>
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="flex items-center justify-between">
                      <h4 className="mt-4 text-lg font-bold text-gray-800">
                        ${product.price}
                      </h4>

                      <button
                        onClick={() => addOneToCart(product.id)}
                        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[1px] border-slate-600/10 text-2xl transition-all duration-100 hover:border-slate-600/40"
                      >
                        <IoMdCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Wishlist;
