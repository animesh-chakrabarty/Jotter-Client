import { useState } from "react";
import SignupCard from "../Auth/SignupCard";
import { Button } from "../ui/button";
import OTPCard from "../Auth/OTPCard";

const SignupButton = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  return (
    <div>
      <Button
        className=" w-full bg-black hover:bg-white hover:text-black rounded-xl text-base font-lato px-6"
        onClick={() => setIsSignupModalOpen((prev) => !prev)}
      >
        Join us now
      </Button>
      {isSignupModalOpen && (
        <SignupCard
          setIsSignupModalOpen={setIsSignupModalOpen}
          setIsOTPModalOpen={setIsOTPModalOpen}
        />
      )}
      {isOTPModalOpen && <OTPCard setIsOTPModalOpen={setIsOTPModalOpen}/>}
    </div>
  );
};

export default SignupButton;
