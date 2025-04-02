import { toast, ToastPosition, ToastOptions, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

const options: ToastOptions = {
  hideProgressBar: true,
  position: "bottom-right" as ToastPosition,
  pauseOnHover: true,
  autoClose: 3000,
  draggable: false,
  style: { color: 'white' },
  icon: false,
};

const optionsInfo: ToastOptions = {
  type: "info" as TypeOptions,
  ...options,
};

const optionsSuccess: ToastOptions = {
  type: "success" as TypeOptions,
  ...options,
};

const optionsError: ToastOptions = {
  type: "error" as TypeOptions,
  ...options,
};

const optionsWarning: ToastOptions = {
  type: "warning" as TypeOptions,
  ...options,
};

const optionsDark: ToastOptions = {
  type: "dark" as TypeOptions,
  ...options,
};

// toast.configure({});

export const ToastNotifyInfo = (message: string): void => {
  toast(message, optionsInfo);
};
export const ToastNotifySuccess = (message: string): void => {
  toast(message, optionsSuccess);
};
export const ToastNotifyError = (message: string): void => {
  toast(message, optionsError);
};
export const ToastNotifyWarning = (message: string): void => {
  toast(message, optionsWarning);
};
export const ToastNotifyDark = (message: string): void => {
  toast(message, optionsDark);
};