import BlogCard from "./BlogCard";

const Blogs = () => {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  return (
    <div className="h-full flex flex-wrap gap-5 justify-center items-center">
      {data.map((item, i) => (
        <BlogCard key={i} content={item} />
      ))}
    </div>
  );
};

export default Blogs;
