import { lazy } from "react";

export { default as MainLoader } from "./MainLoader";
export { default as DataCardLoader } from "./DataCardLoader";
export const InputForm = lazy(() => import("./InputForm"));
export const FormError = lazy(() => import("./FormError"));
export const DataCard = lazy(() => import("./DataCard"));
