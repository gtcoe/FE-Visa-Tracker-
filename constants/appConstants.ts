// Define user roles
import {USER_TYPE} from "../constants/userConstants"

// Define role-based redirect paths
export const DEFAULT_PATHS: Record<USER_TYPE, string> = {
  [USER_TYPE.CLIENT]: "/visaistic/application-tracker",
  [USER_TYPE.MANAGER]: "/visaistic/application-tracker",
  [USER_TYPE.ADMIN]: "/visaistic/manage-users",
};

// Define routes that are accessible to each role
export const ROLE_ROUTES: Record<USER_TYPE, string[]> = {
  [USER_TYPE.CLIENT]: ["/application-tracker", "/check-list", "/services", "/manage-users", "/manage-clients", "/checklist-details"],
  [USER_TYPE.MANAGER]: ["/application-tracker", "/check-list", "/services", "/manage-users", "/manage-clients", "/checklist-details"],
  [USER_TYPE.ADMIN]: ["/application-tracker", "/check-list", "/services", "/manage-users", "/manage-clients", "/checklist-details"],
};

// Define the navigation items for each role
export const roleBasedNavItems = {
  [USER_TYPE.CLIENT]: [
    { label: "Application Tracker", path: "/application-tracker" },
    { label: "Check list", path: "/check-list" },
  ],
  [USER_TYPE.MANAGER]: [
    { label: "Application Tracker", path: "/application-tracker" },
    { label: "Manage Users", path: "/manage-users" },
    { label: "Check list", path: "/check-list" },
    { label: "Services", path: "/services" },
    { label: "Manage Clients", path: "/manage-clients" },
  ],
  [USER_TYPE.ADMIN]: [
    { label: "Application Tracker", path: "/application-tracker" },
    { label: "Manage Users", path: "/manage-users" },
    { label: "Check list", path: "/check-list" },
    { label: "Services", path: "/services" },
    { label: "Manage Clients", path: "/manage-clients" },
  ],
};

// Define the default landing page for each role
export const defaultRoutes: Record<USER_TYPE, string> = {
  [USER_TYPE.CLIENT]: "/visaistic/application-tracker",
  [USER_TYPE.MANAGER]: "/visaistic/application-tracker",
  [USER_TYPE.ADMIN]: "/visaistic/manage-users",
};

export const SIGN_IN_STATUS_TYPE: Record<string, number> = {
  SUCCESS: 1,
  INCORRECT_PASSWORD: 2,
  EXPIRED_REQUEST_NOT_INITIATED: 3,
  EXPIRED_REQUEST_INITIATED: 4,
  INACTIVE_BY_ADMIN: 5,
  EMAIL_NOT_FOUND: 6,
};

export const SIGN_IN_STATUS_MESSAGE: Record<number, string> = {
  [SIGN_IN_STATUS_TYPE.SUCCESS]: "",
  [SIGN_IN_STATUS_TYPE.INCORRECT_PASSWORD]: "Incorrect password please try again.",
  [SIGN_IN_STATUS_TYPE.EXPIRED_REQUEST_NOT_INITIATED]:
    "Your password has expired. Request a new password to continue.",
  [SIGN_IN_STATUS_TYPE.EXPIRED_REQUEST_INITIATED]:
    "Your password reset request has been sent successfully.",
  [SIGN_IN_STATUS_TYPE.INACTIVE_BY_ADMIN]:
    "Your password has expired. Request a new password to continue.",
  [SIGN_IN_STATUS_TYPE.EMAIL_NOT_FOUND]: "Email does not exist.",
};

export const APPLICATION_STATUS: Record<string, number> = {
  STEP1_DONE: 1,
  STEP2_DONE: 2,
  STEP3_DONE: 2,
  STEP4_DONE: 2,
}

export enum EMAIL_TYPE {
  WELCOME = 1,
  PASSWORD_RESET = 2,
  APPLICATION_STATUS = 3,
  CREDENTIALS = 4,
  DOCUMENT_CHECKLIST = 5
}

