"use client";

import { useState } from "react";

//importing animations library
import { motion } from "framer-motion";

//importing components
import { TypingText, ExploreCard, TitleText } from "../components";

//importing styles
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

//the data of this section: names and images of the metaverse worlds
import { exploreWorlds } from "../constants";

const Explore = () => {
  //active world constant
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose The World You Want
              <br className="md:block hidden" />
              To Explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;