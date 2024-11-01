import { useEffect, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { toast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/slices/tokenSlice";

const baseURL = "http://localhost:8000/api";

const OTPCard = ({ setIsOTPModalOpen }) => {
  const [OTP, setOTP] = useState<string | undefined>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: `${error || "something went wrong"}`,
      });
      setIsError(false);
      setError(null);
    }
  }, [isError, error]);

  const submitOTP = async () => {
    const token = localStorage.getItem("jotter-token");
    const bodyData = {
      OTP,
    };

    try {
      setIsLoading(true);

      const res = await fetch(baseURL + "/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyData),
      });

      const resJson = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        setIsError(true);
        setError(resJson.message);
        throw new Error("Error while signing up : " + resJson.message);
      }

      localStorage.setItem("jotter-token", resJson.token);
      dispatch(setToken(resJson.token));
      setIsOTPModalOpen(false);
    } catch (err) {
      console.error(err.message || err.toString());
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center text-black bg-black bg-opacity-50 z-50">
      <Card className="bg-white text-lato px-10 py-4 flex flex-col gap-4">
        <CardHeader>
          <CardDescription className="text-black text-lg text-center">
            We've sent a mail to you. Enter the OTP below
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col  items-center gap-4">
          <InputOTP maxLength={6} value={OTP} onChange={(OTP) => setOTP(OTP)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          {!isLoading ? (
            <Button className="px-5 text-base" onClick={submitOTP}>
              Verify
            </Button>
          ) : (
            <Button className="px-5 text-base">...verifing</Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPCard;
