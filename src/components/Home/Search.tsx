const Search = () => {
  return (
    <div className="bg-[#0069FF] flex flex-col gap-4 text-white px-[60px] py-8 rounded-[28px] shadow-lg">
      <div>
        <p className="text-3xl font-bold mb-2">Technical Blogs</p>
        <p className="text-lg">
          Follow along with our extensive collection of Backend, Linux and many
          more...
        </p>
      </div>
      <input
        type="text"
        className="text-gray-700 rounded-lg px-6 py-3 hover:shadow-lg"
        placeholder="Enter category or blogpost name..."
      />
    </div>
  );
};

export default Search;
