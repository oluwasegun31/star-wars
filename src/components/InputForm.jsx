import googleIcon from "../assets/google.webp";
import githubIcon from "../assets/github.webp";
import { useContext } from "react";
import { InputFormContext } from "../context";
import { googleAuth, googleError } from "../authentication/GoogleAuth";
import { GithubAuth, githubError } from "../authentication/GithubAuth";
import { useLocation, useNavigate } from "react-router-dom";
// input form component used for signup and sign in
export default function InputForm({ formType, onClick }) {
  // Access input form context values
  const { emailRef, passwordRef, isLoading, setIsLoading, setIsError } =
    useContext(InputFormContext);
  // Access browser location and navigation
  const location = useLocation();
  const navigate = useNavigate();
  // Function for Google authentication
  const googleAuthentication = async () => {
    setIsLoading(true); // Set loading state to true
    const success = await googleAuth(); // Trigger Google authentication
    // Navigate to respective page if auth success, error message if authentication fails
    if (success) {
      setIsLoading(false); // Set loading state to false
      location.state
        ? navigate(location.state?.from, { replace: true })
        : navigate("/", { replace: true });
    } else {
      setIsError(googleError);
      setTimeout(() => setIsError(false), 4000);
    }
  };
  // signin with github;
  const githubAuthentication = async () => {
    setIsLoading(true); // Set loading state to true
    const success = await GithubAuth(); // Trigger Github authentication
    // Navigate to respective page if auth success, error message if authentication fails
    if (success) {
      setIsLoading(false); // Set loading state to false
      location.state
        ? navigate(location.state?.from, { replace: true })
        : navigate("/", { replace: true });
    } else {
      setIsError(githubError);
      setTimeout(() => setIsError(false), 4000);
    }
  };
  // Function to toggle password visibility
  const togglePassword = () => {
    passwordRef.current.type === "password"
      ? (passwordRef.current.type = "text")
      : (passwordRef.current.type = "password");
  };

  return (
    <>
      <form className="sm:w-[70%] w-full mx-auto mb-3">
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
        <div className="w-full flex flex-col justify-start items-start gap-1 text-[20px] mb-3">
          <label htmlFor="password">Password*</label>
          <div className="relative w-full">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="true"
              ref={passwordRef}
              className="w-full bg-transparent outline-none border-b border-b-slate-200/35 focus:border-b-slate-200 pr-8"
            />
            <svg
              className="w-6 h-6 text-gray-800 dark:text-slate-200/35 absolute right-1 top-1 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
              onClick={() => togglePassword()}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-white text-primary py-2 sm:text-[20px] text-lg font-medium capitalize outline-none disabled:bg-white/50"
          onClick={() => onClick()}
          disabled={isLoading ? true : false}
        >
          {isLoading ? ". . . . ." : formType}
        </button>
      </form>
      <p>or {formType} with</p>
      <div className="w-full flex justify-center items-center gap-3 mt-2">
        <img
          width="40"
          height="40"
          src={googleIcon}
          alt="google-logo"
          className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
          onClick={() => googleAuthentication()}
        />
        <img
          width="40"
          height="40"
          src={githubIcon}
          alt="github-logo"
          className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
          onClick={() => githubAuthentication()}
        />
      </div>
    </>
  );
}
