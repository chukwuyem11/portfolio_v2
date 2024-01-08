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
      "I am a passionate front-end developer with four years of hands-on experience in crafting engaging and user-friendly web experiences. My journey in the world of web development has been marked by a commitment to turning ideas into interactive and visually appealing realities.",
    past_works: [
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
        title: "Digages",
        role_type: "remote",
        period: "Feb 2022 - October 2022",

        description: "All in one link page builder for business owners",
        job_role: [
          {
            role: "Led and worked with a wonderful and hardworking team which led to rapid implementation of product core features and solution",
          },
          {
            role: "Built user interface for easy and effective link building with mobile responsiveness",
          },
          {
            role: "Built easy to use and mobile responsive dashboards",
          },
        ],
      },
      {
        title: "Petmax mobile app",
        role_type: "remote",
        period: "January 2022 - November 2023",
        description:
          "An app for viewing downloading and sharing cute videos of pets",
        job_role: [
          {
            role: "Built a complex user interfaces similar to Tiktok where I single handedly developed and deployed both an Android and an IOS apps on the app stores",
          },
          {
            role: "Created a web app dashboard for uploading and managing videos",
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
            role: "Built an e-commerce mobile application for ordering products",
          },
          {
            role: "created a complex interface for sorting and filtering products using different attributes",
          },
          {
            role: "worked with and integrated wordpress and ecommerce API with the mobile app",
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
            role: "Built an e-commerce mobile application for ordering products",
          },
          {
            role: "created a complex interface for sorting and filtering products using different attributes",
          },
          {
            role: "worked with and integrated wordpress and ecommerce API with the mobile app",
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
            role: "Built a standard company website a water producing company",
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
                            fontSize: [14, 14, 14],
                            width: ["100%", "100%", "60%"],
                            marginTop: 10,
                            padding: ["0px 16px", "0px 16px", 0],
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
                                  textTransform: "capitalize",
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
                                textTransform: "capitalize",
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
                                    textTransform: "capitalize",
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
