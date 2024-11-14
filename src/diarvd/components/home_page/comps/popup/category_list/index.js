/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  color,
} from "framer-motion";
import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR, { useSWRConfig, mutate } from "swr";
import { main_wp_url } from "@/src/details";

import CategoryLoaderComp from "../../loaders/category_loader";

const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const CategoryListComp = () => {
  const [selected, setSelected] = useState("all");
  const router = useRouter();

  const loaders = ["", "", "", "", ""];
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

  const {
    data: events,
    error: event_error,
    isValidating,
    isLoading: events_isloading,
  } = useSWR(`${main_wp_url}/wp/v2/event`, fetcher);

  console.log(events);

  const {
    data: category,
    error: category_error,
    isLoading: category_isloading,
  } = useSWR(`${main_wp_url}/wp/v2/categories`, fetcher);

  console.log(category);

  const categories = [
    {
      title: "all",
    },
  ];
  return (
    <div>
      <div>
                  {category_isloading ? (
                    <div
                      css={{
                        margin: "40px 0px",
                      }}
                    >
                      <div
                        css={{
                        
                          // justifyContent:"space-between"
                        }}
                      >
                        {loaders.map((loader, index) => (
                          <div key={index}>
                               <div  key={index} css={{
                              display:"flex",
                              justifyContent:"center",
                              borderBottom:"1px solid #fafafa",
                              padding:"12px 0px",
                              cursor: "pointer",
                            }}>
                            <CategoryLoaderComp /></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div
                      css={{
                        margin: "40px 0px",
                      }}
                    >
                      <div
                        css={mq({
                          

                        
                        })}
                      >
                        {categories.map((category_item, index) => (
                            <div  key={index} css={{
                              display:"flex",
                              justifyContent:"center",
                              borderBottom:"1px solid #fafafa",
                              padding:"12px 0px",
                              cursor: "pointer",
                            }}>
                          <div
                          
                            css={{
                              width:"90%",
                              display: "flex",
                              justifyContent: "space-between",
                  alignItems:"center",
                             
                            }}
                            onClick={() => {
                              setSelected(category_item.title);
                            }}
                          >
                            <div
                              css={mq({
                                fontSize: [16, 16, 18],
                                fontWeight: 500,
                                textTransform: "capitalize",
                                color:
                                  selected === category_item.title
                                    ? "#111"
                                    : "#c4c4c4",
                                backgroundColor:
                                  selected === category_item.title
                                    ? "#fff"
                                    : "transparent",
                                borderRadius: 30,

                               
                               
                              
                              })}
                           
                            >
                              {category_item.title}
                            </div>{" "}
                            <div>
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
                               

                                  objectFit: "cover",
                                  objectPosition: "center",

                                  width: [20, 20, 20],
                                  height: [20, 20, 20],

                                  // transform: "scale(1.9)",
                                })}
                                src={`/divard/svg/home/category/${
                                  selected === category_item.title
                                    ? "checked_input.svg"
                                    : "unchecked_input.svg"
                                }`}
                              />
                            </div>
                          </div></div>
                        ))}
                        {category?.map((category_item, index) => (
                          <div  key={index} css={{
                            display:
                            category_item.name === "Uncategorized"
                              ? "none"
                              : "flex",
                            justifyContent:"center",
                            borderBottom:"1px solid #fafafa",
                            padding:"12px 0px",
                            cursor: "pointer",

                          }}>
                          <div
                         
                          css={mq({
                            width:"90%",
                            justifyContent: "space-between",
                          alignItems:"center",
                          
                            display:
                            category_item.name === "Uncategorized"
                              ? "none"
                              : "flex",
                          })}
                          onClick={() => {
                            setSelected(category_item.name);
                          }}
                        >
                          <div
                            css={mq({
                              fontSize: [16, 16, 18],
                              fontWeight: 500,
                              textTransform: "capitalize",
                              color:
                                selected === category_item.name
                                  ? "#111"
                                  : "#c4c4c4",
                              backgroundColor:
                                selected === category_item.name
                                  ? "#fff"
                                  : "transparent",
                              borderRadius: 30,
                              
                           
                             
                            
                              cursor: "pointer",
                            })}
                           
                          >
                            {category_item.name}
                          </div>
                          <div>
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
                              
                                  objectFit: "cover",
                                  objectPosition: "center",

                                  width: [20, 20, 20],
                                  height: [20, 20, 20],

                                  // transform: "scale(1.9)",
                                })}
                                src={`/divard/svg/home/category/${
                                  selected === category_item.name
                                    ? "checked_input.svg"
                                    : "unchecked_input.svg"
                                }`}
                              />
                            </div></div></div>
                        ))}
                        
                      </div>
                    </div>
                  )}
                </div>
    </div>
  );
};

export default CategoryListComp;
