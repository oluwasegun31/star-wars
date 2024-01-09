import UseFetchFirestore from "../../hooks/UseFetchFirestore";
import { motion } from "framer-motion";
import { DataCard, DataCardLoader } from "../../components";
import { Suspense } from "react";
import { letterReveal2 } from "../../Animation/Animation";

export default function Starships() {
  // Fetch characters data from Firestore using the custom hook
  const { dataArr: starships, isLoading } = UseFetchFirestore("starships");

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-start gap-6 mt-6 px-4">
      <div className="overflow-hidden">
        <motion.h5
          className="md:text-6xl text-4xl font-medium w-fit"
          variants={letterReveal2}
          initial="hidden"
          animate="visible"
        >
          {"starships".split("").map((letters, i) => {
            return (
              <motion.span key={i} variants={letterReveal2}>
                {letters}
              </motion.span>
            );
          })}
        </motion.h5>
      </div>
      <section className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-6 gap-y-10 gap-x-4 mx-auto xl:max-w-6xl md:max-w-5xl mt-12">
        <Suspense fallback={<DataCardLoader />}>
          {isLoading ? (
            <DataCardLoader />
          ) : (
            starships.map((starship) => {
              return <DataCard data={starship} key={starship.id} />;
            })
          )}
        </Suspense>
      </section>
    </section>
  );
}
