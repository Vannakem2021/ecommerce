import { bestProducts } from "../products";
import HeroBanner from "../components/HeroBanner";
import BestSellerCard from "../components/BestSellerCard";
import { useSearch } from "../contexts/SearchContext";
import SearchResults from "../components/SearchResult";

const Home = () => {
  const { isSearching } = useSearch();
  return (
    <section className="relative mx-auto ml-auto max-w-6xl px-4 pt-24">
      {isSearching ? (
        <SearchResults />
      ) : (
        <>
          {/* Hero Banner Section */}

          <HeroBanner />

          {/* Best Seller Products */}
          <div>
            <h1 className="mt-8 text-center text-4xl font-semibold">
              Best Seller Products
            </h1>
            <div className="mx-auto mt-2 h-1 w-40 rounded-lg bg-black"></div>

            <div className="relative grid grid-cols-1 gap-6 px-4 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
              {bestProducts.map((product) => (
                <BestSellerCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
