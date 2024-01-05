import { Suspense, useContext } from "react";
import { FormError, InputForm } from "../../components";
import { useNavigate } from "react-router-dom";
import { userSignup, signupError } from "../../authentication/SignUp";
import { InputFormContext } from "../../context";
// Functional component for handling the sign-up page
export default function SignUpPage() {
  const { emailRef, passwordRef, setIsLoading, setIsError, isError } =
    useContext(InputFormContext); // Access input form state and error handling functions from context
  const navigate = useNavigate();
  // Function to handle sign-up form submission
  const signup = async () => {
    setIsLoading(true); // Set loading state to true
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // Validate input fields before submitting
    if (email === "" || password === "") {
      setIsLoading(false);
      setIsError("All fields must be filled");
      return setTimeout(() => setIsError(null), 4000); // Clear error message after 4 seconds
    }
    // Attempt to create a new user account
    const success = await userSignup(email, password);
    if (success) {
      setIsLoading(false);
      emailRef.current.value = ""; // Clear input fields
      passwordRef.current.value = ""; // Clear password fields
      navigate("/account-setup", { replace: true }); // Redirect to account setup page
    } else {
      setIsLoading(false);
      // Handle specific errors from Firebase
      signupError ===
      "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ? setIsError("Password should be at least 6 characters")
        : signupError === "Firebase: Error (auth/email-already-in-use)."
        ? setIsError("Email already in use")
        : setIsError("Something went wrong!");
      setTimeout(() => setIsError(null), 4000); // Clear error message after 4 seconds
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
