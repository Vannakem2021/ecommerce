import { useParams } from "react-router-dom";
import { productsArray } from "../products";
import { useCart } from "../contexts/CartContext";
const Product = () => {
  const { addOneToCart } = useCart();
  const { id } = useParams();
  const productId = parseInt(id);

  const product = productsArray.find((product) => product.id === productId);
  const { image, title, price, description } = product;

  return (
    <section className="mx-auto mt-24 w-full max-w-6xl rounded-lg border-[1px] border-slate-400/20 px-4 py-6 shadow-lg">
      <p className="mb-2 text-center text-3xl font-bold">Product Detail</p>
      <div className="mx-auto mb-4 h-1 w-32 rounded-lg bg-black"></div>

      <div className="h-full">
        <div className="flex-col-reverse items-start justify-between lg:flex lg:flex-row">
          <article className="flex-1 p-2">
            <img className="h-full w-11/12" src={image} alt="" />
          </article>
          <div className="flex-1 space-y-20 p-8">
            <p className="text-4xl font-bold">{title}</p>
            <p className="text-lg font-medium">{description}</p>
            <div className="flex items-center justify-between">
              <p>
                <span className="text-lg font-medium">Price: </span>${price}
              </p>
              <button
                onClick={() => addOneToCart(product.id)}
                className="rounded-md bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
