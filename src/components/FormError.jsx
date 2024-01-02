import { motion } from "framer-motion";
// Form error component
export default function FormError({ isError }) {
  return (
    <motion.section
      initial={{ scale: 0, opacity: 0.3 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
      className="fixed top-14 right-10 bg-white max-w-[360px] p-2 rounded-md text-red-700 font-medium text-[20px] leading-none origin-top-right"
    >
      {isError}
    </motion.section>
  );
}
