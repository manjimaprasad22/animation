import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Page = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.5", "start 0.25"],
  });

  const value =
    "5 to 6 hours. That's the average time you'll spend on your phone today- often without realizing. It's time to fight back.";
  const words = value.split(" ");

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      <div style={{ height: "30vh" }}></div>
      <div
        ref={element}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p className="para">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Page;

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="word">
      <motion.span
        style={{
          opacity,
          display: "inline-block",
          marginRight: "0.2em",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
