import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="h-[7vh] flex justify-between items-center px-10 border rounded-bl-2xl rounded-br-2xl">
      <div className="logo">logo</div>
      <div className="auth flex gap-4">
        <Button className="bg-black border hover:bg-white hover:text-black rounded-xl text-base font-lato">
          LogIn
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
