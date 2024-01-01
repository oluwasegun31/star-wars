import googleIcon from "../assets/google.webp";
import githubIcon from "../assets/github.webp";

export default function InputForm({ formType }) {
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
              className="w-full bg-transparent outline-none border-b border-b-slate-200/35 focus:border-b-slate-200 pr-8"
            />
            <svg
              className="w-6 h-6 text-gray-800 dark:text-slate-200/35 absolute right-1 top-1 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
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
          className="w-full bg-white text-primary py-2 sm:text-[20px] text-lg font-medium capitalize"
        >
          {formType}
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
        />
        <img
          width="40"
          height="40"
          src={githubIcon}
          alt="github-logo"
          className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
        />
      </div>
    </>
  );
}
