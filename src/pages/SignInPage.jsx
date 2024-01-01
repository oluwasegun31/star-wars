import { Suspense } from "react";
import { InputForm } from "../components";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-6 text-center">
      <p className="sm:text-6xl text-4xl font-medium">Sign In</p>
      <section className="sm:w-[600px] w-[90%] px-4 py-12 bg-orange-700/20 rounded-lg">
        <Suspense fallback={<p>...</p>}>
          <InputForm formType={"sign in"} />
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
      </section>
    </section>
  );
}