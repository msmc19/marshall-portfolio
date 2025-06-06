/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aaron Marshall",
  title: "Hi all, I'm Aaron",
  subTitle: emoji(
    "a proud student at the University of Tennessee, graduating in May 2025 🎓. With a strong academic foundation 📚 and a track record of Dean’s List honors 🏆, I excel in creating meaningful connections and driving impactful projects. My experience includes project coordination, analytical problem-solving, and delivering exceptional customer experiences 🤝 in dynamic, fast-paced environments. Beyond academics, I embrace an active lifestyle 💪 with nearly four years of gym dedication, love the thrill of discovering unique treasures while thrifting 🛍️, enjoy cheering on football games 🏈, immersing myself in video games 🎮, and exploring diverse cuisines as a passionate foodie 🍲. Excited to bring my enthusiasm, skills, and drive to a role where I can make a difference and continue to grow!"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1_A0xIGrHW5yKT_EbzmparX_yXbYXCYJS4za8r9oNEAc/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/msmc19",
  linkedin: "https://www.linkedin.com/in/aaronmarshallit/",
  gmail: "marshaar000@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Background",
  subTitle: "Analytical strategist with a knack for adaptive solutions and hands-on impact",
  skills: [
    emoji("♨️ Analytical Proficiency: I leverage SQL, Python, and PostgreSQL to build fraud-analytics pipelines (250 K+ records), normalize complex schemas, and maintain data integrity—turning raw data into clear, actionable insights."),
    emoji("♨️ Technical Versatility: I develop end-to-end solutions across Python, SQL, C++, and HTML, using tools like Tableau, Jupyter Notebooks, and Visual Studio to deliver everything from interactive visualizations to modular backend systems."),
    emoji("♨️ Effective Communication: I translate technical findings into concise presentations and reports, collaborating cross-functionally to align stakeholders, drive decisions, and ensure every project message lands.")
  ],

// Software Skills section
  
  softwareSkills: [
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "pandas", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "numpy", fontAwesomeClassname: "fas fa-calculator" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "c++", fontAwesomeClassname: "fas fa-terminal" }
  ],
  display: true
};

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

// Education Section

const educationInfo = {
  schools: [
    {
      schoolName: "University of Tennessee-Knoxville",
      logo: require("./assets/images/UT_Knoxville_logo_2015.png"),
      subHeader: "Bachelor's of Information Sciences",
      duration: "August 2021 - May 2025",
      desc: "Engagement and awards given through the university.",
      descBullets: [
        "Clubs: Information Science",
        "Dean's List: Fall & Spring Freshman, Fall Sophmore, Fall & Spring Junior"
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "55%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL (mySQL & Postgres)",
      progressPercentage: "50%"
    },
    {
      Stack: "Java",
      progressPercentage: "20%"
    },
    {
      Stack: "C++",
      progressPercentage: "35%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Shift Lead",
      company: "Noodles & Company",
      companylogo: require("./assets/images/noodles.jpg"),
      date: "July 2020 - August 2024",
      desc: "Led a team of 10-15 employees across four statewide locations, managing task delegation, hands-on support, and on-the-spot issue resolution to ensure smooth operations.",
      descBullets: [
        "Streamlined store management through opening and closing tasks, including inventory logging, preparation, and cleaning",
        "Garnered knowledge of basic cooking techniques to execute tasks efficiently such as sauteing, frying, baking, and grilling meats and vegetables",
        "Trained between 10-20 newly hired line and front workers to integrate smoothly into operations",
        "Led operations under high-pressure, serving 50-150 customers while maintaining a focus on quality and consistency",
        "Managed front and back of house staff during peak sales periods, handling $3,000 - $5,000 transactions between 4-7 hour shifts"
      ]
    },
    {
      role: "Cashier / Merchandiser",
      company: "Grapevine Wine & Spirits",
      companylogo: require("./assets/images/grapevine.JPG"),
      date: "June 2023 - June 2024",
      desc: "Collaborated with a team of six to drive alcohol sales across various categories, ensuring an engaging yet safe customer experience.",
      descBullets: [
        "Monitored sales performance ranging from $10,000 to $20,000 and budgeted merchandise displays accordingly",
        "Reinforced compliance with all local regulations (TABC) governing  product sales standards",
        "Operated hand trucks and pallet jacks for maneuvering products throughout the store",
        "Managed daily stocking and display of merchandise valued at upwards of $2,000"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Notable projects I've created or collaborated to present",
  projects: [
    {
      image: require("./assets/images/terminal.png"),
      projectName: "ISP Customer Tracker",
      projectDesc: "Menu‑driven Python application that manages ISP customers, their service locations, subscribed services, installed equipment, and billing status—all backed by a normalized PostgreSQL database.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/msmc19/ISP-Customer-Tracker"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/terminal.png"),
      projectName: "Tax Return System",
      projectDesc: "The Tax Return System is a scalable, object‑oriented Python application backed by a normalized PostgreSQL schema that enables CPAs and their assistants to manage clients and one‑per‑client tax returns through a layered architecture with connection‑pooled data access and robust error handling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/msmc19/Tax-Return-System"
        }
      ]
    },
     {
      image: require("./assets/images/terminal.png"),
      projectName: "Fraud Detection Analysis in Digital Wallet Transactions",
      projectDesc: "A reproducible data‑science pipeline that cleans a synthetic digital‑wallet dataset, engineers five interpretable fraud indicators, and surfaces high‑risk transactions/users through Python notebooks and interactive Tableau dashboards.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/msmc19/Fraud-Detection-Analysis"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Check out my resume!",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📱"),
  subtitle:
    "Want to chat? My contacts are always open for communication!",
  number: "(615)-997-6104",
  email_address: "marshaar000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
