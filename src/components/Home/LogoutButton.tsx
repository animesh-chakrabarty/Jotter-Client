import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { MdLogout } from "react-icons/md";
import { removeToken } from "@/store/slices/tokenSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeToken());
  };

  return (
    <Button className="w-1/2 text-base" onClick={handleLogout}>
      <p>Log Out</p>
      <MdLogout size={50} />
    </Button>
  );
};

export default LogoutButton;
