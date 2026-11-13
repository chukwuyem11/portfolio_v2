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
    job_title: "Software Engineer",
    personal_img: "/home/personal_image.webp",
    socials_links: [
      {
        icon: "globe",
        link: "https://chukwuyem.com",
      },
      {
        icon: "github",
        link: "https://github.com/chukwuyem11",
      },
      {
        icon: "mail",
        link: "eboigbodinchukwuyem@gmail.com",
      },
      {
        icon: "linkdn",
        link: "https://ng.linkedin.com/in/chukwuyem-eboigbodin-37b245217",
      },
    ],
    about:
      "I'm Eboigbodin Chukwuyem, a passionate Software Engineer and Design Engineer with over six years of experience building modern web and mobile applications, Specialized in turning product ideas and design concepts into high-fidelity, interactive experiences, working closely with designers to transform mockups into real, functional prototypes. I focus on creating polished, user-focused interfaces and reusable implementations that bridge the gap between design and engineering.",
    past_works: [
      {
        title: "Federal Ministry Of Lagos And Employment",
        role_type: "remote",
        period: "Feb 2023 - October 2024",

        description:
          "A web application managing the processes of the Federal Ministry Of Lagos And Employment",
        job_role: [
           {
          role: "Collaborated with a team of 5 developers to build a large-scale government web platform with over 5 web application that are all linked together for registration and accident management of Factories in Nigeria.",
        },
        ],
      },
      {
        title: "Maxbox mobile app",
        role_type: "remote",
        period: "January 2022 - November 2023",
        description:
          "A movie streaming mobile app",
        job_role: [
          {
          role: "Built an interactive mobile movie streaming application with features for saving and downloading media from social platforms.",
        },
        
        {
          role: "Worked with on the web dashboard for uploading and managing Petmax Movies and Movie categories",
        },
          {
          role: "The complex mobile app was built on web technologies including Nextjs, Emotionjs and Framer motion, and utilizing Capacitor to wrap the web app and compiling it into an android and IOS mobile App",
        },
        ],
      },
      {
        title: "Debbydot mobile app",
        role_type: "remote",
        period: "March 2022 - November 2023",
        description: "An E-commerce shopping platform",
        job_role: [
          {
            role: "While at doncept, we Built a multi-vendor e-commerce Android and IOS mobile application",
          },
          {
            role: "we implemented a complex interface for sorting and filtering products using different attributes",
          },
          {
            role: "We integrated the mobile appliation with an external content management platform Wordpress utilizing the Woocommerce API",
          },
        ],
      },
      {
        title: "Ebbys glow mobile app",
        role_type: "remote",
        period: "March 2022 - November 2023",
        description: "An E-commerce shopping platform",
        job_role: [
          {
            role: "We built a multi-vendor e-commerce Android and IOS mobile application",
          },
          {
            role: "we implemented a complex interface for sorting and filtering products using different attributes",
          },
         {
            role: "We integrated the mobile appliation with an external content management platform Wordpress utilizing the Woocommerce API",
          },
        ],
      },
      {
        title: "Glacee waters website",
        role_type: "remote",
        period: "october 2022 - November 2023",
        description: "An wordpress website for a water producing company",
        job_role: [
          {
            role: "We built a standard company website a water producing company",
          },
        ],
      },
      
      {
        title: "Doncept",
        role_type: "remote",
        period: "2019 - 2020",
        description: "Web Application Development Agency",
        job_role: [
          {
            role: "Integrated innovative techniques into creative web designs creating well defined web implementation of interface designs",
          },
          {
            role: "Directly contributed and implemented the development of different web solutions for our clients",
          },
          {
            role: "Maintained and made adjustments to legacy codebase of clients",
          },
        ],
      },
      {
        title: "Tobeetoe",
        role_type: "remote",
        period: "May 2017 - Jun 2018",
        description: "Web Application Development Agency",
        job_role: [
          {
            role: "Integrated innovative techniques into creative web designs creating well defined web implementation of interface designs",
          },
          {
            role: "Directly contributed and implemented the development of different web solutions for our clients",
          },
          {
            role: "Maintained and made adjustments to legacy codebase of clients",
          },
        ],
      },
    ],
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
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    css={mq({
                      width: ["80%", "80%", "80%"],
                      margin: "40px 0px",
                    })}
                  >
                    <div
                      css={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
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
                              fontWeight: 600,
                              textTransform: "capitalize",
                            })
                          }
                        >
                          {portfolio.job_title}
                        </div>
                        <div
                          css={{
                            marginTop: 20,
                          }}
                        >
                          {portfolio.socials_links.map((link) => (
                            <div
                              key={link.icon}
                              css={{
                                marginBottom: 10,
                                display: "flex",
                                // alignItems: "center",
                              }}
                            >
                              <div
                                css={{
                                  marginRight: 10,
                                }}
                              >
                                {" "}
                                <img
                                  css={{
                                    width: 20,
                                    height: 20,
                                  }}
                                  src={`/svg/social_links/${link.icon}.svg`}
                                />
                              </div>

                              <div
                                css={{
                                  fontSize: 14,
                                }}
                              >
                                {link.link}
                              </div>
                            </div>
                          ))}
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
                    <div
                      css={(theme) => ({
                        marginTop: 20,
                        height: 1,
                        width: "100%",
                        backgroundColor: theme.colors.Neutral_400,
                      })}
                    ></div>

                    <div
                      css={{
                        marginTop: 20,
                      }}
                    >
                      <div
                        css={(theme) => ({
                          fontSize: 20,
                          fontWeight: 700,
                          textTransform: "capitalize",
                          color: theme.colors.Neutral_800,
                        })}
                      >
                        About me
                      </div>
                      <div
                        css={(theme) =>
                          mq({
                            fontSize: 16,
                            width: "90%",
                            marginTop: 10,
                           
                            color: theme.colors.Neutral_700,
                            // textTransform: "capitalize",
                          })
                        }
                      >
                        {portfolio.about}
                      </div>
                    </div>
                    <div
                      css={{
                        marginTop: 20,
                      }}
                    >
                      <div
                        css={(theme) => ({
                          fontSize: 20,
                          fontWeight: 700,
                          textTransform: "capitalize",
                          color: theme.colors.Neutral_800,
                        })}
                      >
                        work experience
                      </div>
                      <div
                        css={{
                          marginTop: 20,
                        }}
                      >
                        {portfolio.past_works.map((works) => (
                          <div
                            key={works.title}
                            css={{
                              marginBottom: 30,
                            }}
                          >
                            <div
                              css={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <div
                                css={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  css={(theme) => ({
                                    fontSize: 14,
                                    fontWeight: 700,
                                    textTransform: "capitalize",
                                    color: theme.colors.Neutral_600,
                                    marginRight: 8,
                                  })}
                                >
                                  {works.title}
                                </div>{" "}
                                <div
                                  css={(theme) => ({
                                    fontSize: 12,
                                    fontWeight: 600,
                                    textTransform: "capitalize",
                                    backgroundColor: theme.colors.Neutral_200,
                                    color: theme.colors.Neutral_800,
                                    padding: "4px 8px",
                                    borderRadius: 4,
                                  })}
                                >
                                  {works.role_type}
                                </div>
                              </div>
                              <div
                                css={(theme) => ({
                                  fontSize: 14,
                                  fontWeight: 700,
                                  // textTransform: "capitalize",
                                  color: theme.colors.Neutral_600,
                                  marginRight: 8,
                                })}
                              >
                                {works.period}
                              </div>
                            </div>
                            <div
                              css={(theme) => ({
                                fontSize: 14,
                                fontWeight: 600,
                                // textTransform: "capitalize",
                                color: theme.colors.Neutral_800,
                                marginTop: 10,
                              })}
                            >
                              {works.description}
                            </div>
                            <ul
                              css={{
                                marginTop: 20,
                              }}
                            >
                              {works.job_role.map((role) => (
                                <li
                                  css={(theme) => ({
                                    fontSize: 14,
                                    fontWeight: 500,
                                    // textTransform: "capitalize",
                                    color: theme.colors.Neutral_700,
                                    marginBottom: 10,
                                  })}
                                >
                                  {role.role}
                                </li>
                              ))}
                            </ul>
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
      </div>
    </div>
  );
};

export default ResumePageComp;
