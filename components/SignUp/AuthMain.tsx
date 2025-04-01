"use client";
import React from "react";
import SignUpAuthentication from "./SignUpAuthentication";
import Image from "next/image";
import SignUpImg from "../../public/SignUpImg.svg";
import VisaApprovedStamp from "../../public/visaApprovedStamp.svg";

const AuthPage = () => {
  return (
    <section className="flex justify-between items-center gap-[30px] bg-[#0B498B] h-[100vh]">
      <div className="w-1/2 h-full flex justify-center items-center ml-20">
        <div className="w-[64%] h-[100vh] absolute left-[1%]">
          <Image src={SignUpImg} alt="sign-up-bg" fill />
        </div>
        {/* Visa Approved Stamp */}
        <div className="absolute left-[10%] top-[29%] w-[150px] h-[150px] z-10">
          <Image src={VisaApprovedStamp} alt="visa-approved-stamp" width={150} height={150} />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-items-start z-[1000]">
        <SignUpAuthentication />
      </div>
    </section>
  );
};

export default AuthPage;
