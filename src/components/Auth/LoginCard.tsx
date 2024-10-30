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
import { useState } from "react";

const LoginCard = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  console.log(email, password);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card className="w-[400px] bg-white text-lato">
        <CardHeader className="mb-4">
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
        <CardFooter className="flex justify-center w-full">
          <Button className="w-full text-base">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginCard;
