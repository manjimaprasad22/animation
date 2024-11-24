import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Page = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.7", "start 0.25"],
  });

  const value =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in sequi tempora vel iure minus impedit enim id, inventore voluptate eum! Enim optio culpa blanditiis dicta asperiores facere ipsam quas?";
  const words = value.split(" ");

  return (
    <div>
      <div style={{ height: "70vh" }}></div>
      <p className="para" ref={element}>
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
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Page;

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="word">
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
