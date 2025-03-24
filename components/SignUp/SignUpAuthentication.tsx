"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PasswordStatus from "./PasswordStatus";
import CheckBox from "../common/CheckBox";
import Image from "next/image";
import visaisticLogo from "../../public/visaisticLogo.svg";
import eyeOff from "../../public/eye-off.svg";
import eye from "../../public/eye.png";
import { ToastNotifyError, ToastNotifySuccess } from "../common/Toast";
import { login } from "@component/api/auth";
import { USER_TYPE } from '../../constants/userConstants';
import { 
  DEFAULT_PATHS, 
  SIGN_IN_STATUS_TYPE, 
  SIGN_IN_STATUS_MESSAGE 
} from '../../constants/appConstants';
import config from '@component/constants/config';

const { AUTH_TOKEN_KEY, USER_ID_KEY, USER_TYPE_KEY, LOGIN_STATUS_KEY } = config;

const SignUpAuthentication = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState("none");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailBlur = () => {
    if (email && !emailRegex.test(email)) {
      ToastNotifyError("Enter Valid Email Address");
    } else {
      setError("");
    }
  };

  // For validation errors
  const validateLogin = (email: string, password: string) => {
    if (!emailRegex.test(email)) {
      ToastNotifyError("Enter Valid Email Address");
      return false;
    }
    if (!password.trim()) {
      ToastNotifyError("Password is required");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateLogin(email, password)) return;

    try {
      setLoading(true);
      const response = await login({ email, password });

      if (!response || !response.status || !response.data) {
        console.log("======>response", response);
        setError(SIGN_IN_STATUS_MESSAGE[response?.data?.login_status || 0] || "Login failed. Please try again.");
        return;
      }

      if (response.data.login_status === SIGN_IN_STATUS_TYPE.SUCCESS) {
        localStorage.setItem(AUTH_TOKEN_KEY, response.data.token);
        localStorage.setItem(USER_ID_KEY, response.data.user_id.toString());
        localStorage.setItem(USER_TYPE_KEY, response.data.user_type.toString());
        localStorage.setItem(LOGIN_STATUS_KEY, response.data.login_status.toString());
        ToastNotifySuccess("Login successful!");
        router.push(DEFAULT_PATHS[response.data.user_type as USER_TYPE]);
      } else {
        setError(SIGN_IN_STATUS_MESSAGE[response.data.login_status]);
      }
      
    } catch (err: any) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
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
          <PasswordStatus status={passwordStatus} />
          <CheckBox label={"Keep me logged in"} state={isChecked} updateState={setIsChecked}/>
        </div>
        <div className="mt-2 w-full">
          <button 
            onClick={handleLogin}
            disabled={loading}
            className={`rounded-xl bg-[#0B498B] py-4 text-center w-full text-white text-[18px] font-semibold ${loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpAuthentication;
