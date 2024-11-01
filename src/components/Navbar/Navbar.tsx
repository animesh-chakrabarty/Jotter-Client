import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import LoginButton from "./LoginButton";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const { jwt: token } = useSelector((state) => state.token);

  return (
    <div className="h-[7vh] flex justify-between items-center px-10 border rounded-bl-2xl rounded-br-2xl">
      <div className="logo">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      {!token ? (
        <div className="login flex gap-4">
          <LoginButton />
        </div>
      ) : (
        <MdAccountCircle size={40} />
      )}
    </div>
  );
};

export default Navbar;
