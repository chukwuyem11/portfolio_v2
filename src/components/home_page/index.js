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

const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const HomePage = () => {
  const [selected, setSelected] = useState("all");
  const router = useRouter();

  const social_links = [
    {
      title: "mail",
      image: "mail.svg",
      link: "mailto:eboigbodinchukwuyem@gmail.com",
    },
    {
      title: "linkedn",
      image: "lindn.svg",
      link: "https://ng.linkedin.com/in/chukwuyem-eboigbodin-37b245217",
    },
    {
      title: "github",
      image: "github.svg",
      link: "https://github.com/chukwuyem11",
    },
  ];

  const skill_list = [
    {
      logo: "javascript.svg",
      active_color: "javascript_cl.svg",
      title: "javascript",
    },
    {
      logo: "reactjs.svg",
      active_color: "reactjs_cl.svg",
      title: "react js",
    },
    {
      logo: "framer_motion.svg",
      active_color: "framer_motion_cl.svg",
      title: "framer motion",
    },
    {
      logo: "capacitorjs.svg",
      active_color: "capacitorjs_cl.svg",
      title: "capacitor js",
    },
    {
      logo: "nextjs.svg",
      active_color: "nextjs_cl.svg",
      title: "next js",
    },
    {
      logo: "wordpress.svg",
      active_color: "wordpress_cl.svg",
      title: "wordpress",
    },
    {
      logo: "nodejs.svg",
      active_color: "nodejs_cl.svg",
      title: "node js",
    },
    {
      logo: "typescript.svg",
      active_color: "typescript_cl.svg",
      title: "typescript",
    },
    {
      logo: "expressjs.svg",
      active_color: "expressjs.svg",
      title: "express js",
    },
  ];

  const past_works = [
    {
      title: "Favvii",
      url: "https://favvii.com/",
      logo: "favvii-logo.png",
      bg: "#e8f7ff",
      bg_hover: "#07344b",
      width: "auto",
      height: [50, 60, 60],
      categories: ["all", "mobile applications"],
      tools: [
        {
          title: "react",
        },
        {
          title: "css",
        },
        {
          title: "nextjs",
        },
        {
          title: "capacitorjs",
        },
        {
          title: "framer-motion",
        },
        {
          title: "emotionjs",
        },
        {
          title: "expressjs",
        },
        {
          title: "nodejs",
        },
        {
          title: "sequilize",
        },
      ],
      description:
        "Favvii is a mobile platform connecting students with restaurants, brands, services, and events.",
      job_role: [
        {
          role: "Led a team of talented and interesting individuals accross various fields from graphic design to product design, marketing and engineering, together we built an Android and IOS mobile application for Favvii mobile app",
        },
        {
          role: "With the small team we had to utilize the best technology for fast development and deployment, we utilized Capacitorjs and Nextjs for the development and deployment of both the Android and an IOS apps on the app stores, using web technologies",
        },
        {
          role: "Worked with the team on the web dashboard for uploading and managing Vendor account",
        },
      ],
      grid_position: "ltr",
    },
    {
      title: "Petmax",
      url: "https://petmaxapp.com/",
      logo: "petmax_logo.svg",
      bg: "#111",
      bg_hover: "#000",
      width: "auto",
      height: [40, 40, 30],
      categories: ["all", "mobile applications"],
      tools: [
        {
          title: "react",
        },
        {
          title: "css",
        },
        {
          title: "nextjs",
        },
        {
          title: "capacitorjs",
        },
        {
          title: "framer-motion",
        },
        {
          title: "emotionjs",
        },
        {
          title: "expressjs",
        },
        {
          title: "nodejs",
        },
        {
          title: "sequilize",
        },
      ],
      description:
        "An app for viewing downloading and sharing cute videos of pets",
      job_role: [
        {
          role: "Worked with a team of 6 accross various fields from graphic design to product design, marketing and engineering, together we built an Android and IOS mobile application for a vetinary business.",
        },
        {
          role: "It was a Tiktok like Mobile app, for viewing cute videos on the web, where I worked on the development and deployment of both the Android and an IOS apps on the app stores, using web technologies",
        },
        {
          role: "Worked with the team on the web dashboard for uploading and managing Petmax videos",
        },
      ],
      grid_position: "ltr",
    },
    {
      title: "Digages",
      url: "https://digages.com",
      logo: "digages_logo.svg",
      bg: "#f0effb",
      bg_hover: "#d3cff5",
      categories: ["all", "web applications"],
      width: "auto",
      height: [40, 40, 30],
      tools: [
        {
          title: "react",
        },
        {
          title: "css",
        },
        {
          title: "nextjs",
        },

        {
          title: "framer-motion",
        },
        {
          title: "emotionjs",
        },
        {
          title: "expressjs",
        },
        {
          title: "nodejs",
        },
        {
          title: "sequilize",
        },
      ],

      description: "All in one link page builder for business owners",
      job_role: [
        {
          role: "Led and worked with a wonderful and hardworking team which led to rapid implementation of product core features and solution",
        },
        {
          role: "Worked with the team on the user interface for easy and effective link building with mobile responsiveness",
        },
        {
          role: "We built easy to use and mobile responsive dashboards with a sofidticated design.",
        },
      ],
      grid_position: "rtr",
    },
    {
      title: "Debby Dot",
      url: "https://debbydotattractions.com/",
      logo: "debby_dot.png",
      bg: "#fef5e6",
      bg_hover: "#fce2b5",
      categories: ["all", "mobile applications"],
      width: "auto",
      height: [40, 40, 30],
      tools: [
        {
          title: "react",
        },
        {
          title: "css",
        },
        {
          title: "nextjs",
        },
        {
          title: "capacitorjs",
        },
        {
          title: "framer-motion",
        },
        {
          title: "emotionjs",
        },
        {
          title: "expressjs",
        },
        {
          title: "nodejs",
        },
        {
          title: "sequilize",
        },
      ],
      description: "An E-commerce shopping platform",
      job_role: [
        {
          role: "While at doncept, we Built a multi-vendor e-commerce Android and IOS mobile application",
        },
        {
          role: "we implemented a complex interface for sorting and filtering products using different attributes",
        },
        {
          role: "We integrated the mobile appliation with an external content management platform API",
        },
      ],
      grid_position: "ltr",
    },
    {
      title: "Ebby Skincare",
      url: "https://ebbysglowskincare.com/",
      logo: "ebbys_glow.png",
      bg: "#fde9f3",
      bg_hover: "#f9bddd",
      categories: ["all", "mobile applications"],
      width: "auto",
      height: [40, 40, 30],
      tools: [
        {
          title: "react",
        },
        {
          title: "css",
        },
        {
          title: "nextjs",
        },
        {
          title: "capacitorjs",
        },
        {
          title: "framer-motion",
        },
        {
          title: "emotionjs",
        },
        {
          title: "expressjs",
        },
        {
          title: "nodejs",
        },
        {
          title: "sequilize",
        },
      ],
      description: "An E-commerce shopping platform",
      job_role: [
        {
          role: "We built a multi-vendor e-commerce Android and IOS mobile application",
        },
        {
          role: "we implemented a complex interface for sorting and filtering products using different attributes",
        },
        {
          role: "We integrated the mobile appliation with an external content management platform API",
        },
      ],
      grid_position: "rtr",
    },
    {
      title: "Glacee waters",
      url: "https://glaceewater.com/",
      logo: "glacee_logo.png",
      bg: "#e6f6f9",
      bg_hover: "#b6e5ed",
      categories: ["all", "web applications"],
      width: [90, 90, 90],
      height: "auto",
      tools: [
        {
          title: "wordpress",
        },
        {
          title: "elementor",
        },
      ],
      description: "An wordpress website for a water producing company",
      job_role: [
        {
          role: "We built a standard company website a water producing company",
        },
      ],
      grid_position: "ltr",
    },
  ];

  const categories = [
    {
      title: "all",
    },
    {
      title: "mobile applications",
    },
    {
      title: "web applications",
    },
  ];
  return (
    <div>
      <div
        css={{
          // backgroundColor: "#F4F4F4",
          background: "linear-gradient(to bottom, #F4F4F4, #FAFAFA)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <div
          css={mq({
            width: ["90%", "70%", "60%"],
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
          <div
            css={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.img
              initial={{
                opacity: 0,
                borderRadius: 20,
                filter: [
                  "blur(0.4px)",
                  "brightness(90%) sepia(20%) contrast(90%)",
                ],
                scale: 1,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{
                backgroundColor: "#eee",
                scale: 0.99,
                borderRadius: 30,
                filter: ["blur(0.4px)", "none"],
              }}
              transition={{
                // ease: "easeInOut",
                duration: 0.6,
              }}
              css={mq({
                marginTop: 40,
                backgroundColor: "#fff",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 20,
                width: [140, 140, 200],
                height: [140, 140, 200],
                filter: "brightness(90%) sepia(20%) contrast(90%)",
                // transform: "scale(1.9)",
              })}
              src="/home/personal_image.webp"
            />
          </div>

          <div
            css={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            {social_links.map((link) => (
              <a key={link.title} href={link.link} target="_blank">
                <motion.div
                  whileHover={{
                    backgroundColor: "#eee",
                  }}
                  css={mq({
                    width: [24, 24, 34],
                    height: [24, 24, 34],
                    background: "#fff",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0px 4px",
                  })}
                >
                  <img
                    css={mq({
                      width: [18, 18, 24],
                      height: [18, 18, 24],
                    })}
                    src={`home/tabs/${link.image}`}
                  />
                </motion.div>
              </a>
            ))}

            {/* <motion.div
            whileHover={{
              backgroundColor: "#000",
              color: "#fff",
            }}
            css={mq({
              height: [24, 24, 34],
              background: "#fff",
              borderRadius: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0px 4px",
              textTransform: "capitalize",
              padding: "0px 8px",
              fontSize: [14, 14, 16],
              fontWeight: 500,
              cursor: "pointer",
            })}
            onClick={() => router.push("/resume")}
          >
            my resume
          </motion.div> */}
            <motion.a
              href="mailto:eboigbodinchukwuyem@gmail.com"
              target="_blank"
              css={{
                textDecoration: "none",
                color: "#000",
              }}
              whileHover={{
                color: "#fff",
              }}
            >
              <motion.div
                whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                css={mq({
                  height: [24, 24, 34],
                  background: "#f4f4f4",
                  borderRadius: 30,
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
                })}
                // onClick={() => router.push("/resume")}
              >
                contact me
              </motion.div>{" "}
            </motion.a>
          </div>

          <div
            css={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              css={mq({
                textAlign: "center",
                fontSize: [20, 20, 22],
                width: ["100%", "100%", "50%"],
                marginTop: 20,
                padding: ["0px 16px", "0px 16px", 0],
              })}
            >
              👋 Hello, I'm{" "}
              <strong
                css={{
                  fontFamily: "Pacifico",
                  color: "#111",
                }}
              >
                Eboigbodin Chukwuyem
              </strong>
              , a passionate front-end developer with four years of hands-on
              experience in crafting engaging and user-friendly web experiences.
              My journey in the world of web development has been marked by a
              commitment to turning ideas into interactive and visually
              appealing realities.
            </div>
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              css={mq({
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                width: ["70%", "70%", "70%"],
                padding: ["0px 16px", "0px 16px", 0],
                marginTop: 40,
                marginBottom: 40,
              })}
            >
              {skill_list.map((skill) => (
                <SkillComp
                  logo={skill.logo}
                  active_color={skill.active_color}
                  text={skill.title}
                />
              ))}
            </div>
          </div>
          <div
            css={{
              background: "#f4f4f4",
              height: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></div>
          <div>
            <div
              css={mq({
                textAlign: "center",
                fontSize: [24, 24, 44],
                fontWeight: 700,
                marginTop: 40,
                marginBottom: 40,
              })}
            >
              Past works
            </div>
            <div
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
                      fontSize: [18, 18, 24],
                      fontWeight: 500,
                      textTransform: "capitalize",
                      color:
                        selected === category_item.title ? "#111" : "#c4c4c4",
                      cursor: "pointer",
                    })}
                    onClick={() => {
                      setSelected(category_item.title);
                    }}
                  >
                    {category_item.title}
                  </div>
                ))}
              </div>
            </div>
            <div
              css={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                css={(theme) =>
                  mq({
                    display: "grid",
                    gridTemplateColumns: [
                      "repeat(1, 1fr)",
                      "repeat(1, 1fr)",
                      "repeat(1, 1fr)",
                    ],
                    width: ["100%", "100%", "60%"],
                    padding: ["0px 16px", "0px 16px", 0],
                    rowGap: [20, 20, 40],
                    columnGap: [20, 20, 40],
                    marginBottom: 100,
                  })
                }
              >
                {past_works
                  .filter((work) => work.categories.includes(selected))
                  .map((work, index) => (
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

                        rowGap: [20, 20, 40],
                        columnGap: [20, 20, 40],
                      })}
                      key={work.title}
                    >
                      <div>
                        <a href={work.url} target="_blank">
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.99,
                              borderRadius: 10,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 0.99,
                              filter: "none",
                            }}
                            exit={{ opacity: 0, scale: 0.99 }}
                            whileHover={{
                              backgroundColor: work.bg_hover,
                              // scale: 1.01,
                              borderRadius: 20,
                              filter: ["blur(0.4px)", "none"],
                            }}
                            css={mq({
                              width: "100%",
                              height: [200, 200, 300],
                              borderRadius: 10,
                              backgroundColor: work.bg,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            })}
                          >
                            <img
                              css={mq({
                                width: work.width,
                                height: work.height,
                              })}
                              src={`home/past_works/${work.logo}`}
                            />
                          </motion.div>
                        </a>
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
                                fontSize: [22, 22, 24],
                                fontWeight: 800,
                                marginTop: [10, 10, 0],
                                color: theme.colors.Neutral_600,
                              })
                            }
                          >
                            {work.title}
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
                              fontWeight: 600,
                              // textTransform: "capitalize",

                              color: theme.colors.Neutral_800,
                              marginTop: 10,
                            })}
                          >
                            {work.description}
                          </div>
                          <ul
                            css={{
                              marginTop: 20,
                            }}
                          >
                            {work.job_role.map((role) => (
                              <li
                                css={(theme) => ({
                                  fontSize: 16,
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
                        <div
                          css={mq({
                            width: "100%",
                            fontSize: [22, 22, 24],
                            fontWeight: 800,
                            color: "#777",
                            marginTop: [10, 10, 20],
                          })}
                        >
                          Tools
                        </div>

                        <div
                          css={mq({
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "left",
                            marginTop: [10, 10, 10],
                          })}
                        >
                          {work.tools.map((tool) => (
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
                                fontWeight: 500,
                                fontSize: 16,
                                borderRadius: 14,
                                backgroundColor: "#f4f4f4",
                                marginBottom: 10,
                              }}
                            >
                              #{tool.title}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>{" "}
          </div>
          <div
            css={{
              backgroundColor: "#f1f1f1",
              padding: "60px 0px",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              css={mq({
                fontSize: [32, 42, 52],
                fontWeight: 800,
                textAlign: "center",
              })}
            >
              Built with{" "}
            </motion.div>

            <div
              css={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
                css={mq({
                  width: 42,
                  height: 42,
                })}
                src={`home/cv-heart.svg`}
              />
            </div>
            <div
              css={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              {social_links.map((link) => (
                <a key={link.title} href={link.link} target="_blank">
                  <motion.div
                    whileHover={{
                      backgroundColor: "#eee",
                    }}
                    css={mq({
                      width: [24, 24, 34],
                      height: [24, 24, 34],
                      background: "#fff",
                      borderRadius: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0px 4px",
                    })}
                  >
                    <img
                      css={mq({
                        width: [18, 18, 24],
                        height: [18, 18, 24],
                      })}
                      src={`home/tabs/${link.image}`}
                    />
                  </motion.div>
                </a>
              ))}
              {/* <motion.div
            whileHover={{
              backgroundColor: "#000",
              color: "#fff",
            }}
            css={mq({
              height: [24, 24, 34],
              background: "#fff",
              borderRadius: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0px 4px",
              textTransform: "capitalize",
              padding: "0px 8px",
              fontSize: [14, 14, 16],
              fontWeight: 500,
              cursor: "pointer",
            })}
            onClick={() => router.push("/resume")}
          >
            my resume
          </motion.div> */}
              <motion.a
                href="mailto:eboigbodinchukwuyem@gmail.com"
                target="_blank"
                css={{
                  textDecoration: "none",
                  color: "#000",
                }}
                whileHover={{
                  color: "#fff",
                }}
              >
                <motion.div
                  whileHover={{
                    backgroundColor: "#000",
                    color: "#fff",
                  }}
                  css={mq({
                    height: [24, 24, 34],
                    background: "#fff",
                    borderRadius: 30,
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
                  })}
                  // onClick={() => router.push("/resume")}
                >
                  contact me
                </motion.div>{" "}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
