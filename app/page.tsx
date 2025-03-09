import * as React from "react";
import AuthPage from "@component/components/SignUp/AuthMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visaistic",
  description: "Visa Application Tracker",
};
const VisaisticMain: React.FC = () => {
  return (
    <>
      <main>
        <AuthPage />
      </main>
    </>
  );
};

export default VisaisticMain;
