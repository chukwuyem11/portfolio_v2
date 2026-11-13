
/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import { Global, css } from "@emotion/react";
import { useRouter } from "next/router";
import ReactToPrint from "react-to-print";
import facepaint from "facepaint";

const breakpoints = [576, 768, 1200];
const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

const ResumePageComp = () => {
  const router = useRouter();
  const componentRef = useRef(null);

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

    education: [
      {
        qualification: "Bachelor of Science, Economics, Feb 21, 2025",
        university: "University of Ibadan - Ibadan, Oyo state, Nigeria",
      },
    ],

    skills: [
      "Javascript",
      "React js",
      "Framer Motion",
      "Capacitor js",
      "Next js",
      "Wordpress",
      "Node js",
      "Typescript",
      "Express js",
      "Figma",
      "Tailwind",
    ],

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
        description: "A movie streaming mobile app",
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

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "40px 20px 70px",
      color: "#202020",
      fontFamily: "Arial, Helvetica, sans-serif",
      boxSizing: "border-box",

      "@media print": {
        minHeight: "0",
        padding: 0,
        backgroundColor: "#fff",
      },
    },

    controls: {
      display: "flex",
      justifyContent: "center",
      gap: 12,
      marginBottom: 30,

      "@media print": {
        display: "none",
      },
    },

    controlButton: {
      height: 46,
      padding: "0 24px",
      borderRadius: 30,
      border: "1px solid #dedede",
      backgroundColor: "#fff",
      color: "#202020",
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      transition: "all .2s ease",

      "&:hover": {
        backgroundColor: "#202020",
        color: "#fff",
      },
    },

    paper: {
      width: "100%",
      maxWidth: 794,
      minHeight: 1123,
      margin: "0 auto",
      padding: "65px 68px",
      boxSizing: "border-box",
      backgroundColor: "#fff",
      boxShadow: "0 8px 40px rgba(0,0,0,.08)",
      color: "#202020",

      "@media print": {
        width: "210mm",
        maxWidth: "none",
        minHeight: "0",
        margin: 0,
        padding: "16mm 17mm",
        boxShadow: "none",
        borderRadius: 0,
      },

      "@media screen and (max-width: 650px)": {
        padding: "35px 25px",
      },
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 30,
      paddingBottom: 28,
      borderBottom: "2px solid #202020",

      "@media screen and (max-width: 650px)": {
        gap: 15,
      },
    },

    identity: {
      flex: 1,
      minWidth: 0,
    },

    name: {
      fontSize: 30,
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: "-1px",
      textTransform: "capitalize",
      color: "#171717",
      margin: 0,

      "@media screen and (max-width: 650px)": {
        fontSize: 23,
      },
    },

    jobTitle: {
      fontSize: 15,
      fontWeight: 600,
      color: "#666",
      marginTop: 10,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
    },

    photo: {
      width: 112,
      height: 112,
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: 8,
      flexShrink: 0,
      backgroundColor: "#eee",

      "@media screen and (max-width: 650px)": {
        width: 82,
        height: 82,
      },
    },

    socials: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px 20px",
      marginTop: 24,
    },

    social: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      color: "#555",
      fontSize: 11,
      textDecoration: "none",
      overflowWrap: "anywhere",
    },

    socialIcon: {
      width: 15,
      height: 15,
      objectFit: "contain",
      flexShrink: 0,
    },

    section: {
      marginTop: 30,
    },

    sectionHeading: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14,
    },

    sectionTitle: {
      fontSize: 13,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "1.8px",
      color: "#202020",
      whiteSpace: "nowrap",
    },

    headingLine: {
      height: 1,
      backgroundColor: "#dedede",
      flex: 1,
    },

    about: {
      fontSize: 12.5,
      lineHeight: 1.85,
      color: "#555",
      margin: 0,
    },

    educationList: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },

    educationItem: {
      display: "flex",
      alignItems: "center",
      fontSize: 13,
      fontWeight: 600,
      color: "#333",
    },

    skillList: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
    },

    skill: {
      padding: "7px 11px",
      border: "1px solid #e5e5e5",
      borderRadius: 4,
      backgroundColor: "#fafafa",
      color: "#444",
      fontSize: 10.5,
      fontWeight: 600,
    },

    experienceList: {
      display: "flex",
      flexDirection: "column",
      gap: 23,
    },

    experience: {
      position: "relative",
      paddingLeft: 17,
      borderLeft: "2px solid #e5e5e5",
      pageBreakInside: "avoid",
      breakInside: "avoid",
    },

    experienceDot: {
      position: "absolute",
      left: -5,
      top: 3,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "#202020",
    },

    experienceTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 15,

      "@media screen and (max-width: 650px)": {
        flexDirection: "column",
        gap: 5,
      },
    },

    experienceTitle: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.4,
      color: "#202020",
      textTransform: "capitalize",
    },

    period: {
      fontSize: 10.5,
      fontWeight: 600,
      color: "#777",
      textAlign: "right",
      whiteSpace: "nowrap",
      paddingTop: 2,

      "@media screen and (max-width: 650px)": {
        textAlign: "left",
      },
    },

    roleType: {
      display: "inline-block",
      marginTop: 5,
      padding: "3px 7px",
      borderRadius: 3,
      backgroundColor: "#f1f1f1",
      color: "#666",
      fontSize: 9,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".7px",
    },

    description: {
      marginTop: 9,
      fontSize: 11.5,
      lineHeight: 1.6,
      fontWeight: 600,
      color: "#444",
    },

    roleList: {
      margin: "9px 0 0",
      paddingLeft: 16,
    },

    roleItem: {
      fontSize: 11,
      lineHeight: 1.65,
      color: "#666",
      marginBottom: 5,
      paddingLeft: 2,
    },

    footer: {
      marginTop: 35,
      paddingTop: 12,
      borderTop: "1px solid #e5e5e5",
      display: "flex",
      justifyContent: "space-between",
      color: "#999",
      fontSize: 9,
    },
  };

  const globalStyles = css({
    "@page": {
      size: "A4",
      margin: 0,
    },

    "@media print": {
      "html, body": {
        width: "210mm",
        margin: "0 !important",
        padding: "0 !important",
        backgroundColor: "#fff !important",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      },

      body: {
        fontFamily: "Arial, Helvetica, sans-serif",
      },

      "*": {
        boxSizing: "border-box",
      },

      ".resume-screen": {
        display: "none !important",
      },

      ".resume-page": {
        width: "210mm !important",
        maxWidth: "none !important",
        minHeight: "0 !important",
        margin: "0 !important",
        padding: "16mm 17mm !important",
        boxShadow: "none !important",
        borderRadius: "0 !important",
        backgroundColor: "#fff !important",
      },

      ".resume-experience": {
        breakInside: "avoid",
        pageBreakInside: "avoid",
      },

      ".resume-section": {
        breakInside: "auto",
        pageBreakInside: "auto",
      },

      a: {
        color: "inherit !important",
        textDecoration: "none !important",
      },

      img: {
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      },
    },
  });

  return (
    <>
      <Global styles={globalStyles} />

      <div css={styles.page}>
        <div
          className="resume-screen"
          css={styles.controls}
        >
          <button
            css={styles.controlButton}
            onClick={() => router.push("/")}
          >
            Back to portfolio
          </button>

          <ReactToPrint
            trigger={() => (
              <button css={styles.controlButton}>
                Download résumé PDF
              </button>
            )}
            content={() => componentRef.current}
            documentTitle="Chukwuyem Eboigbodin - Resume"
            pageStyle={`
              @page {
                size: A4;
                margin: 0;
              }
            `}
          />
        </div>

        <div
          ref={componentRef}
          className="resume-page"
          css={styles.paper}
        >
          <div css={styles.header}>
            <div css={styles.identity}>
              <h1 css={styles.name}>
                {portfolio.name}
              </h1>

              <div css={styles.jobTitle}>
                {portfolio.job_title}
              </div>

              <div css={styles.socials}>
                {portfolio.socials_links.map((item) => {
                  const isEmail = item.icon === "mail";
                  const href = isEmail
                    ? `mailto:${item.link}`
                    : item.link;

                  return (
                    <a
                      key={item.icon}
                      href={href}
                      target={isEmail ? undefined : "_blank"}
                      rel="noreferrer"
                      css={styles.social}
                    >
                      <img
                        src={`/svg/social_links/${item.icon}.svg`}
                        alt=""
                        css={styles.socialIcon}
                      />

                      <span>{item.link}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <img
              src={portfolio.personal_img}
              alt={portfolio.name}
              css={styles.photo}
            />
          </div>

          <section css={styles.section}>
            <div css={styles.sectionHeading}>
              <div css={styles.sectionTitle}>
                Profile
              </div>

              <div css={styles.headingLine} />
            </div>

            <p css={styles.about}>
              {portfolio.about}
            </p>
          </section>

          <section css={styles.section}>
            <div css={styles.sectionHeading}>
              <div css={styles.sectionTitle}>
                Education
              </div>

              <div css={styles.headingLine} />
            </div>

            <div css={styles.educationList}>
              {portfolio.education.map((item, index) => (
                <div key={index}>
                <div
                  
                  css={styles.educationItem}
                >
                  {item.qualification}
                </div>
                 <div
                  
                  css={styles.educationItem}
                >
                  {item.university}
                </div>
                </div>
              ))}
            </div>
          </section>

          <section css={styles.section}>
            <div css={styles.sectionHeading}>
              <div css={styles.sectionTitle}>
                Technical Skills
              </div>

              <div css={styles.headingLine} />
            </div>

            <div css={styles.skillList}>
              {portfolio.skills.map((skill) => (
                <div
                  key={skill}
                  css={styles.skill}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section css={styles.section}>
            <div css={styles.sectionHeading}>
              <div css={styles.sectionTitle}>
                Work Experience
              </div>

              <div css={styles.headingLine} />
            </div>

            <div css={styles.experienceList}>
              {portfolio.past_works.map((work) => (
                <article
                  key={work.title}
                  className="resume-experience"
                  css={styles.experience}
                >
                  <div css={styles.experienceDot} />

                  <div css={styles.experienceTop}>
                    <div>
                      <div css={styles.experienceTitle}>
                        {work.title}
                      </div>

                      <span css={styles.roleType}>
                        {work.role_type}
                      </span>
                    </div>

                    <div css={styles.period}>
                      {work.period}
                    </div>
                  </div>

                  <div css={styles.description}>
                    {work.description}
                  </div>

                  <ul css={styles.roleList}>
                    {work.job_role.map((role, index) => (
                      <li
                        key={`${work.title}-${index}`}
                        css={styles.roleItem}
                      >
                        {role.role}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div css={styles.footer}>
            <span>{portfolio.name}</span>
            <span>{portfolio.job_title}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePageComp;
