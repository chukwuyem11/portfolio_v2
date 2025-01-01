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

import CategoryListComp from "../comps/popup/category_list";
import { handleClientScriptLoad } from "next/script";
import MusicListComp from "../../music_comps/music_list";
import MusicLoaderComp from "../comps/loaders/music_loader";
const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const DivardMusicPage = () => {
  const [selected, setSelected] = useState("all");
  const [show_category_popup, setshow_category_popup] = useState(false);

const handleShowCategory = (value) =>{
  setshow_category_popup(value)
}

  const router = useRouter();

  function parseDateTime(dateTimeStr) {
    const date = new Date(dateTimeStr);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const day = days[date.getDay()];

    // Add ordinal suffix for date
    const dateNum = date.getDate();
    const ordinalSuffix = (dateNum) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const value = dateNum % 100;
        return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
    };
    const formattedDate = `${day}, ${dateNum}${ordinalSuffix(dateNum)}`;

    // Convert to 12-hour format
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Converts 0 to 12
    const time = `${hours}${minutes ? `:${minutes < 10 ? '0' + minutes : minutes}` : ''}${ampm}`;
  
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return {
        dayAndDate: formattedDate,
        time: time,
        month: month,
        year: year
    };
}

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
    data: music,
    error: music_error,
    isLoading: music_isloading,
  } = useSWR(`${main_wp_url}/wp/v2/music`, fetcher);

  console.log(music);
  const categories = [
    {
      title: "all",
    },
  ];
  return (
    <div>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
      >
        <div>
          <div
            css={{
              // marginTop:16,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              css={{
                width: ["100%", "100%", "100%"],
                display: "flex",
                justifyContent: "center",
                border: "none",

                alignItems: "center",
              }}
            >
           <div
                          css={mq({
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 54,
                          
                          })}
                        >
                          <div css={{
                            display:"flex",
                            alignItems:"end"
                          }}>
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
                                marginTop: 24,
          
                                objectFit: "cover",
                                objectPosition: "center",
          
                                width: [30, 40, 40],
                                height: [30, 40, 40],
          
                                // transform: "scale(1.9)",
                              })}
                              src="/divard/divard_logo.png"
                            />
                            <motion.div  initial={{
                                opacity: 0,
                               
                              }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              whileHover={{
                               color:"#c4c4c4",
                                opacity:1,
                                transition:{
          duration:0.8
                                }
                              }}
                              transition={{
                                // ease: "easeInOut",
                                duration: 1,
                              }}  css={(theme) =>
                                        mq({
                                          width: "100%",
                                          fontSize: [20, 20, 24],
                                          fontWeight: 600,
                                      
                                          color: theme.colors.Neutral_800,
                                          marginLeft:4,
                                        })
                                      }>
                            ivard!
                            </motion.div>
                          </div>
          <div css={{
                                      display:"flex",
                                      alignItems:"center",
                                      marginTop:24,
                                      cursor: "pointer",
                                    }}
                                    onClick={() => router.push("/")}
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
                    
                                          width: [10, 20, 30],
                                          height: [10, 20, 30],
                    
                                          // transform: "scale(1.9)",
                                        })}
                                        src="/divard/svg/home/switch.svg"
                                      />
                    <div css={(theme) =>
                                        mq({
                                         
                                          fontSize: [20, 20, 24],
                                          fontWeight: 600,
                                      
                                          color: theme.colors.Neutral_800,
                                         
                                        })
                                      }
                                      
                                     
                                      
                                      >
                      Events
                    </div></div>
                        </div>
            </div>
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <div
              css={mq({
                width: "100%",
                display: "grid",
                marginBottom: 50,
                gridTemplateColumns: [
                  "repeat(1, 1fr)",
                  "repeat(2, 70% 30%)",
                  "repeat(2, 70% 30%)",
                ],
                width: ["90vw", "90vw", "90vw"],
                rowGap: [4, 20, 20],
                columnGap: [4, 20, 20],
                border: "none",
                borderBottom: ["1px solid #fafafa", "none", "none"],
                padding: ["0px 16px", 0, 0],
              })}
            >
              <div
                css={mq({
                  width: ["100%", "100%", "100%"],

                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.01)",
                  borderRadius: 20,
                  // padding: "30px 0px",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  height: "90vh",
                  "::-webkit-scrollbar": {
                    width: "12px", // Width of the scrollbar
                  },
                  "::-webkit-scrollbar-track": {
                    background: "#f1f1f1", // Background of the scrollbar track
                    borderRadius: "10px", // Rounded corners
                  },
                  "::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888", // Color of the scrollbar thumb
                    borderRadius: "10px", // Rounded corners
                    border: "3px solid #f1f1f1", // Adds padding around the thumb
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555", // Darker color when hovering
                  },
                  scrollbarColor: "#888 #f1f1f1", // For Firefox: thumb color, track color
                  scrollbarWidth: "thin", // For Firefox: makes the scrollbar thinner
                })}
              >
               

                <div>
                  <div
                    css={mq({
                      textAlign: "center",
                      fontSize: [20, 24, 30],
                      fontWeight: 700,
                      marginTop: 24,
                    })}
                  >
                    Explore Exciting Events!
                  </div>
                 <div>
                  <div>

  <div css={{
    padding:16
  }}>
    {music_isloading ?   <div>
                          <div
                            css={(theme) =>
                              mq({
                                display: "grid",
                                gridTemplateColumns: [
                                  "repeat(1, 1fr)",
                                  "repeat(1, 1fr)",
                                  "repeat(2, 1fr)",
                                ],
                                width: ["100%", "100%", "90%"],
                                padding: [0, "0px 16px", 0],
                                rowGap: [20, 20, 40],
                                columnGap: [20, 20, 40],
                                marginBottom: 100,
                              })
                            }
                          >
                            {loaders.map((loader, index) => (
                              <div key={index}>
                                <MusicLoaderComp />
                              </div>
                            ))}
                          </div>
                        </div> : <div
                          css={(theme) =>
                            mq({
                              display: "grid",
                              gridTemplateColumns: [
                                "repeat(1, 1fr)",
                                "repeat(1, 1fr)",
                                "repeat(2, 1fr)",
                              ],
                              width: ["100%", "100%", "90%"],
                              padding: [0, "0px 16px", 0],
                              rowGap: [20, 20, 20],
                              columnGap: [20, 20, 40],
                              marginBottom: 100,
                            })
                          }
                        >{music?.map((music_item) => (<div><MusicListComp
     featured_media={
      music_item?.better_featured_image?.media_details?.sizes
        .large.source_url
    }
    title={music_item?.acf.name}
    artists={music_item?.acf.artists}
    media_link={music_item?.acf.audio_file}
    /></div>))}</div>}
  </div>
