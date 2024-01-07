import { motion } from "framer-motion";
import UseFetchFirestore from "../../hooks/UseFetchFirestore";
export default function Characters() {
  const letterReveal = {
    hidden: {
      x: 30,
      y: 40,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.05,
      },
    },
  };
  const { dataArr: characters, isLoading } = UseFetchFirestore("characters");

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-start gap-6 mt-6 px-4">
      <div className="overflow-hidden">
        <motion.h5
          className="text-5xl font-medium w-fit"
          variants={letterReveal}
          initial="hidden"
          animate="visible"
        >
          {"Characters".split("").map((letters, i) => {
            return (
              <motion.span key={i} variants={letterReveal}>
                {letters}
              </motion.span>
            );
          })}
        </motion.h5>
      </div>
      <section className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-6 gap-y-10 gap-x-4 mx-auto xl:max-w-6xl md:max-w-5xl mt-6">
        {!isLoading &&
          characters.map((character) => {
            return (
              <section
                key={character.id}
                className="bg-red-800 w-full md:h-[350px] sm:h-[300px] h-[250px] rounded-b-md rounded-r-md relative"
              >
                <p className="absolute -top-6 left-0 bg-red-800 py-2 pl-2 pr-6 rounded-t-md clippy">
                  1776
                </p>
              </section>
            );
          })}
      </section>
    </section>
  );
}
