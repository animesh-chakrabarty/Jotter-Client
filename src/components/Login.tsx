import { useState } from "react";
import { Button } from "./ui/button";
import LoginCard from "./Auth/LoginCard";

const Login = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <Button
      className="bg-black border hover:bg-white hover:text-black rounded-xl text-base font-lato px-6"
      onClick={() => setIsLoginModalOpen((prev) => !prev)}
    >
      LogIn
      {isLoginModalOpen && <LoginCard />}
    </Button>
  );
};

export default Login;
