import React, { useState } from "react";
import Image from "next/image";
import alertIcon from "../../public/alert-01.svg";
import CheckFill from "../../public/CheckFill.svg";
import { SIGN_IN_STATUS_TYPE } from "@component/constants/appConstants";
import { requestNewPassword } from "@component/api/auth";
import { ToastNotifyError, ToastNotifySuccess } from "../common/Toast";

interface PasswordStatusProps {
  status: number;
  email: string;
  setInfoStatus: (status: number) => void;
}

const PasswordStatus: React.FC<PasswordStatusProps> = ({ status, email, setInfoStatus }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRequestNewPassword = async () => {
    try {
      setIsLoading(true);
      const response = await requestNewPassword(email);
      
      if (response.status) {
        setInfoStatus(SIGN_IN_STATUS_TYPE.EXPIRED_REQUEST_INITIATED);
      } else {
        ToastNotifyError(response.message || "Failed to request new password");
      }
    } catch (error) {
      ToastNotifyError("An error occurred while requesting new password");
    } finally {
      setIsLoading(false);
    }
  };

  switch (status) {
    case SIGN_IN_STATUS_TYPE.EXPIRED_REQUEST_NOT_INITIATED:
    case SIGN_IN_STATUS_TYPE.INACTIVE_BY_ADMIN:
      return (
        <div className="w-full bg-[#EF44441A] rounded-xl p-4 text-[14px] flex flex-col gap-2">
          <div className="flex gap-2 font-normal">
            <Image
              src={alertIcon}
              alt="alert"
              width={20}
              height={20}
              className="size-5"
              quality={85}
            />
            <span className="text-[#EF4444]">
              Your password has expired. Request a new password to continue.
            </span>
          </div>
          <div className="flex justify-end">
            <button 
              onClick={handleRequestNewPassword}
              disabled={isLoading}
              className="font-medium text-[#0B498B] cursor-pointer underline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Requesting..." : "Request New Password"}
            </button>
          </div>
        </div>
      );
    case SIGN_IN_STATUS_TYPE.EXPIRED_REQUEST_INITIATED:
      return (
        <div className="w-full bg-[#f3fbf9] rounded-xl p-4 text-[14px] flex gap-2 font-normal">
          <Image
            src={CheckFill}
            alt="check"
            className="size-5"
            width={20}
            height={20}
            quality={85}
          />
          <span className="text-[#10B981]">
            Your password reset request has been sent successfully.
          </span>
        </div>
      );
    case SIGN_IN_STATUS_TYPE.INCORRECT_PASSWORD:
      return (
        <div className="w-full text-[14px] flex gap-2 font-normal">
          <Image
            src={alertIcon}
            alt="alert"
            className="size-5"
            width={20}
            height={20}
            quality={85}
          />
          <span className="text-[#EF4444]">
            Incorrect password please try again.
          </span>
        </div>
      );
    case SIGN_IN_STATUS_TYPE.EMAIL_NOT_FOUND:
      return (
        <div className="w-full text-[14px] flex gap-2 font-normal">
          <Image
            src={alertIcon}
            alt="alert"
            className="size-5"
            width={20}
            height={20}
            quality={85}
          />
          <span className="text-[#EF4444]">
            Email not found. Please check your email address.
          </span>
        </div>
      );
    default:
      return null;
  }
};

export default PasswordStatus;
