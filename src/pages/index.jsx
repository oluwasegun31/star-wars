import { lazy } from "react";

export { default as HomePage } from "./public/HomePage";
export const SignUpPage = lazy(() => import("./public/SignUpPage"));
export const SignInPage = lazy(() => import("./public/SignInPage"));
export const ResetPasswordPage = lazy(() => import("./public/ResetPassword"));
export const AccountSetupPage = lazy(() => import("./private/AccountSetup"));
