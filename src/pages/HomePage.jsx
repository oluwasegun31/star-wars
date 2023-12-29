import { motion } from "framer-motion";
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
      <p className="text-lg italic">The safest way to</p>
      <div className="overflow-hidden">
        <motion.h4
          className="sm:text-8xl text-6xl font-medium mb-2"
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
    </section>
  );
}
