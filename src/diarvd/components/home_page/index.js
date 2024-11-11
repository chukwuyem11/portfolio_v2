/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  color,
} from "framer-motion";
import React, { useState, useContext } from "react";
import SkillComp from "./comps/skill_comp";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR, { useSWRConfig, mutate } from "swr";
import { main_wp_url } from "@/src/details";
import EventComp from "./comps/event_comp";
const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const DivardHomePage = () => {
  const [selected, setSelected] = useState("all");
  const router = useRouter();
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

      console.log(events)
  

      const {
        data: category,
    error: category_error,
        isLoading: category_isloading,
      } = useSWR(`${main_wp_url}/wp/v2/categories`, fetcher);

      console.log(category)

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
        <div  css={{
        // marginTop:16,
        display: "flex",
        justifyContent: "center",
       
      }}>
        <div css={{
              width: ["100%", "90%", "90%"],
          display:"flex",
          justifyContent:"center",
          border:"none",
         
         
          alignItems:"center"
         }}>


         <div
            css={{
            width:"100%",
              display: "flex",
              alignItems:"center",
              justifyContent: "center",
              marginTop:54
            }}
          >
            <div>
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
                // marginTop: 24,
               
                objectFit: "cover",
                objectPosition: "center",
             
                width: [30, 40, 40],
                height: [30, 40, 40],
               
                // transform: "scale(1.9)",
              })}
              src="/divard/divard_logo.png"
            /></div>
           
              {/* <div>
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
                marginTop: 40,
               
                objectFit: "cover",
                objectPosition: "center",
             
                width: [20, 40, 40],
                height: [20, 40, 40],
               
                // transform: "scale(1.9)",
              })}
              src="/divard/svg/home/menu_icon.svg"
            />
            </div> */}
          </div>
         </div>
</div>
         <div  css={{
        
        display: "flex",
        justifyContent: "center",
       marginTop:16
      }}>
        <div
          css={mq({
            width: ["90vw", "70vw", "70vw"],
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
          {/* <div
            css={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              css={mq({
                marginTop: 40,
                width: ["100%", "100%", "80%"],
                padding: ["0px 16px", "0px 16px", 0],
                display: "flex",
                justifyContent: "space-between",
              })}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                css={mq({
                  fontSize: [20, 20, 32],
                  fontWeight: 800,
                  textAlign: "center",
                  fontFamily: "Pacifico",
                })}
              >
                Eboigbodin
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                css={mq({
                  fontSize: [20, 20, 32],
                  fontWeight: 800,
                  textAlign: "center",
                  fontFamily: "Pacifico",
                })}
              >
                Chukwuyem
              
              </motion.div>
            </div>
          </div> */}
          
        
        
          <div>
          <div
              css={mq({
                textAlign: "center",
                fontSize: [20, 24, 30],
                fontWeight: 700,
                marginTop: 34,
               
              })}
            >
             Explore Exciting Events!

            </div>
             
            {category_isloading ? "loading..." :  <div
              css={{
                display: "flex",
                justifyContent: "center",
                margin: "40px 0px",
              }}
            >
             
              <div
                css={mq({
                  width: ["100%", "100%", "70%"],
                  display: "flex",
                  padding: ["0px 16px", "0px 16px", 0],
                  alignItems: "center",
                  justifyContent: "space-around",
                })}
              >
                {categories.map((category_item) => (
                  <div
                    css={mq({
                      fontSize: [16, 16, 18],
                      fontWeight: 500,
                      textTransform: "capitalize",
                      color:
                        selected === category_item.title ? "#111" : "#c4c4c4",
                        backgroundColor:  selected === category_item.title ?   "#fff" : "transparent",
        borderRadius:30,
       
        boxShadow:  selected === category_item.title ? "4px 4px 5px 0px rgba(0,0,0,0.04)" : "none",
        padding:"4px 8px",
                      cursor: "pointer",
                    })}
                    onClick={() => {
                      setSelected(category_item.title);
                    }}
                  >
                    {category_item.title}
                  </div>
                ))}
 {category.map((category_item) => (
                  <div
                    css={mq({
                      fontSize: [16, 16, 18],
                      fontWeight: 500,
                      textTransform: "capitalize",
                      color:
                        selected === category_item.name ? "#111" : "#c4c4c4",
                        backgroundColor:  selected === category_item.name ?   "#fff" : "transparent",
        borderRadius:30,
       
        boxShadow:  selected === category_item.name ? "4px 4px 5px 0px rgba(0,0,0,0.04)" : "none",
        padding:"4px 8px",
        display: category_item.name === "Uncategorized" ? "none" : "block",
                       cursor: "pointer",
                    })}
                    onClick={() => {
                      setSelected(category_item.name);
                    }}
                  >
                    {category_item.name}
                  </div>
                ))}
                <div>
                <div css={{
        width:30,
        height:30,
        backgroundColor:"#fff",
        borderRadius:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:"4px 4px 5px 0px rgba(0,0,0,0.04)"
      }}>
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
             
                width: [18, 20, 20],
                height: [18, 20, 20],
               
                // transform: "scale(1.9)",
              })}
              src="/divard/svg/home/menu_icon.svg"
            /></div>
                </div>
                
              </div>
            </div>}
           
            <div
             
            >
              <div
               css={{
                display: "flex",
                justifyContent: "center",
                marginTop:64
              }}
              >
                {events_isloading ? "loading" : <div   css={(theme) =>
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
                }>
                {events?.map((work, index) => (
                    <div key={index}>
                      <EventComp featured_media={work.better_featured_image.media_details.sizes.large.source_url
} media_id={work.featured_media} title={ work.title.rendered} content={work.content.rendered} />
                      </div>
                  ))}</div>}
                
              </div>
            </div>{" "}
          </div>
         
        </div></div></div>
      </div>
      <div css={mq({
        display:["block","none", "none"]
      })}>
      <div css={{
        position:"fixed",
        bottom:20,
        right:60,
        
      }}>
      <div css={{
        width:50,
        height:50,
        backgroundColor:"#fff",
        borderRadius:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:"4px 4px 5px 0px rgba(0,0,0,0.04)"
      }}>
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
            /></div>
      </div></div>
    </div>
  );
};

export default DivardHomePage;
