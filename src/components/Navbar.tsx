import logo from "../assets/logo.png";
import Login from "./Login";

const Navbar = () => {
  return (
    <div className="h-[7vh] flex justify-between items-center px-10 border rounded-bl-2xl rounded-br-2xl">
      <div className="logo">
        {/* <img src="../assets/logo.png" alt="Jotter Logo" /> */}
        <img src={logo} alt="" className="h-10" />
      </div>
      <div className="login flex gap-4">
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
