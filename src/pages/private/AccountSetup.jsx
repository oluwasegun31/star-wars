import { Suspense, useRef, useState } from "react";
import {
  accountSetUp,
  acctSetupError,
} from "../../authentication/AccountSetup";
import UseFetchIcons from "../../hooks/UseFetchIcons";
import { FormError } from "../../components";

export default function AccountSetup() {
  const { icons } = UseFetchIcons("icons"); // Fetch icons using the UseFetchIcons hook
  // State variables for managing form data and UI
  const displayRef = useRef();
  const [photoUrl, setPhotoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // Function to handle form submission
  const updateAccount = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    const displayName = displayRef.current.value;
    // Validate input fields before submitting
    if (displayName === "" || photoUrl === null) {
      setIsError("Fill the Info.");
      setIsLoading(false);
      return setTimeout(() => setIsError(false), 4000);
    }
    // Attempt to update account information
    const success = await accountSetUp(displayName, photoUrl);
    //
    if (success) {
      setIsLoading(false);
      setIsError(false);
      console.log("yaaaaah");
    } else {
      setIsLoading(false);
      setIsError("something went wrong");
      setTimeout(() => setIsError(false), 4000);
    }
  };
  return (
    <section className="w-full min-h-screen grid place-content-center gap-6 text-center pt-4">
      {isError && (
        <Suspense fallback={<p className="absolute top-0 right-0"></p>}>
          <FormError isError={isError} />
        </Suspense>
      )}
      <div>
        <h5 className="sm:text-6xl text-4xl font-medium">Account Setup</h5>
        <p className="sm:text-lg text-sm font-normal leading-none">
          Just one final small details to go through
        </p>
      </div>
      <section className="sm:w-[630px] w-[90%] px-4 sm:py-12 py-8 bg-orange-700/20 rounded-lg mx-auto">
        <form
          className="sm:w-[90%] w-full mx-auto mb-3"
          onSubmit={(e) => updateAccount(e)}
        >
          <div className="w-full flex flex-col justify-start items-start gap-1 sm:text-[22px] text-lg mb-3">
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
              id="displayName"
              ref={displayRef}
              className="w-full bg-transparent outline-none border-b border-b-slate-200/35 focus:border-b-slate-200"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-1 sm:text-[22px] text-lg mb-3">
            <p>Display Icon</p>
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <p className="text-base">Select a picture</p>
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="photUrl"
                  width={64}
                  height={64}
                  className="sm:w-16 w-12 sm:h-16 h-12"
                />
              ) : (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
              )}
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-4 my-3">
              {icons.map((item, i) => {
                return (
                  <img
                    src={item}
                    alt="item"
                    key={i}
                    className="sm:w-16 w-12 sm:h-16 h-12 cursor-pointer"
                    width={64}
                    height={64}
                    onClick={(e) => setPhotoUrl(e.target.src)}
                  />
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-primary py-3 font-medium text-lg disabled:bg-white/40"
            disabled={isLoading ? true : false}
          >
            {isLoading ? ". . . . ." : "Submit"}
          </button>
        </form>
      </section>
    </section>
  );
}
