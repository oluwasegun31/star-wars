import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
export default function HomePage() {
  const text = "Explore the Galaxy";
  const letterReveal = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        type: "spring",
      },
    },
  };
  return (
    <section className="w-full h-[96vh] grid place-content-center text-center landing-img bg-center bg-cover relative px-2">
      <p className="sm:text-2xl text-lg italic">The safest way to</p>
      <div className="overflow-hidden">
        <motion.h4
          className="sm:text-[7.5rem] text-6xl font-medium mb-2 [letter-spacing:-3px]"
          variants={letterReveal}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((letter, i) => (
            <motion.span key={i} variants={letterReveal}>
              {letter}
            </motion.span>
          ))}
        </motion.h4>
      </div>
      <Marquee
        speed={120}
        delay={2}
        pauseOnHover
        className="[&_div]:mx-auto mt-8"
      >
        <div className="flex justify-center items-center sm:gap-8 gap-3 sm:text-3xl text-lg font-medium overflow-y-hidden mx-auto px-4">
          <p>80+ Characters</p>
          <p>*</p>
          <p>20+ Planets</p>
          <p>*</p>
          <p>10+ Spaceships</p>
        </div>
      </Marquee>
    </section>
  );
}
