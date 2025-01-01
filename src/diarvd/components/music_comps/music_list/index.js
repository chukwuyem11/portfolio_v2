/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState, useContext, useRef } from "react";
import useSWR, { useSWRConfig, mutate } from "swr";
import axios from "axios";
import { main_wp_url } from "@/src/details";
import MusicAudioPlayer from "../music_player";
const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const MusicListComp = (props) => {

   
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
                              // marginBottom: 100,
                            })
                          }>
        <div>
                              
                                <motion.div
                                
                                  
                                >
                                  <motion.img
                                    initial={{
                                      opacity: 0,
                                      scale: 0.99,
                                      borderRadius: 10,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      scale: 0.99,
                                    
                                    }}
                                    exit={{ opacity: 0, scale: 0.99 }}
                                    whileHover={{
                                    
                                      // scale: 1.01,
                                      borderRadius: 14,
                                    
                                    }}
                                    css={mq({
                                      width: [80,80,80],
                                      height:[80,80,80],
                                      borderRadius: 10,
                                      objectFit:"cover",
                                      objectPosition:"center center"
                                    })}
                                    src={`${props.featured_media}`}
                                  />
                                </motion.div>
                            
                            </div>

                            <div css={{
                              // display:"flex",
                              // justifyContent:"center"
                            }}>
        <div>
          <div css={{
            display:"flex",
            justifyContent:"space-between"
          }}>
            <div css={{
                                        display:"flex",
                                        alignItems:"center",
                                        // marginBottom:-4,
                                        cursor: "pointer",
                                      }}
                             
                                      >
                                        <motion.img
                                          initial={{
                                            opacity: 0,
                                            scale: 1,
                                          }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          whileHover={{
                                            scale: 0.9,
                                          }}
                                          transition={{
                                            // ease: "easeInOut",
                                            duration: 0.6,
                                          }}
                                          css={mq({
                                            // marginTop: 30,
                      
                                            objectFit: "cover",
                                            objectPosition: "center",
                      
                                            width:20,
                                                      height: 20,
                                            // transform: "scale(1.9)",
                                          })}
                                          src="/divard/svg/music/artist.svg"
                                        />
             <div   css={(theme) => ({
    
                              fontSize: 18,
                                  fontWeight: 600,
                                  textTransform: "capitalize",
                                  color: theme.colors.Neutral_700,
                             
                            })}>{props.artists}</div></div>
  <div   css={(theme) => ({
    marginBottom:4,
                              fontSize: 18,
                                  fontWeight: 600,
                                  textTransform: "capitalize",
                                  color: theme.colors.Neutral_800,
                             
                            })}>{props.title}</div>
                           

</div>
                            <div >
 
 
<MusicAudioPlayer media_link={props.media_link} />
 </div>
  {/* <a href={props.media_link}> Download audio </a> */}
</div></div></div>
    </div>
  );
};

export default MusicListComp;