</div>
                 </div>
                  {/* <div>
                    <div
                      css={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 34,
                      }}
                    >
                      {events_isloading ? (
                        <div>
                          <div
                            css={(theme) =>
                              mq({
                                display: "grid",
                                gridTemplateColumns: [
                                  "repeat(1, 1fr)",
                                  "repeat(1, 1fr)",
                                  "repeat(2, 1fr)",
                                ],
                                width: ["100%", "100%", "90%"],
                                padding: [0, "0px 16px", 0],
                                rowGap: [20, 20, 40],
                                columnGap: [20, 20, 40],
                                marginBottom: 100,
                              })
                            }
                          >
                            {loaders.map((loader, index) => (
                              <div key={index}>
                                <PostLoaderComp />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div
                          css={(theme) =>
                            mq({
                              display: "grid",
                              gridTemplateColumns: [
                                "repeat(1, 1fr)",
                                "repeat(1, 1fr)",
                                "repeat(2, 1fr)",
                              ],
                              width: ["100%", "100%", "90%"],
                              padding: [0, "0px 16px", 0],
                              rowGap: [20, 20, 40],
                              columnGap: [20, 20, 40],
                              marginBottom: 100,
                            })
                          }
                        >
                          {events?.filter(event => event?.acf.is_private === false)?.map((work, index) => (
                            <div key={index}>
                              <EventComp
                                featured_media={
                                  work.better_featured_image.media_details.sizes
                                    .large.source_url
                                }
                                eventpagefct={() => router.push(`/event/${work.id}`)}
                                media_id={work.featured_media}
                                title={work.title.rendered}
                                content={work.content.rendered}
                                date={parseDateTime(work?.acf.date_time).dayAndDate}
                                month={parseDateTime(work?.acf.date_time).month}
                                year={parseDateTime(work?.acf.date_time).year}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                css={mq({
                  width: ["100%", "100%", "100%"],
display:["none", "block", "block"],
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.01)",
                  borderRadius: 20,
                  // padding: "30px 0px",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  height: "90vh",
                  "::-webkit-scrollbar": {
                    width: "12px", // Width of the scrollbar
                  },
                  "::-webkit-scrollbar-track": {
                    background: "#f1f1f1", // Background of the scrollbar track
                    borderRadius: "10px", // Rounded corners
                  },
                  "::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888", // Color of the scrollbar thumb
                    borderRadius: "10px", // Rounded corners
                    border: "3px solid #f1f1f1", // Adds padding around the thumb
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555", // Darker color when hovering
                  },
                  scrollbarColor: "#888 #f1f1f1", // For Firefox: thumb color, track color
                  scrollbarWidth: "thin", // For Firefox: makes the scrollbar thinner
                })}
              >
               <CategoryListComp />
              </div>
            </div>
          </div>
        </div>
        
      </div>




      <div
        css={mq({
          display: ["block", "none", "none"],
        })}
      >
        <div
          css={{
            position: "fixed",
            bottom: 20,
            right: 60,
          }}
        >
          <div
            css={{
              width: 50,
              height: 50,
              backgroundColor: "#fff",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.04)",
            }}
            onClick={() => handleShowCategory(true)}
          >
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                // ease: "easeInOut",
                duration: 0.6,
              }}
              css={mq({
                objectFit: "cover",
                objectPosition: "center",

                width: [24, 40, 40],
                height: [24, 40, 40],

                // transform: "scale(1.9)",
              })}
              src="/divard/svg/home/menu_icon.svg"
            />
          </div>
        </div>
      </div>



      <AnimatePresence initial={false}>
        {show_category_popup && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.2,
              }}
              css={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                // zIndex: 2,
                zIndex: 3,
                backgroundColor: "rgb(0,0,0,0.1)",
                right: 0,
                top: 0,
                opacity: 0,
              }}
              onClick={() => handleShowCategory(false)}
            >
              {" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 100 }}
              exit={{ opacity: 0, y: 800 }}
              transition={{
                ease: "easeInOut",
                duration: 0.2,
              }}
              id="location"
              css={(theme) => ({
                position: "fixed",
                bottom: 0,
                width: "100vw",
                height: "auto",
                overflow: "hidden",
                zIndex: 5,
                borderRadius: 20,
                backgroundColor: "#fff",
              })}
            >
              <div
                css={mq({
                  width: ["100%", "100%", "100%"],
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.01)",
                  borderRadius: 20,
                  // padding: "30px 0px",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  height: "90vh",
                  "::-webkit-scrollbar": {
                    width: "12px", // Width of the scrollbar
                  },
                  "::-webkit-scrollbar-track": {
                    background: "#f1f1f1", // Background of the scrollbar track
                    borderRadius: "10px", // Rounded corners
                  },
                  "::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888", // Color of the scrollbar thumb
                    borderRadius: "10px", // Rounded corners
                    border: "3px solid #f1f1f1", // Adds padding around the thumb
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555", // Darker color when hovering
                  },
                  scrollbarColor: "#888 #f1f1f1", // For Firefox: thumb color, track color
                  scrollbarWidth: "thin", // For Firefox: makes the scrollbar thinner
                })}
              >
               <CategoryListComp />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DivardMusicPage;
