/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState, useContext } from "react";
const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const SkillComp = (props) => {
  const [ishovered, setIshovered] = useState(false);

  return (
    <div>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          whileHover={{
            backgroundColor: "#eee",
          }}
          onMouseOver={() => setIshovered(true)}
          onMouseLeave={() => setIshovered(false)}
          css={mq({
            width: [40, 40, 80],
            height: [40, 40, 80],
            margin: 16,
            background: "#fff",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #f4f4f4",
            //   margin: "0px 4px",
          })}
          key={props.logo}
        >
          <AnimatePresence initial={false}>
            {ishovered ? (
              <motion.img
                initial={{ opacity: 0, filter: ["blur(0.4px)", "none"] }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: ["blur(0.4px)"] }}
                transition={{
                  // ease: "easeInOut",
                  duration: 0.6,
                }}
                css={mq({
                  width: [24, 24, 40],
                  height: [24, 24, 40],
                })}
                src={`home/skill/${props.active_color}`}
              />
            ) : (
              <motion.img
                initial={{ opacity: 0, filter: ["blur(0.4px)", "none"] }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: ["blur(0.4px)"] }}
                transition={{
                  // ease: "easeInOut",
                  duration: 0.6,
                }}
                css={mq({
                  width: [24, 24, 40],
                  height: [24, 24, 40],
                })}
                src={`home/skill/${props.logo}`}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div
        css={{
          textAlign: "center",
          fontSize: 16,
        }}
      >
        {props.text}
      </div>
    </div>
  );
};

export default SkillComp;
