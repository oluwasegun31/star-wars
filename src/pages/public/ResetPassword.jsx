import { Suspense, useContext, useRef, useState } from "react";
import { InputFormContext } from "../../context";
import { FormError } from "../../components";
import {
  resetPasswordError,
  resetPasswordFunc,
} from "../../authentication/ResetPassword";
import { Link } from "react-router-dom";
// ResetPasswordPage component
export default function ResetPasswordPage() {
  // Access form state from context
  const { isLoading, setIsLoading, setIsError, isError } =
    useContext(InputFormContext);
  const emailRef = useRef(); // Create ref for email input
  const [isSuccess, setIsSuccess] = useState(false); // State for password reset success
  // Handle password reset request
  const onPasswordReset = async () => {
    setIsLoading(true); // Set loading state
    const email = emailRef.current.value;
    if (email === "") {
      setIsLoading(false);
      setIsError("Enter your email"); // Show error if email is empty
      setTimeout(() => setIsError(null), 4000); // Clear error after 4 seconds
      return;
    }
    const success = await resetPasswordFunc(email); // Call password reset function
    if (success) {
      setIsLoading(false);
      setIsSuccess(true); // Set success state
      setTimeout(() => setIsSuccess(false), 6000); // Clear success message after 6 seconds
    } else {
      setIsLoading(false);
      setIsError("Invalid Email"); // Show error if email is invalid
      setIsSuccess(false);
      setTimeout(() => setIsError(null), 4000); // Clear error after 4 seconds
    }
  };
  return (
    <section className="w-full min-h-screen grid place-content-center gap-6 text-center relative">
      {isError && (
        <Suspense fallback={<p className="absolute top-0 right-0"></p>}>
          <FormError isError={isError} />
        </Suspense>
      )}
      <section>
        <h4 className="sm:text-6xl text-4xl font-medium capitalize">
          Reset Password
        </h4>
        <p className="sm:text-lg text-sm font-normal w-[80%] mx-auto leading-none">
          that's okay. It happens to only you. fill in the correct email to
          reset your password
        </p>
      </section>
      <section className="sm:w-[600px] w-[90%] px-4 sm:py-12 py-8 bg-orange-700/20 rounded-lg mx-auto">
        {isSuccess && (
          <p className="text-green-600 font-medium text-[20px]">
            Success. Check your mail.
          </p>
        )}
        <form className="sm:w-[80%] w-full mx-auto mb-3">
          <div className="w-full flex flex-col justify-start items-start gap-1 sm:text-[20px] text-lg mb-3">
            <label htmlFor="email">Email*</label>
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                className="w-full bg-transparent outline-none border-b border-b-slate-200/35 focus:border-b-slate-200 pr-8"
              />
              <svg
                className="w-6 h-6 text-gray-800 dark:text-slate-200/35 absolute right-1 top-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
                />
              </svg>
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-white text-primary py-2 sm:text-[20px] text-lg font-medium capitalize outline-none disabled:bg-white/50"
            disabled={isLoading ? true : false}
            onClick={() => onPasswordReset()}
          >
            {isLoading ? ". . . . ." : "Reset Password"}
          </button>
          <p className="mt-6 sm:text-lg text-base leading-none">
            Shockingly remembers password?{" "}
            <Link to={"/auth/signin"} className="text-blue-600">
              Log In
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}
