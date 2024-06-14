import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
const Cancel = () => {
  return (
    <div className="mb-20 h-[50vh] pt-24">
      <div className="mx-auto bg-white p-6">
        <MdCancel className="mx-auto h-16 w-16 text-red-600 md:h-24 md:w-24" />

        <div className="text-center">
          <h3 className="text-center text-lg font-semibold text-gray-900 md:text-3xl">
            Oops, Something Went Wrong!
          </h3>
          <p className="my-4 text-base font-medium text-gray-600">
            Well, that didn’t go as planned. Our payment system got stage
            fright. Try again next year, maybe? 🙁
          </p>

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

export default Cancel;
