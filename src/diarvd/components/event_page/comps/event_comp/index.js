/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState, useContext } from "react";
import useSWR, { useSWRConfig, mutate } from "swr";
import axios from "axios";
import { main_wp_url } from "@/src/details";

const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const EventPageComp = (props) => {
  const [ishovered, setIshovered] = useState(false);
    const [show_bank_popup, setshow_bank_popup] = useState(false);
  
  const handleShowBank = (value) =>{
    setshow_bank_popup(value)
  }
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
                                width: [280,380,400],
                                height:[240,300,300],
                                borderRadius: 10,
                                objectFit:"cover",
                                objectPosition:"center center"
                              })}
                              src={`${props.featured_media}`}
                            />
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
                              width:"70%"
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
                          {props.external_link ?  <a  href={props.link} target="_blank">
                        <motion.button
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
                // onClick={() => props.eventpagefct()}
              >Get ticket
              </motion.button></a> : 
              <motion.button
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
                onClick={() => handleShowBank(true)}
              >Get ticket
              </motion.button>}
                       

                        </div>
                      </div>
                    </div>



                    <AnimatePresence initial={false}>
        {show_bank_popup && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.4,
              }}
              css={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                // zIndex: 2,
                zIndex: 3,
                backgroundColor: "rgb(0,0,0,0.5)",
                right: 0,
                top: 0,
                opacity: 0,
              }} 
              onClick={() => handleShowBank(false)}
            >
              {" "}
            </motion.div>
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.4,
              }}
              id="location"
              css={(theme) => ({
                position: "fixed",
left:0,
                bottom: 30,
                width: "100vw",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9,
              })}
            >
              {/* <CreateRiderAccount close={() => router.back()} /> */}
              <div
                css={(theme) => ({
                  height: 200,
                  borderRadius: 10,
                  width: "80%",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  //                 display:"flex",
                  // justifyContent:"center",
                  // alignItems:"center",
                  padding:16,
                })}
              >
                <div>
                  <div css={(theme) => ({
                                  fontSize: 16,
                                      fontWeight: 400,
                                      textTransform: "capitalize",
                                      color: theme.colors.Neutral_700,
                                textAlign:"center"
                                })}>Bank name</div>
                  <div css={{
                    marginTop:4,
                    textAlign:"center"
                  }}>{props.bank_name}</div>
                  <div css={(theme) => ({
                                  fontSize: 16,
                                      fontWeight: 400,
                                      textTransform: "capitalize",
                                      color: theme.colors.Neutral_700,
                                marginTop:10,
                                textAlign:"center"
                                })}>Bank number</div>
                  <div css={{
                    marginTop:4,
                    textAlign:"center"
                  }}>{props.bank_number}</div>


<div css={{
  display:"flex",
  justifyContent:"center"
}}>
  <a  href={props.confirm_payment} target="_blank">
<motion.button
                whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                css={mq({
                  height: [30, 30, 34],
                  width:200,
                  background: "#f4f4f4",
                  borderRadius: 8,
                  border:"none",
                  textDecoration:"none",
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
                  marginTop:30
                })}
                // onClick={() => handleShowBank(true)}
              >Confirm Transfer
              </motion.button></a></div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventPageComp;
