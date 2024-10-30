const BlogCard = ({ content }: { content: string }) => {
  return (
    <div className="bg-white h-[30%] w-[30%] border cursor-pointer shadow-sm hover:shadow-lg rounded-lg">
      <p className="category"></p>
      <p className="title"></p>
      <p className="publication-date"></p>
    </div>
  );
};

export default BlogCard;
