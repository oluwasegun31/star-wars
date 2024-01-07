import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import ashoka from "../../assets/ashoka.webp";
import tatooine from "../../assets/Tatooine-wide.webp";
import starDestroyer from "../../assets/Star-Destroyer.webp";
// Home Page
export default function HomePage() {
  // Store main text for animation
  const text = "Explore the Galaxy";
  // Create references for featured sections
  const characterRef = useRef();
  const planetRef = useRef();
  const starshipRef = useRef();
  // Track whether sections are in view
  const isInView = useInView(characterRef, { amount: 0.5 });
  const isInView2 = useInView(planetRef, { amount: 0.5 });
  const isInView3 = useInView(starshipRef, { amount: 0.5 });
  // Animation variants for letter reveal
  const letterReveal = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.05, type: "spring" },
    },
  };
  // Animation variants for scaling and fading in
  const featuredReveal = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 0.5 },
    },
  };

  return (
    <>
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
      <section className="w-full px-4 py-2 mt-12 mb-4">
        <div ref={characterRef}>
          <p className="sm:text-2xl text-[20px] text-white/80 font-medium">
            Featured
          </p>
          <div className="overflow-hidden">
            <motion.p
              className="font-medium lg:text-9xl md:text-8xl sm:text-6xl text-5xl origin-bottom-left"
              variants={featuredReveal}
              animate={isInView ? "visible" : "hidden"}
            >
              Character
            </motion.p>
          </div>
        </div>
        <div className="w-full border-y border-y-slate-400/30 py-1 flex justify-end items-end sm:gap-3 gap-1 mb-6">
          <p className="md:text-5xl sm:text-3xl text-2xl font-normal">Ashoka</p>
          <img
            src={ashoka}
            alt="ashoka"
            className="md:w-52 sm:w-44 w-36  md:h-64 sm:h-56 h-40 object-cover"
            width={208}
            height={256}
          />
        </div>
        <div ref={planetRef}>
          <p className="sm:text-2xl text-[20px] text-white/80 font-medium">
            Featured
          </p>
          <div className="overflow-hidden">
            <motion.p
              className="font-medium lg:text-9xl md:text-8xl sm:text-6xl text-5xl origin-bottom-left"
              variants={featuredReveal}
              animate={isInView2 ? "visible" : "hidden"}
            >
              Planet
            </motion.p>
          </div>
        </div>
        <div className="w-full border-y border-y-slate-400/30 py-1 flex justify-end items-end sm:gap-3 gap-1 mb-6">
          <p className="md:text-5xl sm:text-3xl text-2xl font-normal">
            Tatooine
          </p>
          <img
            src={tatooine}
            alt="ashoka"
            className="md:w-52 sm:w-44 w-36  md:h-64 sm:h-56 h-40 object-cover"
            width={208}
            height={256}
          />
        </div>
        <div ref={starshipRef}>
          <p className="sm:text-2xl text-[20px] text-white/80 font-medium">
            Featured
          </p>
          <div className="overflow-hidden">
            <motion.p
              className="font-medium lg:text-9xl md:text-8xl sm:text-6xl text-5xl origin-bottom-left"
              variants={featuredReveal}
              animate={isInView3 ? "visible" : "hidden"}
            >
              Spaceship
            </motion.p>
          </div>
        </div>
        <div className="w-full border-y border-y-slate-400/30 py-1 flex justify-end items-end sm:gap-3 gap-1 mb-6">
          <p className="md:text-5xl sm:text-3xl text-2xl font-normal">
            Star Destroyer
          </p>
          <img
            src={starDestroyer}
            alt="ashoka"
            className="md:w-52 w-44 md:h-64 h-56 md:object-contain object-cover"
            width={208}
            height={256}
          />
        </div>
      </section>
    </>
  );
}
