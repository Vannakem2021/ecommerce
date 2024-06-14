import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Success = () => {
  return (
    <div className="mb-20 h-[50vh] pt-24">
      <div className="bg-white p-6 md:mx-auto">
        <IoIosCheckmarkCircle className="mx-auto h-16 w-16 text-green-600 md:h-24 md:w-24" />
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Payment Done!
          </h3>
          <p className="my-2 text-gray-600">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <Link
              to="/products"
              className="bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-500"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
