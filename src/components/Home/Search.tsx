const Search = () => {
  return (
    <div className="bg-gradient-to-l from-gray-200 to-gray-950 flex flex-col gap-4 text-white px-[60px] py-8 rounded-[28px] shadow-lg">
      <div>
        <p className="text-3xl font-bold mb-2 font-grotesk">Technical Blogs</p>
        <p className="text-lg font-lato">
          Follow along with our extensive collection of Backend, Linux and many
          more...
        </p>
      </div>
      <input
        type="text"
        className="text-gray-700 rounded-lg px-6 py-3 hover:shadow-lg"
        placeholder="Search article..."
      />
    </div>
  );
};

export default Search;
