/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState, useContext } from "react";
import useSWR, { useSWRConfig, mutate } from "swr";
import axios from "axios";
import { main_wp_url } from "@/src/details";

const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const MusicLoaderComp = () => {
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
        <div  css={(theme) =>
                            mq({
                              display: "grid",
                              gridTemplateColumns: [
                                "repeat(2, 20% 80%)",
                                "repeat(2, 20% 80%)",
                                "repeat(2, 20% 80%)",
                              ],
                              width: ["100%", "100%", "90%"],
                              padding: [0, "0px 16px", 0],
                              rowGap: [20, 20, 40],
                              columnGap: [20, 20, 40],
                              alignItems:"end"
                              // marginBottom: 100,
                            })
                          }>
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
             height:80,
             borderRadius:30,
                  marginTop: 10,
                  width:80,
                  backgroundColor:"#fafafa"

           })
         }
         // dangerouslySetInnerHTML={{__html: work.title.rendered}}
        
       >
        
       </motion.div>
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
                                     width:"100%",
                                     backgroundColor:"#fafafa"

                              })
                            }
                            // dangerouslySetInnerHTML={{__html: work.title.rendered}}
                           
                          >
                           
                          </motion.div></div>
    </div>
  );
};

export default MusicLoaderComp;
