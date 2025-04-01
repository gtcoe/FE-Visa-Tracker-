"use client";
import React from "react";
import SignUpAuthentication from "./SignUpAuthentication";
import Image from "next/image";
import SignUpImg from "../../public/SignUpImg.svg";

const AuthPage = () => {
  return (
    <section className="flex justify-between items-center gap-[30px] bg-[#0B498B] h-[100vh]">
      <div className="w-1/2 h-full flex justify-center items-center ml-20">
        <div className="w-[64%] h-[100vh] absolute left-[1%]">
          <Image src={SignUpImg} alt="sign-up-bg" fill />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-items-start z-[1000]">
        <SignUpAuthentication />
      </div>
    </section>
  );
};

export default AuthPage;
