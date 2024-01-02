import { Suspense, useContext, useState } from "react";
import { FormError, InputForm } from "../components";
import { useNavigate } from "react-router-dom";
import { userSignup, signupError } from "../authentication/SignUp";
import { InputFormContext } from "../context";

export default function SignUpPage() {
  const { emailRef, passwordRef, setIsLoading, setIsError, isError } =
    useContext(InputFormContext);
  const navigate = useNavigate();
  const signup = async () => {
    setIsLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === "" || password === "") {
      setIsLoading(false);
      setIsError("All fields must be filled");
      return setTimeout(() => setIsError(null), 4000);
    }
    const success = await userSignup(email, password);
    if (success) {
      setIsLoading(false);
      console.log("yaaaaaaah");
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      setIsLoading(false);
      signupError ===
      "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ? setIsError("Password should be at least 6 characters")
        : signupError === "Firebase: Error (auth/email-already-in-use)."
        ? setIsError("Email already in use")
        : setIsError("Something went wrong!");
      setTimeout(() => setIsError(null), 4000);
    }
  };
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-6 text-center relative">
      {isError && (
        <Suspense>
          <FormError isError={isError} />
        </Suspense>
      )}
      <p className="sm:text-6xl text-4xl font-medium">Sign Up</p>
      <section className="sm:w-[600px] w-[90%] px-4 py-12 bg-orange-700/20 rounded-lg">
        <Suspense fallback={<p>...</p>}>
          <InputForm formType={"sign up"} onClick={() => signup()} />
        </Suspense>
        <p className="mt-4">
          Already Have an account?{" "}
          <span
            className="text-blue-800 font-medium cursor-pointer"
            onClick={() => navigate("/auth/signin")}
          >
            Sign in
          </span>
        </p>
      </section>
    </section>
  );
}
