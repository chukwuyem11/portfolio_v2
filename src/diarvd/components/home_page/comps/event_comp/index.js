/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState, useContext } from "react";
import useSWR, { useSWRConfig, mutate } from "swr";
import axios from "axios";
import { main_wp_url } from "@/src/details";

const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const EventComp = (props) => {
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
                                borderRadius: 20,
                              
                              }}
                              css={mq({
                                width: [280,340,340],
                                height:[240,300,300],
                                borderRadius: 10,
                                objectFit:"cover",
                                objectPosition:"center center"
                              })}
                              src={`${props.featured_media}`}
                            />
                          </motion.div>
                      <div>
                      <div
                            css={(theme) =>
                              mq({
                                width: "100%",
                                fontSize: [14, 14, 14],
                                fontWeight: 400,
                                marginTop: [0, 0, 0],
                                color: theme.colors.Neutral_600,
                              })
                            }
                            // dangerouslySetInnerHTML={{__html: work.title.rendered}}
                          
                          >
                         {props.date} {props.month} {props.year}
                          </div>
                          
                      </div>
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
                                width: "100%",
                                fontSize: [20, 20, 24],
                                fontWeight: 600,
                                marginTop: [10, 10, 0],
                                color: theme.colors.Neutral_800,
                              })
                            }
                            // dangerouslySetInnerHTML={{__html: work.title.rendered}}
                            dangerouslySetInnerHTML={{__html: props.title}}
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
                              fontSize: 16,
                                  fontWeight: 400,
                                  // textTransform: "capitalize",
                                  color: theme.colors.Neutral_700,
                              marginTop: 10,
                              width:"90%"
                            })}
                            // dangerouslySetInnerHTML={{__html: work.content.rendered}}
                            dangerouslySetInnerHTML={{__html: props.content}}

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

                        <div>
                        <motion.div
                whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                css={mq({
                  height: [30, 30, 34],
                  width:100,
                  background: "#f4f4f4",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px 4px",
                  textTransform: "capitalize",
                  padding: "0px 8px",
                  fontSize: [14, 14, 16],
                  fontWeight: 500,
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#000",
                  marginBottom:16
                })}
                onClick={() => props.eventpagefct()}
              >Read More.
              </motion.div>
                        </div>
                      </div>
                    </div>
    </div>
  );
};

export default EventComp;
