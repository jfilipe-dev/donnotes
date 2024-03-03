import React from "react";

import { SignUp } from "@clerk/nextjs";

const register: React.FC = () => {
  return <SignUp afterSignInUrl={"/dashboard"} afterSignUpUrl={"/dashboard"} signInUrl="/login" />;
};

export default register;
