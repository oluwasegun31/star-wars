import { useRef, useState } from "react";
import { createContext } from "react";

export const InputFormContext = createContext(null);
export const InputFormProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <InputFormContext.Provider
      value={{
        emailRef,
        passwordRef,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </InputFormContext.Provider>
  );
};
