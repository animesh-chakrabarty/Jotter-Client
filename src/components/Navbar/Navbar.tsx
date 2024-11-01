import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import LoginButton from "./LoginButton";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const { jwt } = useSelector((state) => state.token);
  console.log(jwt);

  return (
    <div className="h-[7vh] flex justify-between items-center px-10 border rounded-bl-2xl rounded-br-2xl">
      <div className="logo">
        {/* <img src="../assets/logo.png" alt="Jotter Logo" /> */}
        <img src={logo} alt="" className="h-10" />
      </div>
      {!jwt ? (
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
