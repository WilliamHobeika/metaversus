"use client";

//importing animations library
import { motion } from "framer-motion";

//importing components
import { TypingText, TitleText } from "../components";

//importing styles
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People On The World" textStyles="text-center" />
      <TitleText
        title={
          <>Track Friends Around You And Invite Them To Play Together In The Same World</>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h0[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        {/* <div className="absolute top-1/2 left-[280px] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="maskGroup-01.png" alt="maskGroup" className="w-full h-full" />
        </div>
        <div className="absolute top-[100px] left-[880px] w-[180px] h-[136px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="maskGroup-02.png" alt="maskGroup" className="w-full h-full" />
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
