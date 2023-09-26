import PropTypes from "prop-types";
const Banner = ({handleSearch, setQuery, query}) => {
  return (
    <section
      className="hero  h-[15rem] md:h-[20rem] lg:h-[32rem]"
      style={{
        backgroundImage: "url(./banner-bg.png)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-95"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full">
          <h1 className="mb-5 text-xl md:text-4xl lg:text-5xl font-bold text-gray-900 capitalize selection:bg-green-500">
            Give Hope to people in need
          </h1>
          <div className="flex justify-center items-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search here..."
              className=" py-2 px-3 md:py-3 md:px-5 border border-green-600 w-full rounded-xl rounded-r-none focus:outline-none text-gray-900 font-semibold outline-none"
            />
            <button
              onClick={() => handleSearch(query)}
              className=" py-2 md:py-3 bg-green-600 text-white rounded-xl rounded-l-none capitalize border border-green-600 px-5 md:px-8 hover:bg-green-700 hover:border-green-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  handleSearch: PropTypes.func,
  setQuery: PropTypes.func,
  query: PropTypes.string,
};

export default Banner;
