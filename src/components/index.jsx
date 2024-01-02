import { lazy } from "react";

export { default as MainLoader } from "./MainLoader";
export const InputForm = lazy(() => import("./InputForm"));
export const FormError = lazy(() => import("./FormError"));
