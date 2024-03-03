import React from "react";
import { SignIn } from "@clerk/nextjs";

const login: React.FC = () => {
  return <SignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/dashboard"} signUpUrl="/register" />;
};

export default login;
