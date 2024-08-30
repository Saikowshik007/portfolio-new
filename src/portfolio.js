/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sai Ananthula's Portfolio",
  description:
    "A dynamic and passionate innovator, always eager to tackle end-to-end projects that build sustainable and scalable social and technical systems, driving meaningful impact and positive change.",
  og: {
    title: "Sai Ananthula Portfolio",
    type: "website",
    url: "http://saianantula.com/",
  },
};

//Home Page
const greeting = {
  title: "Sai Kowshik Ananthula",
  logo_name: "Sai Kowshik Ananthula",
  nickname: "Sai",
  subTitle:
    "A dynamic and passionate innovator, always eager to tackle end-to-end projects that build sustainable and scalable social and technical systems, driving meaningful impact and positive change.",
  resumeLink:
    "https://www.overleaf.com/download/project/6529fde8269efff05254778c/build/191a20bfdd8-60c07dd737a53ba8/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-c-f-2bdh&enable_pdf_caching=true&popupDownload=true",
  portfolio_repository: "https://github.com/Saikowshik007/portfolio-new",
  githubProfile: "https://github.com/Saikowshik007",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Saikowshik007",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ask7",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Mail",
    link: "mailto:askowshik@outlook.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Utilize my expertise in Java, Python, React.js, and Spring Boot to develop robust backend services, create responsive web applications, and build solutions that cater to business needs.",
        "⚡ With my proficiency in AWS tech stack, and databases, I design and implement scalable cloud solutions, optimize performance, and ensure reliability of infrastructure for various applications.",
        "⚡ I love solving Leetcode problems and had solved 320+ problems",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "OpenShift",
          fontAwesomeClassname: "simple-icons:redhatopenshift",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#EF5B25",
          },
        },
        {
          skillName: "Elastic Search",
          fontAwesomeClassname: "simple-icons:elastic",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#add827",
          },
        },
      ],
    },
    {
      title: "Infra-Architecture and Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Owned Openshift-OCP dev and QA environments, fixing bugs , and enhancements, improving environment reliability for India and US teams in IBM.",
        "⚡ Implemented CI/CD pipelines using Jenkins, enabling faster deployment cycles and reducing operational costs through efficient cloud-based solutions on AWS.",
        "⚡ Developed a highly efficient, low-latency client transaction pipeline using Airflow, Kubernetes, Kafka, and Docker, significantly improving batch-processing efficiency",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "OpenShift",
          fontAwesomeClassname: "simple-icons:redhatopenshift",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#ffcc33",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/saikowshik007/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/saikowshik",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Georgia State University, Atlanta",
      subtitle: "M.S. in Computer Science",
      logo_path: "gsu.png",
      alt_name: "Georgia State University, Atlanta",
      duration: "2021 - 2023",
      descriptions: [
        "🏆 Awarded with full tuition waiver for masters degree based on merit.",
        "🏆 An active member of MORSE Studio which conducts experiments on real-world scenarios.",
      ],
      website_link: "https://www.gsu.edu/",
    },
    {
      title: "Gandhi Institute of Science and Technology, Visakhapatnam",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "gitam.png",
      alt_name: "GITAM Visakhapatnam",
      duration: "2017 - 2021",
      descriptions: [
        "🏆 I have studied core software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "🏆 Apart from this, I have done courses on Deep Learning, Android App Development, Python programming and Full Stack Development.",
        "🏆 I was awarded 'Over Achiever' for Merit and awarded with scholarship which is given to top 1% of students in college worth 10k rupees.",
      ],
      website_link: "https://www.gitam.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Enterprise Design Thinking Practitioner",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/f74735a5-60d3-4386-9884-ee59349032b9/public_url",
      alt_name: "IBM",
      color_code: "#D83B0199",
    },
    {
      title: "Agile Explorer",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/3177fef3-d6bd-477f-bfff-ecd888fd723a/public_url",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Trustworthy AI and AI Ethics",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/4e978c70-512d-4e61-8c6e-bfeaad370906/public_url",
      alt_name: "Ai",
      color_code: "#FFBB0099",
    },
    {
      title: "Clean Code",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-733f7b7f-0e3c-42c3-b924-32176b8d0fcc/",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WHR8V4TPWKZG",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/6P7P6NABEVC9",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Android App Development",
      subtitle: "- Vanderbilt University",
      logo_path: "vanderbilt.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/2XLHXHUM9PE2",
      alt_name: "Android",
      color_code: "#0C9D5899",
    },
    {
      title: "Python 3 Specialization",
      subtitle: "- University of Michigan",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/NSFMKMEKDNZR",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Problem Solving (Basic)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Java (Basic)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  subtitle: "Full-time, Internship and Assistantship",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full-time",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "International Business Machines (I.B.M)",
          company_url: "https://www.ibm.com/us-en",
          logo_path: "ibm.png",
          duration: "January 2024 - Present",
          location: "Austin, Texas, USA",
          description:
            "Upgraded Maas360vpn and optimized tunnel speed, implemented a push notification system with AWS IoT, Kafka, and Java Spring Boot, reduced status update load with Shared Subscription, and managed OCP environments to enhance security, performance, and reliability for global clients.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Global Payments",
          company_url: "https://www.globalpayments.com/",
          logo_path: "global-payments.png",
          duration: "June 2020 - Aug 2021",
          location: "Columbus, Georgia",
          description:
            "Led the development of Java and Spring Boot applications, improving system efficiency by 50%, implemented RESTful web services for faster data processing, engineered a low-latency client transaction pipeline with modern tools, optimized backend connectivity with Spring JDBC and MyBatis, and enhanced deployment speed and resilience using AWS and CI/CD pipelines, reducing operational costs and increasing productivity.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern ",
          company: "Global Payments Inc.",
          company_url: "https://www.globalpayments.com/",
          logo_path: "global-payments.png",
          duration: "May 2022 - Aug 2022",
          location: "Atlanta, Georgia",
          description:
            "Developed and optimized the Correspondence API using Java and Spring, achieving a 40% reduction in account lookup time and improved system response, engineered REST APIs for external service integration, and built Spring components with comprehensive unit and integration tests, resulting in a 60% increase in system efficiency.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Assistantships",
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "Georgia State University",
          company_url: "https://www.gsu.edu/",
          logo_path: "gsu.png",
          duration: "January 2022 - May 2022",
          location: "Atlanta, Georgia",
          description:
            "Administered experiments for accident prevention between automobiles using Object Detection, Deep Learning, and IoT, reducing computational usage by 30%, developed an advanced algorithm for vehicle localization and collision detection, and published an IEEE paper on Visual Light Communication.",
          color: "#000000",
        },
        {
          title: "Graduate Teaching Assistant",
          company: "Georgia State University",
          company_url: "https://www.gsu.edu/",
          logo_path: "gsu.png",
          duration: "August 2021 - March 2023",
          location: "Atlanta, Georgia",
          description:
            "Monitored and assessed the performance of 120+ students in the Programming Languages Concepts course, enhanced learning through diverse teaching methods under Professor Chinua Umoja, improved student performance by 10%, and automated assignment grading with a Python script, reducing evaluation time by 20%.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of cutting-edge technologies. I specialize in creating software engineering solutions and deploying and automating them on cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sai.png",
    description:
      "I am available on almost every social media platform and would be delighted to connect with you. Feel free to send me a message, and I will respond within 24 hours. I specialize in React, Android, Cloud, and Open Source Development, and I’m here to assist you with any queries or projects you may have. Looking forward to connecting with you!",
  },

  addressSection: {
    title: "Address",
    subtitle: "Wells Branch Pkwy, Austin, TX, USA 78728",
    locality: "Austin",
    country: "USA",
    region: "Texas",
    postalCode: "78728",
    streetAddress: "Wells Branch Pkwy",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/KZTYLybDGVZWeKns5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
