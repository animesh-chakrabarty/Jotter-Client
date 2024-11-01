import SignupButton from "./SignupButton";

const JoinUs = () => {
  return (
    <div className="w-full">
      <div className="w-full flex-[40%] mt-6 mb-16 bg-gradient-to-l from-gray-400 to-gray-950 flex flex-col gap-4 text-white px-[40px] py-8 rounded-[28px] shadow-lg">
        <p className="text-lg font-lato">Want to publish your own article ?</p>
        <SignupButton />
        <p className="font-lato text-center">
          Effortlessly write and publish blogs <br />
          with Jotter's hassle-free, built-in text editor.
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
