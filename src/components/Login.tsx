import { useState } from "react";
import { Button } from "./ui/button";
import LoginCard from "./Auth/LoginCard";

const Login = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  console.log(isLoginModalOpen);
  return (
    <div>
      <Button
        className="bg-black border hover:bg-white hover:text-black rounded-xl text-base font-lato px-6"
        onClick={() => setIsLoginModalOpen((prev) => !prev)}
      >
        LogIn
      </Button>
      {isLoginModalOpen && (
        <LoginCard setIsLoginModalOpen={setIsLoginModalOpen} />
      )}
    </div>
  );
};

export default Login;
