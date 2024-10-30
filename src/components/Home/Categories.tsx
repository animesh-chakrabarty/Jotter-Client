import { categories } from "@/constants/categories";
import { Button } from "../ui/button";

const Categories = () => {
  return (
    <div className="flex-[60%] flex flex-col gap-4 py-5">
      <p className="pl-2 text-3xl font-grotesk font-bold">Categories</p>
      <div className="w-full flex flex-col items-start justify-center">
        {categories &&
          categories.map((item, i) => (
            <div key={i} className="w-full">
              <Button
                variant={"secondary"}
                className="bg-[#f9fafe] w-full justify-start text-lg px-2 text-gray-700 hover:bg-gray-200 font-lato"
              >
                {item}
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
