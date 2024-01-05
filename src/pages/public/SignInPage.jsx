import { Suspense, useContext } from "react";
import { FormError, InputForm } from "../../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { InputFormContext } from "../../context";
import { signinError, userSignin } from "../../authentication/SignIn";

export default function SignInPage() {
  const navigate = useNavigate();
  const { emailRef, passwordRef, setIsLoading, setIsError, isError } =
    useContext(InputFormContext);
  const location = useLocation();
  const signinUser = async () => {
    setIsLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const success = await userSignin(email, password);
    if (email === "" || password === "") {
      setIsLoading(false);
      setIsError("All fields must be filled");
      return setTimeout(() => setIsError(null), 4000);
    }
    if (success) {
      setIsLoading(false);
      emailRef.current.value = "";
      passwordRef.current.value = "";
      location.state
        ? navigate(location.state?.from, { replace: true })
        : navigate("/", { replace: true });
    } else {
      setIsLoading(false);
      console.log(signinError);
      signinError === "Firebase: Error (auth/invalid-credential)"
        ? setIsError("Invalid Email or Password")
        : setIsError("something went wrong");
    }
  };
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-6 text-center relative">
      {isError && (
        <Suspense>
          <FormError isError={isError} />
        </Suspense>
      )}
      <p className="sm:text-6xl text-4xl font-medium">Sign In</p>
      <section className="sm:w-[600px] w-[90%] px-4 py-12 bg-orange-700/20 rounded-lg">
        <Suspense fallback={<p>...</p>}>
          <InputForm formType={"sign in"} onClick={() => signinUser()} />
        </Suspense>
        <p className="mt-4">
          Don't Have an account?{" "}
          <span
            className="text-blue-800 font-medium cursor-pointer"
            onClick={() => navigate("/auth/signup")}
          >
            Sign up
          </span>
        </p>
        <Link
          to={"/auth/forgot-password"}
          className="text-blue-700 text-lg underline"
        >
          Forgot password?
        </Link>
      </section>
    </section>
  );
}
