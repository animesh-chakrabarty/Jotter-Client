import { Button } from "../ui/button";

const JoinUs = () => {
  return (
    <div className="bg-gradient-to-l from-gray-400 to-gray-950 flex flex-col gap-4 text-white px-[60px] py-8 rounded-[28px] shadow-lg">
      <p className="text-lg font-lato">Want to publish your own article ?</p>
      <Button className=" hover:bg-white hover:text-black">Join Us Now</Button>
      <p className="font-lato text-center">
        Effortlessly write and publish blogs with Jotter, plus get the benefits
        of hasslefree blog writing using our built-in text editor
      </p>
    </div>
  );
};

export default JoinUs;
