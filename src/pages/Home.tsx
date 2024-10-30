import Navbar from "@/components/Navbar";
import "./Pages.css";
import Categories from "@/components/Home/Categories";
import Search from "@/components/Home/Search";
import Blogs from "@/components/Home/Blogs";
import JoinUs from "@/components/Home/JoinUs";

const Home = () => {
  return (
    <div className="container px-28">
      <Navbar />
      <div className="flex mt-4 px-10 h-[90vh] gap-4">
        <div className="left-section flex-[30%] flex flex-col ">
          <Categories />
          <JoinUs />
        </div>
        <div className="right-section flex-[70%] flex flex-col gap-4">
          <Search />
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Home;
