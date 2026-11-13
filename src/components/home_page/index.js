
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import facepaint from "facepaint";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import SkillComp from "./comps/skill_comp";

const breakpoints = [576, 768, 1200];
const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

const HomePage = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("all");

  const social_links = [
    {
      title: "mail",
      image: "mail.svg",
      link: "mailto:eboigbodinchukwuyem@gmail.com",
    },
    {
      title: "linkedin",
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
    ["js_box.svg", "coloured_js.svg", "Javascript"],
    ["reactjs.svg", "reactjs_cl.svg", "React js"],
    ["framer_motion.svg", "framer_motion_cl.svg", "Framer Motion"],
    ["capacitorjs.svg", "capacitorjs_cl.svg", "Capacitor js"],
    ["nextjs.svg", "nextjs_cl.svg", "Next js"],
    ["wordpress.svg", "wordpress_cl.svg", "Wordpress"],
    ["nodejs.svg", "nodejs_cl.svg", "Node js"],
    ["typescript.svg", "typescript_cl.svg", "Typescript"],
    ["expressjs.svg", "expressjs.svg", "Express js"],
    ["figma.svg", "figma_cl.svg", "Figma"],
    ["tailwind.svg", "tailwind_cl.svg", "Tailwind"],
  ];

  const past_works = [
    {
      title: "Federal Ministry Of Labour And Employment, Nigeria",
      url: "https://portal.osh.gov.ng/",
      logo: "osh_nigeria.svg",
      bg: "#1d8d72",
      bg_hover: "#1a7d65",
      categories: ["all", "web applications"],
      description:
        "A web application managing the processes of the Federal Ministry Of Labour And Employment.",
      job_role: [
        "Collaborated with a team of 5 developers to build a large-scale government web platform with over 5 interconnected web applications for registration and accident management of factories in Nigeria.",
      ],
      tools: ["React", "Next.js", "Emotion.js"],
    },
    {
      title: "Maxbox",
      url: "https://petmaxapp.com/",
      logo: "maxbox_logo.svg",
      bg: "#111",
      bg_hover: "#000",
      categories: ["all", "mobile applications"],
      description: "A movie streaming mobile application.",
      job_role: [
        "Built an interactive mobile movie streaming application with features for saving and downloading media from social platforms.",
        "Worked on the web dashboard for uploading and managing Petmax movies and movie categories.",
        "Built the application using Next.js, Emotion, Framer Motion and Capacitor, compiling it into Android and iOS applications.",
      ],
      tools: [
        "React",
        "CSS",
        "Next.js",
        "Capacitor",
        "Framer Motion",
        "Emotion",
        "Express",
        "Node.js",
        "Sequelize",
      ],
    },
    {
      title: "Favvii",
      url: "https://play.google.com/store/apps/details?id=com.favvii",
      logo: "favvii-logo.png",
      bg: "#e8f7ff",
      bg_hover: "#07344b",
      categories: ["all", "mobile applications"],
      description:
        "Favvii is a mobile platform connecting students with restaurants, brands, services, and events.",
      job_role: [
        "Led a team of designers, marketers, and engineers to build the Favvii Android and iOS mobile application.",
        "Worked with the team on the web dashboard for uploading and managing vendor accounts.",
      ],
      tools: [
        "React",
        "CSS",
        "Next.js",
        "Capacitor",
        "Framer Motion",
        "Emotion",
        "Express",
        "Node.js",
        "Sequelize",
      ],
    },
    {
      title: "Glacee Waters",
      url: "https://glaceewater.com/",
      logo: "glacee_logo.png",
      bg: "#e6f6f9",
      bg_hover: "#b6e5ed",
      categories: ["all", "web applications"],
      description:
        "A WordPress website for a water-producing company.",
      job_role: [
        "Worked on building a company website for a water-producing business.",
      ],
      tools: ["WordPress", "Elementor"],
    },
  ];

  const categories = [
    { title: "all" },
    { title: "mobile applications" },
    { title: "web applications" },
  ];

  const sectionTitle = {
    fontWeight: 800,
    letterSpacing: "-2px",
    margin: 0,
  };

  const socialButton = {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "#f0f0ec",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s",
    ":hover": {
      background: "#e0e0d9",
      transform: "translateY(-4px)",
    },
  };

  return (
    <div
      css={{
        background: "#fafaf8",
        color: "#171717",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "inherit",
      }}
    >
      <div
        css={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0px 24px",
          boxSizing: "border-box",
        }}
      >
        {/* NAVIGATION */}

        <motion.header
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          css={{
            height: 85,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #eaeae6",
          }}
        >
          <div
            css={{
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            EC<span css={{ color: "#99998e" }}>.</span>
          </div>

          <nav
            css={mq({
              display: "flex",
              alignItems: "center",
              gap: [12, 20, 32],
            })}
          >
            {["About", "Skills", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                css={{
                  color: "#777",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color .2s",
                  ":hover": { color: "#111" },
                }}
              >
                {item}
              </a>
            ))}

            <a
              href="mailto:eboigbodinchukwuyem@gmail.com"
              css={{
                background: "#171717",
                color: "#fff",
                padding: "13px 20px",
                borderRadius: 30,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Let's talk ↗
            </a>
          </nav>
        </motion.header>

        {/* HERO */}

        <section
          id="about"
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1.25fr .75fr"],
            alignItems: "center",
            gap: [45, 45, 65],
            padding: ["75px 0px", "90px 0px", "115px 0px"],
          })}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              css={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "10px 15px",
                borderRadius: 30,
                background: "#eeeee9",
                fontSize: 13,
                fontWeight: 800,
                color: "#666",
                letterSpacing: ".5px",
                marginBottom: 27,
              }}
            >
              <span
                css={{
                  width: 7,
                  height: 7,
                  background: "#69a87d",
                  borderRadius: "50%",
                }}
              />
              SOFTWARE ENGINEER & DESIGN ENGINEER
            </div>

            <h1
              css={mq({
                fontSize: [43, 60, 76],
                lineHeight: [1.12, 1.08, 1.04],
                letterSpacing: ["-2.5px", "-3.5px", "-5px"],
                fontWeight: 800,
                margin: 0,
                maxWidth: 750,
              })}
            >
              Building digital
              <span css={{ color: "#99998e" }}>
                {" "}experiences{" "}
              </span>
              that make an impact.
            </h1>

            <p
              css={{
                color: "#777",
                fontSize: 16,
                lineHeight: 1.9,
                maxWidth: 590,
                marginTop: 27,
              }}
            >
              Hello, I'm{" "}
              <strong css={{ color: "#222" }}>
                Eboigbodin Chukwuyem
              </strong>
              . A Software Engineer and Design Engineer with over six
              years of experience building modern web and mobile
              applications.
            </p>

            <p
              css={{
                color: "#777",
                fontSize: 16,
                lineHeight: 1.9,
                maxWidth: 570,
                marginTop: 12,
              }}
            >
              I specialize in transforming product ideas and design
              concepts into high-fidelity, interactive experiences,
              bridging the gap between design and engineering.
            </p>

            <div
              css={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 12,
                marginTop: 32,
              }}
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                css={{
                  background: "#171717",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "17px 24px",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Explore my work ↗
              </motion.a>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push("/resume")}
                css={{
                  background: "#efefea",
                  color: "#171717",
                  border: "none",
                  padding: "17px 24px",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                View resume ↗
              </motion.button>
            </div>

            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 37,
              }}
            >
              {social_links.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  css={socialButton}
                >
                  <img
                    src={`home/tabs/${link.image}`}
                    alt={link.title}
                    css={{
                      width: 21,
                      height: 21,
                      objectFit: "contain",
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* PROFILE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            css={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <div
              css={mq({
                width: ["85%", "75%", "100%"],
                maxWidth: 360,
                aspectRatio: "0.85",
                borderRadius: 24,
                background: "#e9e9e2",
                overflow: "hidden",
              })}
            >
              <img
                src="/home/personal_image.webp"
                alt="Eboigbodin Chukwuyem"
                css={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              css={{
                position: "absolute",
                bottom: 35,
                left: 0,
                background: "#fff",
                padding: "17px 21px",
                borderRadius: 12,
                boxShadow: "0 10px 40px rgba(0,0,0,.07)",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              <span css={{ color: "#999" }}>MY APPROACH</span>
              <div css={{ fontSize: 16, marginTop: 6 }}>
                Design × Engineering
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SKILLS */}

        <section
          id="skills"
          css={{
            borderTop: "1px solid #eaeae6",
            borderBottom: "1px solid #eaeae6",
            padding: "65px 0px",
          }}
        >
          <div
            css={mq({
              display: "flex",
              flexDirection: ["column", "column", "row"],
              justifyContent: "space-between",
              alignItems: ["flex-start", "flex-start", "center"],
              gap: 35,
            })}
          >
            <div css={{ maxWidth: 300 }}>
              <div
                css={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: "#999",
                }}
              >
                MY EXPERTISE
              </div>

              <h2
                css={{
                  ...sectionTitle,
                  fontSize: 34,
                  marginTop: 12,
                }}
              >
                Tools I work with.
              </h2>

              <p
                css={{
                  color: "#888",
                  fontSize: 16,
                  lineHeight: 1.8,
                  marginTop: 12,
                }}
              >
                Technologies I use to bring ideas and digital
                experiences to life.
              </p>
            </div>

            <div
              css={mq({
                display: "flex",
                flexWrap: "wrap",
                justifyContent: ["flex-start", "flex-start", "flex-end"],
                alignItems: "center",
                gap: [10, 14, 17],
                width: ["100%", "100%", "65%"],
              })}
            >
              {skill_list.map((skill) => (
                <motion.div
                  key={skill[2]}
                  whileHover={{ y: -4 }}
                  css={{
                    background: "#efefea",
                    padding: "11px 14px",
                    borderRadius: 9,
                    transition: "background .2s",
                    ":hover": {
                      background: "#e2e2da",
                    },
                  }}
                >
                  <SkillComp
                    logo={skill[0]}
                    active_color={skill[1]}
                    text={skill[2]}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section
          id="projects"
          css={{
            padding: "100px 0px 120px",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 25,
              marginBottom: 45,
            }}
          >
            <div>
              <div
                css={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: "#999",
                }}
              >
                SELECTED WORK
              </div>

              <h2
                css={mq({
                  fontSize: [38, 48, 58],
                  letterSpacing: "-3px",
                  margin: "12px 0px 0px",
                  fontWeight: 800,
                })}
              >
                Things I've built.
              </h2>

              <p
                css={{
                  color: "#888",
                  fontSize: 16,
                  lineHeight: 1.8,
                  marginTop: 12,
                }}
              >
                A selection of products and applications I've
                contributed to.
              </p>
            </div>

            {/* FILTERS */}

            <div
              css={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {categories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setSelected(category.title)}
                  css={{
                    border: "none",
                    borderRadius: 30,
                    padding: "12px 18px",
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: "capitalize",
                    cursor: "pointer",
                    background:
                      selected === category.title
                        ? "#171717"
                        : "#efefea",
                    color:
                      selected === category.title
                        ? "#fff"
                        : "#777",
                    transition: "all .2s",
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT CARDS */}

          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 25,
            }}
          >
            <AnimatePresence mode="popLayout">
              {past_works
                .filter((work) =>
                  work.categories.includes(selected)
                )
                .map((work, index) => (
                  <motion.article
                    key={work.title}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.35 }}
                    css={mq({
                      display: "grid",
                      gridTemplateColumns: [
                        "1fr",
                        "1fr",
                        "1.05fr .95fr",
                      ],
                      gap: [20, 25, 40],
                      padding: [13, 18, 22],
                      background: "#fff",
                      border: "1px solid #eaeae6",
                      borderRadius: 16,
                      alignItems: "center",
                    })}
                  >
                    {/* PROJECT IMAGE */}

                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      css={{
                        display: "block",
                        textDecoration: "none",
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 0.985 }}
                        css={{
                          width: "100%",
                          minHeight: 250,
                          borderRadius: 11,
                          background: work.bg,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          transition: "background .3s",
                          ":hover": {
                            background: work.bg_hover,
                          },
                        }}
                      >
                        <img
                          src={`home/past_works/${work.logo}`}
                          alt={work.title}
                          css={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "65%",
                            maxHeight: 145,
                            objectFit: "contain",
                          }}
                        />
                      </motion.div>
                    </a>

                    {/* PROJECT DETAILS */}

                    <div
                      css={{
                        padding: "12px 5px",
                      }}
                    >
                      <div
                        css={{
                          fontSize: 13,
                          color: "#999",
                          fontWeight: 800,
                          letterSpacing: 1.5,
                          marginBottom: 12,
                        }}
                      >
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3
                        css={mq({
                          fontSize: [24, 27, 30],
                          letterSpacing: "-1px",
                          lineHeight: 1.3,
                          fontWeight: 800,
                          margin: 0,
                        })}
                      >
                        {work.title}
                      </h3>

                      <p
                        css={{
                          color: "#777",
                          fontSize: 16,
                          lineHeight: 1.8,
                          marginTop: 14,
                          fontWeight: 500,
                        }}
                      >
                        {work.description}
                      </p>

                      <div css={{ marginTop: 22 }}>
                        <div
                          css={{
                            fontSize: 13,
                            fontWeight: 800,
                            letterSpacing: 1,
                            color: "#999",
                            marginBottom: 13,
                          }}
                        >
                          MY CONTRIBUTIONS
                        </div>

                        {work.job_role.map((role, roleIndex) => (
                          <div
                            key={roleIndex}
                            css={{
                              display: "flex",
                              gap: 10,
                              marginBottom: 12,
                              fontSize: 15,
                              lineHeight: 1.8,
                              color: "#666",
                            }}
                          >
                            <span
                              css={{
                                color: "#aaa",
                                fontWeight: 800,
                                flexShrink: 0,
                              }}
                            >
                              ↗
                            </span>
                            <span>{role}</span>
                          </div>
                        ))}
                      </div>

                      {/* TECHNOLOGIES */}

                      <div
                        css={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 8,
                          marginTop: 22,
                        }}
                      >
                        {work.tools.map((tool) => (
                          <span
                            key={tool}
                            css={{
                              background: "#f1f1ed",
                              color: "#666",
                              borderRadius: 5,
                              padding: "8px 11px",
                              fontSize: 13,
                              fontWeight: 700,
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        css={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 10,
                          marginTop: 25,
                          color: "#171717",
                          fontSize: 15,
                          fontWeight: 800,
                          textDecoration: "none",
                          transition: "all .2s",
                          ":hover": {
                            gap: 16,
                          },
                        }}
                      >
                        Explore project <span>↗</span>
                      </a>
                    </div>
                  </motion.article>
                ))}
            </AnimatePresence>
          </div>
        </section>

        {/* CONTACT */}

        <footer
          id="contact"
          css={{
            background: "#171717",
            color: "#fff",
            borderRadius: "20px 20px 0px 0px",
            padding: "75px 30px 30px",
          }}
        >
          <div
            css={{
              maxWidth: 850,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              css={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#888",
              }}
            >
              HAVE A PROJECT IN MIND?
            </div>

            <h2
              css={mq({
                fontSize: [40, 52, 68],
                lineHeight: 1.1,
                letterSpacing: "-3px",
                margin: "20px 0px",
                fontWeight: 800,
              })}
            >
              Let's build something
              <span css={{ color: "#999" }}>
                {" "}meaningful.
              </span>
            </h2>

            <p
              css={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#999",
                maxWidth: 480,
                margin: "20px auto 30px",
              }}
            >
              Have an idea, an opportunity, or simply want to
              connect? I'd love to hear from you.
            </p>

            <motion.a
              href="mailto:eboigbodinchukwuyem@gmail.com"
              whileHover={{ y: -3 }}
              css={{
                display: "inline-flex",
                background: "#fff",
                color: "#171717",
                padding: "17px 26px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              Get in touch ↗
            </motion.a>
          </div>

          {/* FOOTER BOTTOM */}

          <div
            css={{
              borderTop: "1px solid #333",
              marginTop: 75,
              paddingTop: 25,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 15,
            }}
          >
            <div
              css={{
                fontSize: 17,
                fontWeight: 900,
                letterSpacing: "-1px",
              }}
            >
              EC.
            </div>

            <div
              css={{
                fontSize: 14,
                color: "#777",
              }}
            >
              Designed & built with care.
            </div>

            <div
              css={{
                fontSize: 14,
                color: "#777",
              }}
            >
              © {new Date().getFullYear()} Eboigbodin Chukwuyem
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
