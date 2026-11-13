
/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import { Global, css } from "@emotion/react";
import { useRouter } from "next/router";
import ReactToPrint from "react-to-print";

const ResumePageComp = () => {
  const router = useRouter();
  const componentRef = useRef(null);

  const portfolio = {
    name: "Chukwuyem Eboigbodin",
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
      "Software Engineer and Design Engineer with over six years of experience developing modern web and mobile applications. Experienced in translating product requirements and design concepts into responsive, high-quality digital solutions. Skilled in building interactive user interfaces, developing application features, integrating third-party services and creating cross-platform mobile applications. Combines strong frontend development capabilities with backend experience and a keen eye for user experience, performance and maintainable code.",

    education: [
      {
        qualification: "Bachelor of Science, Economics, Feb 21, 2025",
        university: "University of Ibadan - Ibadan, Oyo state, Nigeria",
      },
    ],

    skills: [
      {
        category: "Frontend Development",
        items: [
          "JavaScript",
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Emotion.js",
          "Framer Motion",
        ],
      },
      {
        category: "Backend Development",
        items: [
          "Node.js",
          "Express.js",
          "MySQL",
          "Sequelize",
          "REST API Integration",
        ],
      },
      {
        category: "Mobile Development",
        items: [
          "Capacitor.js",
          "Android",
          "iOS",
          "Cross-platform Development",
        ],
      },
      {
        category: "Design & CMS",
        items: [
          "Figma",
          "WordPress",
          "WooCommerce",
        ],
      },
    ],

    past_works: [
      {
        title: "Federal Ministry of Labour and Employment, Nigeria",
        role_type: "Remote",
        period: "February 2023 – October 2024",
        position: "Software Developer",
        description:
          "Development of an integrated government web platform supporting occupational safety and factory management processes.",
        job_role: [
          "Collaborated with a team of five developers to build a large-scale government platform comprising multiple interconnected web applications.",
          "Contributed to digital systems for factory registration, accident reporting and occupational safety management.",
          "Worked on interconnected application workflows designed to support administrative processes within the Federal Ministry.",
        ],
      },
      {
        title: "Maxbox",
        role_type: "Remote",
        period: "January 2022 – November 2023",
        position: "Software Developer",
        description:
          "Development of a cross-platform movie streaming application and its supporting web management dashboard.",
        job_role: [
          "Developed an interactive mobile streaming application with features for accessing, saving and downloading media from social platforms.",
          "Contributed to a web-based dashboard for uploading, organizing and managing movies and movie categories.",
          "Built the mobile application using Next.js, Emotion.js and Framer Motion, with Capacitor for Android and iOS deployment.",
        ],
      },
      {
        title: "Debbydot",
        role_type: "Remote",
        period: "March 2022 – November 2023",
        position: "Mobile Application Developer",
        description:
          "Development of a multi-vendor e-commerce platform for mobile shopping.",
        job_role: [
          "Contributed to the development of a multi-vendor e-commerce application for Android and iOS.",
          "Implemented product discovery features, including dynamic product sorting and filtering based on multiple attributes.",
          "Integrated the mobile application with WordPress and WooCommerce APIs to manage product and commerce-related data.",
        ],
      },
      {
        title: "Ebbys Glow",
        role_type: "Remote",
        period: "March 2022 – November 2023",
        position: "Mobile Application Developer",
        description:
          "Development of an e-commerce mobile application for skincare and beauty products.",
        job_role: [
          "Contributed to the development of a multi-vendor e-commerce mobile application for Android and iOS.",
          "Implemented product browsing, sorting and filtering interfaces to improve product discovery.",
          "Integrated the application with WordPress and WooCommerce APIs for product and commerce management.",
        ],
      },
      {
        title: "Glacee Waters",
        role_type: "Remote",
        period: "October 2022 – November 2023",
        position: "Web Developer",
        description:
          "Development of a corporate website for a water production company.",
        job_role: [
          "Developed a company website to establish the brand's online presence and communicate its products and services.",
          "Implemented the website using WordPress and Elementor.",
        ],
      },
      {
        title: "Doncept",
        role_type: "Remote",
        period: "2019 – 2020",
        position: "Web Developer",
        description:
          "Web application development agency delivering digital solutions for clients.",
        job_role: [
          "Translated interface designs into functional, responsive web applications with a focus on usability and visual consistency.",
          "Contributed to the design and development of web solutions for multiple client projects.",
          "Maintained existing applications, improved legacy code and implemented updates to meet evolving client requirements.",
        ],
      },
      {
        title: "Tobeetoe",
        role_type: "Remote",
        period: "May 2017 – June 2018",
        position: "Web Developer",
        description:
          "Web application development agency focused on building digital solutions.",
        job_role: [
          "Implemented web interfaces based on design specifications, ensuring functional and visually consistent results.",
          "Participated in the development of web applications and digital solutions for client projects.",
          "Supported the maintenance and improvement of existing web applications.",
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
        minHeight: 0,
        padding: 0,
        backgroundColor: "#fff",
      },
    },

    controls: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
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
      padding: "60px 65px",
      boxSizing: "border-box",
      backgroundColor: "#fff",
      boxShadow: "0 8px 40px rgba(0,0,0,.08)",
      color: "#202020",

      "@media screen and (max-width: 650px)": {
        padding: "35px 24px",
      },

      "@media print": {
        width: "210mm",
        maxWidth: "none",
        minHeight: 0,
        margin: 0,
        padding: "14mm 15mm",
        boxShadow: "none",
        borderRadius: 0,
      },
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 25,
      paddingBottom: 25,
      borderBottom: "2px solid #202020",

      "@media screen and (max-width: 500px)": {
        gap: 14,
      },
    },

    identity: {
      flex: 1,
      minWidth: 0,
    },

    name: {
      fontSize: 38,
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: "-1px",
      color: "#171717",
      margin: 0,

      "@media screen and (max-width: 500px)": {
        fontSize: 28,
      },
    },

    jobTitle: {
      fontSize: 20,
      fontWeight: 700,
      color: "#666",
      marginTop: 9,
      letterSpacing: "1.5px",
      textTransform: "uppercase",

      "@media screen and (max-width: 500px)": {
        fontSize: 16,
      },
    },

    photo: {
      width: 110,
      height: 110,
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: 8,
      flexShrink: 0,
      backgroundColor: "#eee",

      "@media screen and (max-width: 500px)": {
        width: 78,
        height: 78,
      },
    },

    socials: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px 17px",
      marginTop: 22,
    },

    social: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      color: "#555",
      fontSize: 13,
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
      marginBottom: 15,
    },

    sectionTitle: {
      fontSize: 17,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "1.7px",
      color: "#202020",
      whiteSpace: "nowrap",
    },

    headingLine: {
      height: 1,
      backgroundColor: "#dedede",
      flex: 1,
    },

    about: {
      fontSize: 16,
      lineHeight: 1.8,
      color: "#444",
      margin: 0,
      textAlign: "justify",
    },

    educationItem: {
      display: "flex",
      alignItems: "center",
      fontSize: 16,
      lineHeight: 1.65,
      fontWeight: 600,
      color: "#333",
    },

    skillGroups: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 18,

      "@media screen and (max-width: 500px)": {
        gridTemplateColumns: "1fr",
      },
    },

    skillGroup: {
      minWidth: 0,
    },

    skillCategory: {
      fontSize: 15,
      fontWeight: 700,
      color: "#333",
      marginBottom: 9,
    },

    skillList: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7,
    },

    skill: {
      padding: "7px 10px",
      border: "1px solid #e5e5e5",
      borderRadius: 3,
      backgroundColor: "#fafafa",
      color: "#444",
      fontSize: 14,
      fontWeight: 600,
    },

    experienceList: {
      display: "flex",
      flexDirection: "column",
      gap: 25,
    },

    experience: {
      position: "relative",
      paddingLeft: 18,
      borderLeft: "2px solid #e5e5e5",
      pageBreakInside: "avoid",
      breakInside: "avoid",
    },

    experienceDot: {
      position: "absolute",
      left: -5,
      top: 5,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "#202020",
    },

    experienceTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12,

      "@media screen and (max-width: 500px)": {
        flexDirection: "column",
        gap: 5,
      },
    },

    experienceTitle: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.4,
      color: "#202020",
    },

    experiencePosition: {
      fontSize: 15,
      fontWeight: 600,
      color: "#555",
      marginTop: 4,
    },

    period: {
      fontSize: 14,
      fontWeight: 600,
      color: "#777",
      textAlign: "right",
      whiteSpace: "nowrap",
      paddingTop: 3,

      "@media screen and (max-width: 500px)": {
        textAlign: "left",
      },
    },

    roleType: {
      display: "inline-block",
      marginTop: 7,
      padding: "4px 9px",
      borderRadius: 3,
      backgroundColor: "#f1f1f1",
      color: "#666",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".7px",
    },

    description: {
      marginTop: 10,
      fontSize: 16,
      lineHeight: 1.7,
      fontWeight: 600,
      color: "#444",
    },

    roleList: {
      margin: "9px 0 0",
      paddingLeft: 19,
    },

    roleItem: {
      fontSize: 15.5,
      lineHeight: 1.7,
      color: "#555",
      marginBottom: 5,
      paddingLeft: 3,
    },

    footer: {
      marginTop: 35,
      paddingTop: 14,
      borderTop: "1px solid #e5e5e5",
      display: "flex",
      justifyContent: "space-between",
      color: "#999",
      fontSize: 13,
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
        padding: "14mm 15mm !important",
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
        <div className="resume-screen" css={styles.controls}>
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
            pageStyle="@page { size: A4; margin: 0; }"
          />
        </div>

        <div
          ref={componentRef}
          className="resume-page"
          css={styles.paper}
        >
          <header css={styles.header}>
            <div css={styles.identity}>
              <h1 css={styles.name}>{portfolio.name}</h1>

              <div css={styles.jobTitle}>
                {portfolio.job_title}
              </div>

              <div css={styles.socials}>
                {portfolio.socials_links.map((item) => {
                  const isEmail = item.icon === "mail";

                  return (
                    <a
                      key={item.icon}
                      href={
                        isEmail
                          ? `mailto:${item.link}`
                          : item.link
                      }
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
          </header>

          <section className="resume-section" css={styles.section}>
            <div css={styles.sectionHeading}>
              <div css={styles.sectionTitle}>Professional Summary</div>
              <div css={styles.headingLine} />
            </div>

            <p css={styles.about}>{portfolio.about}</p>
          </section>

          <section className="resume-section" css={styles.section}>
            <div css={styles.sectionHeading}>
              <div css={styles.sectionTitle}>Education</div>
              <div css={styles.headingLine} />
            </div>

            {portfolio.education.map((item, index) => (
              <div key={index}>
                <div css={styles.educationItem}>
                  {item.qualification}
                </div>

                <div css={styles.educationItem}>
                  {item.university}
                </div>
              </div>
            ))}
          </section>

          <section className="resume-section" css={styles.section}>
            <div css={styles.sectionHeading}>
              <div css={styles.sectionTitle}>Technical Skills</div>
              <div css={styles.headingLine} />
            </div>

            <div css={styles.skillGroups}>
              {portfolio.skills.map((group) => (
                <div key={group.category} css={styles.skillGroup}>
                  <div css={styles.skillCategory}>
                    {group.category}
                  </div>

                  <div css={styles.skillList}>
                    {group.items.map((skill) => (
                      <span key={skill} css={styles.skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section" css={styles.section}>
            <div css={styles.sectionHeading}>
              <div css={styles.sectionTitle}>Professional Experience</div>
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

                      <div css={styles.experiencePosition}>
                        {work.position}
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
                        {role}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <footer css={styles.footer}>
            <span>{portfolio.name}</span>
            <span>{portfolio.job_title}</span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ResumePageComp;
