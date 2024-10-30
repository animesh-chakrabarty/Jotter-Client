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
import { ToastAction, ToastClose } from "@/components/ui/toast";

const baseURL = "http://localhost:8000/api";

const SignupCard = ({ setIsSignupModalOpen }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { toast } = useToast();
  useEffect(() => {
    if (isError) {
      toast({
        title: `${error || "somethoing went wrong"}`,
        className: ""
      });
      setIsError(false);
      setError(null);
    }
  }, [isError, error]);

  const handleOverlayClick = (e) => {
    setIsSignupModalOpen((prev) => !prev);
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  const handleSignup = async () => {
    const bodyData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      setIsLoading(true);

      const res = await fetch(baseURL + "/auth/sign-up", {
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
        setError(resJson.message);
        throw new Error("Error while signing up : " + resJson.message);
      }

      console.log(resJson);
    } catch (err) {
      console.error(err.message || err.toString());
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center text-black bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <Card className="w-[500px] bg-white text-lato" onClick={handleCardClick}>
        <CardHeader className="mb-8 items-center">
          <CardTitle className="">Sign up</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-3 w-full items-center">
              <div className="flex gap-4 text-left w-full">
                <div className="first-name space-y-1.5 w-full">
                  <Label htmlFor="first-name" className="ml-1 text-base">
                    First Name
                  </Label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name..."
                    className="w-full"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="last-name space-y-1.5 w-full">
                  <Label htmlFor="last-name" className="ml-1 text-base">
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name..."
                    className="w-full"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
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
        <CardFooter className="flex justify-center w-full">
          {!isLoading ? (
            <Button className="w-full text-base" onClick={handleSignup}>
              Signup
            </Button>
          ) : (
            <Button className="w-full text-base" onClick={handleSignup}>
              ...signing up
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupCard;
