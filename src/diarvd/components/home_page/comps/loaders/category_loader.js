/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState, useContext } from "react";
import useSWR, { useSWRConfig, mutate } from "swr";
import axios from "axios";
import { main_wp_url } from "@/src/details";

const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const CategoryLoaderComp = () => {
  const [ishovered, setIshovered] = useState(false);
  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
      
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        console.error("Error:", error);
      });


   
  return (
    <div>
         <motion.div
         
                            initial={{  backgroundColor:"#fafafa" }}
                            animate={{ backgroundColor:["#fafafa", "#c4c4c4"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            css={(theme) =>
                              mq({
                                height:30,
                                borderRadius:30,
                                     marginTop: 10,
                                     width:200,
                                     backgroundColor:"#fafafa"

                              })
                            }
                            // dangerouslySetInnerHTML={{__html: work.title.rendered}}
                           
                          >
                           
                          </motion.div>
    </div>
  );
};

export default CategoryLoaderComp;
