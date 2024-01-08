/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
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
    },
    {
      title: "linkedn",
      image: "lindn.svg",
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
      title: "Petmax",
      url: "https://petmaxapp.com/",
      logo: "petmax_logo.svg",
      bg: "#111",
      bg_hover: "#000",
      width: "auto",
      height: [40, 40, 50],
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
    },
    {
      title: "Digages",
      url: "https://digages.com",
      logo: "digages_logo.svg",
      bg: "#f0effb",
      bg_hover: "#d3cff5",
      categories: ["all", "web applications"],
      width: "auto",
      height: [40, 40, 50],
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
    },
    {
      title: "Debby Dot",
      url: "https://debbydotattractions.com/",
      logo: "debby_dot.png",
      bg: "#fef5e6",
      bg_hover: "#fce2b5",
      categories: ["all", "mobile applications"],
      width: "auto",
      height: [40, 40, 50],
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
    },
    {
      title: "Ebby Skincare",
      url: "https://ebbysglowskincare.com/",
      logo: "ebbys_glow.png",
      bg: "#fde9f3",
      bg_hover: "#f9bddd",
      categories: ["all", "mobile applications"],
      width: "auto",
      height: [40, 40, 50],
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
    },
    {
      title: "Glacee waters",
      url: "https://glaceewater.com/",
      logo: "glacee_logo.png",
      bg: "#e6f6f9",
      bg_hover: "#b6e5ed",
      categories: ["all", "web applications"],
      width: [90, 90, 100],
      height: "auto",
      tools: [
        {
          title: "wordpress",
        },
        {
          title: "elementor",
        },
      ],
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
          backgroundColor: "#f4f4f4",
        }}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            css={mq({
              marginTop: 40,
              width: ["100%", "100%", "70%"],
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
              })}
            >
              Eboigbodin Chukwuyem
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              css={mq({
                fontSize: [20, 20, 32],
                fontWeight: 800,
                textAlign: "center",
              })}
            >
              Front End Developer
            </motion.div>
          </div>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{
              backgroundColor: "#eee",
              scale: 1.01,
            }}
            transition={{
              ease: "easeInOut",
              // duration: 0.4,
            }}
            css={mq({
              marginTop: 40,
              backgroundColor: "#fff",
              borderRadius: "100%",
              width: [100, 100, 200],
              height: [100, 100, 200],
            })}
            src="home/profile_pic.png"
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
            <motion.div
              key={link.title}
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
          ))}

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
            })}
            onClick={() => router.push("/resume")}
          >
            my resume
          </motion.div>
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
              fontSize: [20, 20, 24],
              width: ["100%", "100%", "50%"],
              marginTop: 20,
              padding: ["0px 16px", "0px 16px", 0],
            })}
          >
            👋 Hello, I'm <strong>Eboigbodin chukwuyem</strong>, a passionate
            front-end developer with four years of hands-on experience in
            crafting engaging and user-friendly web experiences. My journey in
            the world of web development has been marked by a commitment to
            turning ideas into interactive and visually appealing realities.
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
              width: ["70%", "70%", "30%"],
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
      </div>
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
                  color: selected === category_item.title ? "#111" : "#c4c4c4",
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
                  "repeat(2, 1fr)",
                ],
                width: ["100%", "100%", "70%"],
                padding: ["0px 16px", "0px 16px", 0],
                rowGap: [20, 20, 40],
                columnGap: [20, 20, 40],
                marginBottom: 100,
              })
            }
          >
            {past_works
              .filter((work) => work.categories.includes(selected))
              .map((work) => (
                <div
                  css={{
                    width: "100%",
                  }}
                  key={work.title}
                >
                  <a href={work.url} target="_blank">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 0.99 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      whileHover={{
                        backgroundColor: work.bg_hover,
                        scale: 1.01,
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
                  <div
                    css={mq({
                      width: "100%",
                      fontSize: [22, 22, 24],
                      fontWeight: 800,
                      marginTop: [10, 10, 20],
                    })}
                  >
                    {work.title}
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
              ))}
          </div>
        </div>{" "}
      </div>
      <div
        css={{
          backgroundColor: "#f4f4f4",
          padding: "60px 0px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          css={mq({
            fontSize: [32, 42, 62],
            fontWeight: 800,
            textAlign: "center",
          })}
        >
          Built by me.
        </motion.div>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {social_links.map((link) => (
            <motion.div
              key={link.title}
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
          ))}
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
            })}
            onClick={() => router.push("/resume")}
          >
            my resume
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
