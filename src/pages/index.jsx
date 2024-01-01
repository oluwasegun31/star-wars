import { lazy } from "react";

export { default as HomePage } from "./HomePage";
export const SignUpPage = lazy(() => import("./SignUpPage"));
export const SignInPage = lazy(() => import("./SignInPage"));
