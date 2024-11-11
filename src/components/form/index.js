/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import ReactToPrint from "react-to-print";
import React, { useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const FormPageComp = () => {
  const router = useRouter();
  const componentRef = useRef();
  const form_titles = [
    {
      title: "email",
    },
    {
      title: "phone number",
    },
    {
      title: "social media",
    },
    {
        title: "( instagram",
      },
     
      {
        title: "twitter",
      },
      {
        title: "tiktok )",
      },
  ];

  let form_array = Array.from({ length: 29 });
  return (
    <div
      css={{
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          css={mq({
            width: ["100%", "60%", "60%"],
            marginTop: 50,
          })}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              css={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <motion.button
                whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                css={(theme) =>
                  mq({
                    height: 56,
                    borderRadius: 30,
                    width: [140, 140, 200],
                    //   padding: ["10px 16px", "10px 16px", "16px 24px"],
                    padding: "16px 24px",
                    fontSize: [14, 14, 18],
                    cursor: "pointer",
                    marginRight: 20,
                    fontWeight: 600,
                    lineHeight: "17px",
                    border: "none",
                    display: "flex",
                    justifyContent: "center",
                    color: "#000",
                    backgroundColor: "#fff",
                    textTransform: "capitalize",
                  })
                }
                type="submit"
                onClick={() => router.push("/")}
              >
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 4,
                  }}
                >
                  <div>home page</div>
                </div>
              </motion.button>
              <ReactToPrint
                // onBeforePrint={() => download_certificate()}
                // onAfterPrint={() => router.push("/admin")}
                trigger={() => (
                  <motion.button
                    whileHover={{
                      backgroundColor: "#eee",
                    }}
                    css={(theme) =>
                      mq({
                        height: 56,
                        borderRadius: 30,
                        width: [140, 140, 200],
                        //   padding: ["10px 16px", "10px 16px", "16px 24px"],
                        padding: "16px 24px",
                        fontSize: [14, 14, 18],
                        cursor: "pointer",
                        marginRight: 20,
                        fontWeight: 600,
                        lineHeight: "17px",
                        border: "none",
                        display: "flex",
                        justifyContent: "center",
                        color: "#000",
                        backgroundColor: "#fff",
                        textTransform: "capitalize",
                      })
                    }
                    type="submit"
                    // onClick={() => {
                    //   factory_details.add_factory_details(formData);
                    //   factory.set_tab("Upload document");
                    // }}
                  >
                    <div
                      css={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 4,
                      }}
                    >
                      <div>download resume</div>
                    </div>
                  </motion.button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              css={{
                width: "80%",
                overflow: "scroll",
                margin: "50px 0px",
              }}
            >
              <div
                ref={componentRef}
                css={mq({
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 10,

                  // padding: ["16px 16px", "16px 16px", "48px 32px"],
                })}
              >
                <div
                  css={{
                    padding: 16,
                  }}
                >
                  <div
                    css={{
                      fontFamily: "Kablammo",
                      fontSize: 24,
                      marginBottom: 24,
                    }}
                  >
                    Thanks for your time
                  </div>
                  <div
                    css={mq({
                      width: "100%",
                      display: "flex",
                      marginBottom: 50,
                      gridTemplateColumns: [
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(3, 20% 20% 60%)",
                      ],
                      width: ["100%", "100%", "100%"],

                      rowGap: [20, 20, 40],
                      columnGap: [20, 20, 40],
                    })}
                  >
                    {form_titles.map((title, index) => (
                      <div
                        key={index}
                        css={{
                          textTransform: "capitalize",
                        }}
                      >
                        {title.title}
                      </div>
                    ))}
                  </div>
                  <div>
                    {form_array.map((title, index) => (
                      <div
                        key={index}
                        css={mq({
                          width: "100%",
                          border:"none",
                          borderBottom: "1px solid #C5CBDA",
                          marginTop:30,

                        //   gridTemplateColumns: [
                        //     "repeat(1, 1fr)",
                        //     "repeat(1, 1fr)",
                        //     "repeat(3, 20% 20% 60%)",
                        //   ],
                        //   width: ["100%", "100%", "100%"],

                        //   rowGap: [20, 20, 40],
                        //   columnGap: [20, 20, 40],
                        })}
                      >
                      
                        
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPageComp;
