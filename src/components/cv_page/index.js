/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import ReactToPrint from "react-to-print";
import React, { useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const ResumePageComp = () => {
  const router = useRouter();
  const componentRef = useRef();
  const portfolio = {
    name: "chukwuyem eboigbodin",
    job_title: "front end developer",
    personal_img: "/home/personal_image.webp",
  };
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
          css={{
            width: "60%",
            marginTop: 50,
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
                  width: [240, 240, 200],
                  //   padding: ["10px 16px", "10px 16px", "16px 24px"],
                  padding: "16px 24px",
                  fontSize: [18, 18, 18],
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
                      width: [240, 240, 200],
                      //   padding: ["10px 16px", "10px 16px", "16px 24px"],
                      padding: "16px 24px",
                      fontSize: [18, 18, 18],
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
                    <div>Print certificate</div>
                  </div>
                </motion.button>
              )}
              content={() => componentRef.current}
            />
          </div>

          <div
            css={{
              width: "100%",

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
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  css={{
                    width: "80%",
                    margin: "40px 0px",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        css={(theme) => ({
                          fontSize: 20,
                          fontWeight: 700,
                          textTransform: "capitalize",
                          color: theme.colors.Neutral_800,
                        })}
                      >
                        {portfolio.name}
                      </div>
                      <div
                        css={(theme) =>
                          mq({
                            fontSize: [16, 16, 24],
                            width: ["100%", "100%", "100%"],
                            marginTop: 10,
                            padding: ["0px 16px", "0px 16px", 0],
                            color: theme.colors.Neutral_500,
                          })
                        }
                      >
                        {portfolio.job_title}
                      </div>
                    </div>
                    <div>
                      <img
                        src={portfolio.personal_img}
                        css={{
                          width: 200,
                          height: 200,

                          objectFit: "cover",
                          objectPosition: "center center",
                          borderRadius: 10,
                        }}
                      />
                    </div>
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

export default ResumePageComp;
