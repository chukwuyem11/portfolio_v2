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
import EventPageComp from "./comps/event_comp";
import PostLoaderComp from "../home_page/comps/loaders/post_loader";
import CategoryLoaderComp from "../home_page/comps/loaders/category_loader";
const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const DivardEventPage = () => {
  const [selected, setSelected] = useState("all");
  const [show_category_popup, setshow_category_popup] = useState(false);

const handleShowCategory = (value) =>{
  setshow_category_popup(value)
}

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
  } = useSWR(`${main_wp_url}/wp/v2/event/${router.query.id}`, fetcher);

  console.log(events);


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
                  justifyContent: ["center","left","left"],
                  marginTop: 54,
                })}
              >
                <div css={{
                  display:"flex",
                  alignItems:"end"
                }}
                onClick={() => {
                    router.push("/")
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
                      marginTop: 24,

                      objectFit: "cover",
                      objectPosition: "center",

                      width: [30, 40, 40],
                      height: [30, 40, 40],
cursor:"pointer"
                      // transform: "scale(1.9)",
                    })}
                    src="/divard/svg/event/back_arrow.svg"
                  />
                 
                </div>

          
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
               

                <div css={{
                    padding:16
                }}>
                
                 
                  <div>
                    <div
                      css={{
                        display: "flex",
                        justifyContent: "center",
                        // marginTop: 34,
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
                            
                              <div >
                                <PostLoaderComp />
                              </div>
                          
                          </div>
                        </div>
                      ) : (
                        <div
                         
                        >
                        
                            <div >
                              <EventPageComp
                                featured_media={
                                    events?.better_featured_image.media_details.sizes
                                    .large.source_url
                                }
                                media_id={events?.featured_media}
                                title={events?.title.rendered}
                                content={events?.content.rendered}
                                link={events?.acf.ticket_link}
                              />
                            </div>
                            <div css={mq({
                                display:["block", "none", "none"]
                            })}>

<div
                    css={mq({
                    //   textAlign: "center",
                      fontSize: [20, 24, 30],
                      fontWeight: 700,
                     
                    })}
                  >
                    More details.
                  </div>
                            <div css={{
             
               }}>
                
                
                <div css={{
                padding:"10px 0px",
               
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
              
              })}>Date & Time</div>
              <div>{parseDateTime(events?.acf.date_time).day}, {parseDateTime(events?.acf.date_time).time}, {parseDateTime(events?.acf.date_time).month}, {parseDateTime(events?.acf.date_time).year}</div>
              </div>
              <div css={{
                padding:"10px 0px",
               
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
              
              })}>Location</div><div>{events?.acf.location}</div></div>
                <div css={{
                padding:"10px 0px",
               
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
              
              })}>Phone number</div><div>{events?.acf.phone_number}</div></div>
               <div css={{
                  padding:"10px 0px",
              
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
                
              })}>Organiser</div><div>{events?.acf.publisher}</div></div>
               <div css={{
                 padding:"10px 0px",
                
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
               
              })}>Email</div><div>{events?.acf.email}</div></div>
              </div>
                                </div>
                         
                        </div>
                      )}
                    </div>
                  </div>{" "}
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
               {events_isloading ? <div>

{loaders.map((item, index) => (<div key={index}>
    <div css={{
        display:"flex",
        justifyContent:"center",
        padding:"12px 0px"
    }}>
    <CategoryLoaderComp /></div>
</div>))}

               </div> :
               
               <div css={{
               marginTop:6
               }}>
                
                
                <div css={{
                padding:"10px 16px",
               
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
              
              })}>Date </div>
              <div>{parseDateTime(events?.acf.date_time).dayAndDate}, {parseDateTime(events?.acf.date_time).month}, {parseDateTime(events?.acf.date_time).year}</div>
              </div>
              <div css={{
                padding:"10px 16px",
               
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
              
              })}>Time</div>
              <div>{parseDateTime(events?.acf.date_time).time}</div>
              </div>
              <div css={{
                padding:"10px 16px",
               
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
              
              })}>Location</div><div>{events?.acf.location}</div></div>
                <div css={{
                padding:"10px 16px",
                borderBottom:"1px solid #fafafa",
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
              
              })}>Phone number</div><div>{events.acf.phone_number}</div></div>
               <div css={{
                  padding:"10px 16px",
                borderBottom:"1px solid #fafafa",
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
                
              })}>Organiser</div><div>{events.acf.publisher}</div></div>
               <div css={{
                 padding:"10px 16px",
                borderBottom:"1px solid #fafafa",
               }}><div  css={(theme) => ({
                fontSize: 16,
                    fontWeight: 400,
                    // textTransform: "capitalize",
                    color: theme.colors.Neutral_700,
               
              })}>Email</div><div>{events.acf.email}</div></div>
              </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      



  
    </div>
  );
};

export default DivardEventPage;
