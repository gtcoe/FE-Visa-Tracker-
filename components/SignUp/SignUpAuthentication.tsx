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
  SIGN_IN_STATUS_TYPE
} from '../../constants/appConstants';
import config from '@component/constants/config';

const { AUTH_TOKEN_KEY, USER_ID_KEY, USER_TYPE_KEY, LOGIN_STATUS_KEY } = config;

const SignUpAuthentication = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [infoStatus, setInfoStatus] = useState<number>(0);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailBlur = () => {
    if (email && !emailRegex.test(email)) {
      setEmailError("Enter Valid Email Address");
    } else {
      setEmailError("");
    }
  };

  // For validation errors
  const validateLogin = (email: string, password: string) => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Enter Valid Email Address");
      return false;
    }
    if (!password.trim()) {
      ToastNotifyError("Password is required");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    // Reset status before attempting login
    setInfoStatus(0);
    
    if (!validateLogin(email, password)) return;

    try {
      setLoading(true);
      const response = await login({ email, password });

      // Handle API response
      if (!response) {
        setInfoStatus(SIGN_IN_STATUS_TYPE.INCORRECT_PASSWORD);
        return;
      }

      // Login successful
      if (response.status && response.data?.login_status === SIGN_IN_STATUS_TYPE.SUCCESS) {
        // Store data in localStorage for client-side usage
        localStorage.setItem(AUTH_TOKEN_KEY, response.data.token);
        localStorage.setItem(USER_ID_KEY, response.data.user_id.toString());
        localStorage.setItem(USER_TYPE_KEY, response.data.user_type.toString());
        localStorage.setItem(LOGIN_STATUS_KEY, response.data.login_status.toString());
        
        // Set cookies for server-side middleware
        document.cookie = `${AUTH_TOKEN_KEY}=${response.data.token}; path=/; max-age=2592000`; // 30 days
        document.cookie = `${USER_TYPE_KEY}=${response.data.user_type}; path=/; max-age=2592000`;
        document.cookie = `${USER_ID_KEY}=${response.data.user_id}; path=/; max-age=2592000`;
        document.cookie = `${LOGIN_STATUS_KEY}=${response.data.login_status}; path=/; max-age=2592000`;
        
        ToastNotifySuccess("Login successful!");
        router.push(DEFAULT_PATHS[response.data.user_type as USER_TYPE]);
      } 
      // Login failed with specific status
      else if (response.data?.login_status) {
        setInfoStatus(response.data.login_status);
        
        // If email not found, show it as an email error instead
        if (response.data.login_status === SIGN_IN_STATUS_TYPE.EMAIL_NOT_FOUND) {
          setEmailError("Email not found. Please check your email address.");
          setInfoStatus(0); // Don't show in password status
        }
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setInfoStatus(SIGN_IN_STATUS_TYPE.INCORRECT_PASSWORD);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-[20px] shadow-lg w-[450px] pb-8">
      <div className="flex justify-end items-center pt-8 pr-[33px]">
        <Image
          src={visaisticLogo}
          alt="visaisticLogo"
          width={130}
          height={59}
          className="w-[130px] h-[59px]"
        />
      </div>
      <div className="px-[40px] flex flex-col w-full gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[40px] text-black">Sign in</h1>
          <span className="font-normal text-[18px] text-[#969696]">
            Please login to continue to your account.
          </span>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              className={`${
                emailError ? "border-red-600" : "border-[#969696]"
              } border focus:border-[#0B498B] focus:outline-none text-black rounded-xl w-full p-4 font-normal text-[18px] placeholder:text-[#969696]`}
            />
            {emailError && (
              <p className="text-red-600 text-sm font-normal ml-1">
                {emailError}
              </p>
            )}
          </div>
          
          <div className="flex flex-col gap-1">
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
            
            {/* Password status info appears below password field */}
            {infoStatus > 0 && (
              <div className="mt-1">
                <PasswordStatus status={infoStatus} email={email} setInfoStatus={setInfoStatus}/>
              </div>
            )}
          </div>
          
          <div className="mt-1">
            <CheckBox 
              label={"Keep me logged in"} 
              state={isChecked} 
              updateState={setIsChecked}
            />
          </div>
        </div>
        <div className="mt-5 w-full">
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
