import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.webp";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// RootLayout component for the application's overall structure
export default function RootLayout() {
  const [isOpen, setIsOpen] = useState(false); // State to control navigation menu visibility
  const navigate = useNavigate(); // Access navigation function
  // Variants for animated navigation menu
  const navbarVariant = {
    // Initial state: menu hidden off-screen
    initial: {
      x: -100,
      opacity: 0,
    },
    // Animated state: menu slides in smoothly
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    // Exit state: menu slides out quickly
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.1,
        when: "afterChildren",
        staggerChildren: 0.04,
      },
    },
  };
  // Variants for animated navigation list items
  const navListVariant = {
    // Initial state: list items hidden off-screen
    initial: {
      x: 100,
      opacity: 0,
    },
    // Animated state: list items slide in
    animate: {
      x: 0,
      opacity: 1,
    },
    // Exit state: list items slide out
    exit: {
      x: 100,
      opacity: 0,
    },
  };
  return (
    <>
      <header>
        <nav className="py-1 px-4 border-b border-b-slate-200 flex justify-between items-center">
          <section>
            <svg
              className="w-[22px] h-[22px] text-gray-800 dark:text-white cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              onClick={() => setIsOpen(true)}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </section>
          <section>
            <img
              src={Logo}
              alt="logo"
              className="w-8 h-8 object-contain cursor-pointer"
              onClick={() => navigate("/")}
            />
          </section>
          <section className="flex justify-center items-center gap-4">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
              />
            </svg>
          </section>
        </nav>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.section
              className="fixed top-0 left-0 lg:w-[40%] sm:w-[60%] w-[90%] h-screen bg-white grid place-content-center gap-4 text-primary text-4xl text-center z-10"
              variants={navbarVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-primary absolute top-4 right-8 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                onClick={() => setIsOpen(false)}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <motion.div variants={navListVariant}>
                <NavLink
                  to="characters"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-b-primary font-medium"
                      : "border-b-0"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Characters
                </NavLink>
              </motion.div>
              <motion.div variants={navListVariant}>
                <NavLink
                  to="planets"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b border-b-primary font-medium"
                      : "border-b-0"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Planets
                </NavLink>
              </motion.div>
              <motion.div variants={navListVariant}>
                <NavLink
                  to="spaceships"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b border-b-primary font-medium"
                      : "border-b-0"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Spaceships
                </NavLink>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </header>
      <main className={`${isOpen && "blur-sm"}`}>
        <Outlet />
      </main>
      <footer className="mt-12 border-t border-t-slate-200 p-4 flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-2  text-[20px] font-normal">
        <p>Privacy Policies</p>
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <p>Copyright@2024</p>
      </footer>
    </>
  );
}
