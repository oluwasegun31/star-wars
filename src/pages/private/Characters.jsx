import { motion } from "framer-motion";
import UseFetchFirestore from "../../hooks/UseFetchFirestore";
import { DataCard, DataCardLoader } from "../../components";
import { Suspense } from "react";
import { letterReveal2 } from "../../Animation/Animation";

export default function Characters() {
  // Fetch characters data from Firestore using the custom hook
  const { dataArr: characters, isLoading } = UseFetchFirestore("characters");

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-start gap-6 mt-6 px-4">
      <div className="overflow-hidden">
        <motion.h5
          className="md:text-6xl text-4xl font-medium w-fit"
          variants={letterReveal2}
          initial="hidden"
          animate="visible"
        >
          {"Characters".split("").map((letters, i) => {
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
            characters.map((character) => {
              return <DataCard data={character} key={character.id} />;
            })
          )}
        </Suspense>
      </section>
    </section>
  );
}
