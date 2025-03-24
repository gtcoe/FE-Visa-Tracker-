"use client";

import React, { useState } from "react";
import PasswordStatus from "./PasswordStatus";
import CheckBox from "../common/CheckBox";
import Image from "next/image";
import visaisticLogo from "../../public/visaisticLogo.svg";
import eyeOff from "../../public/eye-off.svg";
import eye from "../../public/eye.png";
import { ToastNotifyError } from "../../utils/ToastNotifyError";

const SignUpAuthentication = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailBlur = () => {
    if (email && !emailRegex.test(email)) {
      ToastNotifyError("Enter Valid Email Address");
    } else {
      setError("");
    }
  };
  const [checked, setChecked] = useState(false);

  // For validation errors
  const validateLogin = (email: string) => {
    if (!emailRegex.test(email)) {
      ToastNotifyError("Enter Valid Email Address");
      return false;
    }
    return true;
  };

  return (
    <div className="bg-white border rounded-[20px] pb-15 w-[74%]">
      <div className="flex justify-end items-center pt-8 pr-[33px]">
        <Image
          src={visaisticLogo}
          alt="visaisticLogo"
          width={130}
          height={59}
          className="w-[130px] h-[59px]"
        />
      </div>
      <div className="px-15 flex flex-col w-full gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[40px] text-black">Sign in</h1>
          <span className="font-normal text-[18px] text-[#969696]">
            Please login to continue to your account.
          </span>
        </div>
        <div className="w-full flex flex-col gap-5">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            className={`${
              error === "" ? "border-[#969696]" : "border-red-600"
            } border focus:border-[#0B498B] focus:outline-none text-black rounded-xl w-full p-4 font-normal text-[18px] placeholder:text-[#969696]`}
          />
          {error && (
            <p className="text-red-600 mt-[-16px] font-normal text-sm">
              {error}
            </p>
          )}
          <div
            className="flex justify-between items-center border border-[#969696] focus-within:border-[#0B498B] text-black rounded-xl w-full p-4 font-normal text-[18px]"
          >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                className="placeholder:text-[#969696] w-full focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            >
              <Image
                src={showPassword ? eyeOff : eye}
                alt="eyeOff"
                width={24}
                height={24}
                className="size-6"
              />
            </button>
          </div>
          <PasswordStatus status="none" />
          <CheckBox label={"Keep me logged in"} state={isChecked} updateState={setIsChecked}/>
        </div>
        <div className="mt-2 w-full">
          <button className="rounded-xl bg-[#0B498B] py-4 text-center w-full text-white text-[18px] font-semibold cursor-pointer">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpAuthentication;
