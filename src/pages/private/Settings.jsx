import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

export default function Settings() {
  const userSignOut = async () => {
    return await signOut(auth);
  };
  return (
    <section className="w-full min-h-screen grid place-content-center">
      <button
        className="bg-white text-primary font-medium text-2xl px-4 py-2"
        onClick={() => userSignOut()}
      >
        Sign Out
      </button>
    </section>
  );
}
