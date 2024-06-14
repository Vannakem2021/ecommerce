import { Link } from "react-router-dom";
import bannerImage from "../assets/headphone/JBL_Quantum 800_Product Image_ANGLE_White.png";

function HeroBanner() {
  return (
    <div className="relative mt-12 hidden h-[540px] w-full max-w-6xl rounded-lg bg-slate-200 lg:flex">
      <img
        className="absolute -top-4 left-[50%] -translate-x-[50%] transform"
        src={bannerImage}
        alt="bannerImage"
      />
      <div className="flex h-full w-full justify-between px-24 py-16">
        {/* Left  */}
        <div className="flex flex-col items-start justify-between">
          <div className="space-y-4">
            <h5 className="text-xl font-bold">JBL TUNE500BT</h5>
            <h2 className="text-5xl font-bold tracking-wider text-indigo-600">
              SUMMER SALE
            </h2>
            <h1 className="text-4xl font-bold tracking-wider">FINE</h1>
          </div>

          <Link to="/products">
            <button className="rounded-md bg-slate-900 px-5 py-2.5 text-start text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Shop now
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="flex flex-col items-end justify-between">
          <div className="space-x-2">
            <span className="inline-block h-6 w-6 rounded-2xl bg-red-600"></span>
            <span className="inline-block h-6 w-6 rounded-2xl bg-green-600"></span>
            <span className="inline-block h-6 w-6 rounded-2xl bg-blue-600"></span>
          </div>
          <p className="text-sm font-medium tracking-widest">
            All Products You Need!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
