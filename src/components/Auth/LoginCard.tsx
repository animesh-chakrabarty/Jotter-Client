import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/slices/tokenSlice";

const baseURL = "http://localhost:8000/api";

const LoginCard = ({ setIsLoginModalOpen }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const { toast } = useToast();
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

  const handleOverlayClick = (e) => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  const handleLogin = async () => {
    const bodyData = { email, password };

    try {
      setIsLoading(true);

      const res = await fetch(baseURL + "/auth/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });
      const resJson = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        setIsError(true);
        setError(resJson.message || resJson.toString());
        throw new Error(resJson.message || resJson.toString());
      }

      localStorage.setItem("jotter-token", resJson.token);
      dispatch(setToken(resJson.token));
      setIsLoginModalOpen(false);
    } catch (err) {
      console.error(err.message || err.toString());
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <Card className="w-[400px] bg-white text-lato" onClick={handleCardClick}>
        <CardHeader className="mb-4 items-center">
          <CardTitle className="">Log In</CardTitle>
          <CardDescription>Enter your account credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-3 w-full items-center">
              <div className="flex flex-col space-y-1.5 text-left w-full">
                <Label htmlFor="email" className="ml-1 text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email..."
                  className="w-full"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5 text-left w-full">
                <Label htmlFor="password" className="ml-1 text-base">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Enter your password..."
                  className="w-full"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter
          className="flex justify-center w-full"
          onClick={handleLogin}
        >
          {!isLoading ? (
            <Button className="w-full text-base">Login</Button>
          ) : (
            <Button className="w-full text-base">...logging in</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginCard;
