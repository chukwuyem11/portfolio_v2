/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState, useContext } from "react";
import useSWR, { useSWRConfig, mutate } from "swr";
import axios from "axios";
import { main_wp_url } from "@/src/details";

const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const PostLoaderComp = () => {
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
        <div
                      css={mq({
                        width: "100%",
                        display: "grid",
                        marginBottom: 50,
                        gridTemplateColumns: [
                          "repeat(1, 1fr)",
                          "repeat(1, 1fr)",
                          "repeat(1, 1fr)",
                        ],
                        width: ["100%", "100%", "100%"],

                        rowGap: [4, 20, 20],
                        columnGap: [4, 20, 20],
                        border:"none",
                        borderBottom:["1px solid #fafafa", "none", "none"],
                          padding: ["0px 16px", 0, 0],
                      })}
                     
                    >
                      <div>
                        
                          <motion.div
                          
                          css={mq({
                            width: [280,340,340],
                            height:[240,300,300],
                            borderRadius: 10,
                             backgroundColor:"#fafafa"
                          })}
                          >
                          
                          </motion.div>
                      
                      </div>

                      <div>
                        <div
                        // css={{
                        //   display: "flex",
                        //   justifyContent: "left",
                        // }}
                        >
                          <div
                            css={(theme) =>
                              mq({
                                height:30,
                                borderRadius:30,
                                     marginTop: 10,
                                     width:"90%",
                                     backgroundColor:"#fafafa"

                              })
                            }
                            // dangerouslySetInnerHTML={{__html: work.title.rendered}}
                           
                          >
                           
                          </div>
                          {/* <div
                            css={{
                              marginTop: 8,
                            }}
                          >
                            <a href={work.url} target="_blank">
                              <img
                                css={{
                                  width: 24,
                                  height: 24,
                                }}
                                src={`/svg/link.svg`}
                              />
                            </a>
                          </div> */}
                        </div>
                        <div>
                          <div
                            css={(theme) => ({
                                height:30,
                                borderRadius:30,
                                     marginTop: 10,
                                     width:"90%",
                                     backgroundColor:"#fafafa"
                            })}
                            // dangerouslySetInnerHTML={{__html: work.content.rendered}}
                           

                          >
                           
                          </div>
                         
                        </div>
                      

                        <div
                          css={mq({
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "left",
                            marginTop: [10, 10, 10],
                          })}
                        >
                          {/* {work.tools.map((tool) => (
                            <motion.div
                              whileHover={{
                                backgroundColor: "#000",
                                color: "#fff",
                              }}
                              transition={{
                                ease: "easeInOut",
                                duration: 0.2,
                              }}
                              css={{
                                marginRight: 10,
                                padding: "2px 8px",
                                fontWeight: 400,
                                fontSize: 16,
                                borderRadius: 14,
                                backgroundColor: "#f4f4f4",
                                marginBottom: 10,
                              }}
                            >
                              #{tool.title}
                            </motion.div>
                          ))} */}
                        </div>
                      </div>
                    </div>
    </div>
  );
};

export default PostLoaderComp;
