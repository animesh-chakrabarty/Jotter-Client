import { useSelector } from "react-redux";
import SignupButton from "./SignupButton";
import { Button } from "../ui/button";
import { MdLogout } from "react-icons/md";
import LogoutButton from "./LogoutButton";

const JoinUs = () => {
  const { jwt: token } = useSelector((state) => state.token);

  return (
    <div className="w-full">
      {!token ? (
        <div className="w-full flex-[40%] mt-6 mb-16 bg-gradient-to-l from-gray-400 to-gray-950 flex flex-col gap-4 text-white px-[40px] py-8 rounded-[28px] shadow-lg">
          <p className="text-lg font-lato">
            Want to publish your own article ?
          </p>
          <SignupButton />
          <p className="font-lato text-center">
            Effortlessly write and publish blogs <br />
            with Jotter's hassle-free, built-in text editor.
          </p>
        </div>
      ) : (
        <LogoutButton />
      )}
    </div>
  );
};

export default JoinUs;
