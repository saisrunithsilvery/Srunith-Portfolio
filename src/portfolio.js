/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sai Srunith's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sai Srunith's Portfolio",
    type: "website",
    url: "https://github.com/saisrunithsilvery",
  },
};

//Home Page
const greeting = {
  title: "Sai Srunith",
  logo_name: "Sai Srunith",
  nickname: "Sai Srunith",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1y9APJ9L05Ital41CDyLfRB1hl8TR0GAT/view?usp=drive_link",
  portfolio_repository: "https://github.com/saisrunithsilvery",
  githubProfile: "https://github.com/saisrunithsilvery",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/saisrunithsilvery",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sai-srunith-silvery-a6a936195/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:silvery.s@northeastern.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/saisrunith/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in designing, deploying, integrting and managing cloud infrastructure on AWS and Azure, ensuring high availability, scalability, and security",
        "⚡ Implemented CI/CD on AWS and Azure for automated testing and deployments, reducing manual errors and increasing efficiency",
        "⚡ Adept at implementing cloud security best practices, including identity and access management (IAM), network security, data encryption",
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
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    
    
    {
      title: "Data Science & Machine Learning",
      fileName: "DesignImg",
      skills: [
        "⚡ Worked on data load, data migration and data validation using sql and pyspark",
        "⚡ Created a chatbot for analysis of resume using NLP and ML",
        "⚡ used Postgres database to store the documents and access the share point link from the database for the respective document using python libraries. ",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Artifical Intelligence",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building dynamic, responsive froen-end with React-Redux and Angular, including SPAs & MPAs with state management, routing, PWAs, and component-based architecture",
        "⚡ Adept at building robust back-end services with Spring Boot and .NET Core, including RESTful APIs, microservices, and server-side logic",
        "⚡ Delivered full stack projects from concept to deployment, integrating databases, cloud services, and third-party APIs",
        "⚡ Experience with version control systems like Git, CI/CD pipelines and various development tools",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6FB33F",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "IntelliJ IDEA",
          fontAwesomeClassname: "devicon:intellij",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "DotNet Core",
          fontAwesomeClassname: "devicon:dotnetcore",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "SPARQL",
          fontAwesomeClassname: "vscode-icons:file-type-sparql",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "Visual Studio 2022",
          fontAwesomeClassname: "devicon:visualstudio",
          style: {
            color: "#339933",
          },
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
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Express JS",
          fontAwesomeClassname: "skill-icons:expressjs-light",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "devicon:vscode",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS S3",
          fontAwesomeClassname: "logos:aws-s3",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS RDS",
          fontAwesomeClassname: "logos:aws-rds",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS EC2",
          fontAwesomeClassname: "logos:aws-ec2",
          style: {
            color: "#3776AB",
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
      // profileLink: "https://leetcode.com/spkothari0/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://www.hackerrank.com/spkothari0",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sreenidhi Institute of Technology",
      subtitle: "B.Tech in Computer Engineering",
      logo_path: "snist-modified.png",
      alt_name: "SNIST",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied fundamental computer science subjects, including Data Structures, Algorithms, Database Management Systems, Operating Systems, Object-Oriented Design, and Artificial Intelligence.",
        "⚡ Apart from this, I have done courses on Bash Scripting, Machine Learning and Backend Development.",
        "⚡ I was in Robotics club working on image recognising using Matlab Software.",
      ],
      website_link: "https://sreenidhi.edu.in/",
    },
    {
      title: "Northeastern University Boston",
      subtitle: "M.S. in Computer Software Engineering(Information Systems)",
      logo_path: "neu.png",
      alt_name: "NEU",
      duration: "2024 - Exp 2025",
      descriptions: [
        "⚡ I have taken varity of courses related to Software Development which correspond to Application Engineering and Model Development, Web Design and Development, Program Structure and Algorithms",
        "⚡ I have participated in various hackathons, coding competitions and conferences held at MIT and at NEU.",
        "⚡ During my time at university, I was also associated with multimedia department and clubs. As part of it, I have worked in some events, and participated in art and such extracurricular activities.",
      ],
      website_link: "https://www.northeastern.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Cloud Gen AI Proffessional Certified", 
      subtitle: "- Oracle",
      logo_path: "oracle certificate.png",
      certificate_link:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E91AF8F454D97B34EB04754A5079FBC619FFAA946D47FE06E2AB1961557B3BC2",
      alt_name: "Developer Associate",
      color_code: "#8C151599",
    },
    
    {
      title: "itil 4 Foundation Certified",
      subtitle: "-  PeopleCert",
      logo_path: "ITIL.png",
      certificate_link:
        "https://www.peoplecert.org/profile",
      alt_name: "Problem Solving",
      color_code: "#0C9D5899",
    },
    {
      title: "Certified Python Developer",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.webp",
      // certificate_link:
      //   "https://www.hackerrank.com/certificates/24557500687e",
      alt_name: "Python Developer",
      color_code: "#87CEEB",
    },
    {
      title: "HPE Performer of the Quarter",
      subtitle: "- HPE",
      logo_path: "HPE Quarter recognition Award.jpg",
      // certificate_link:
      //   "",
      alt_name: "HPE Award",
      color_code: "#A100FF",
    },
    {
      title: "HPE Zerto Certified",
      subtitle: "- HPE",
      logo_path: "zerto certifiied.png",
      // certificate_link:
      //   "",
      alt_name: "HPE Zerto Certified",
      color_code: "#A100FF",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "As a  Hybrid Cloud Consultant with a strong foundation in Cloud Technologies of AWS, Azure, I have contributed significantly to multiple clients in feild of Storage and Backup Technologies of their Data Center  at Hewlett Packard Enterprise India. Over time, I have honed my skills in Cloud Technologies, Storage and Backup Technologies and I have used multiple Tools in maintaining the Backup Devies like Commvault, rubrik, HPE Data Protector  and other services. My expertise in Building automated backup solutions in python and Git Bash Scripting for Clients based on requirements ensuring regular and reliable data protection without manual intervention.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Fulltime Work",
      work: true,
      experiences: [
        [
          {
            title: "Hybrid Cloud Consultant",
            company: "Hewlett Packard Enterprise India",
            company_url: "https://www.hpe.com/in/en/home.html",
            logo_path: "HPimage.jpg",
            duration: "July 2022 - Dec 2023",
            location: "Bangalore, India",
            description:
              "As a Hybrid Cloud Consultant at Hewlett Packard Enterprise, my primary responsibilities involve managing and safeguarding the storage and backup solutions within the client's data center. This includes designing and implementing robust storage architectures to ensure data integrity and availability. I am also responsible for deploying multiple virtual servers, ensuring they are configured to meet the client's needs.",  
            jobResponsibility: {
              title: "Key Responsibilities and Achievements",
              responsibilities: [
                {
                  name: "Storage Technology",
                  data: [
                    "Design and development of Storage according to Clients requirement this includes latency, Read writes per Sec, Budget, Expected Usage. HPE offers various types of Storage devices like Alletra (For large enterprises these are superfast Storage devices ) for small and Medium Enterprises HPE offers Devices like Primera and 3PAR which have their own pros and cons.", 
                    "migration of on-premises storage systems to Hybrid cloud-based solutions, ensuring minimal downtime and seamless integration with existing infrastructure.valuated and selected appropriate cloud storage platforms (e.g., AWS S3, Azure Blob Storage) based on client needs, optimizing for performance, cost, and scalability.",
                   "Designed and implemented data transfer strategies, including the use of tools such as AWS DataSync and Azure Migrate, to ensure secure and efficient data migration.",
                   "Provided training and documentation to client teams to facilitate the transition to cloud storage and to ensure proper usage and management of the new systems.",
                   "Achieved a 20% reduction in storage costs for clients by optimizing storage configurations and implementing data lifecycle management policies.",
                   "Reduced 30% failure of Storage by regular monitoring and optimization of the Storage devices, ensuring high availability and reliability of data.",
                   "Storage Provisioning,LUN Creation and Management, Latency, Snapshot of the specific LUN, Monitoring and Optimization, Incident Management was my regular day tasks in maintans",
                   "Storage OS upgradtion, Firmware upgradtion, Patching of the Storage devices, Monitoring the Storage devices, Troubleshooting the Storage devices, Change Management, Problem Management, Capacity Management, Performance Management."
            
                  ]    },
                {
                  name: "Backup Technology",
                  data: [
                    "Developed and implemented automated backup solutions using Python and Git Bash scripting, reducing manual intervention and ensuring regular and reliable data protection.",
                    "Configured and maintained backup devices, including Commvault, Rubrik, and HPE Data Protector, ensuring data integrity and availability.",
                    "Performed regular backup testing and validation to ensure data recoverability and compliance with client requirements.",
                    "Provided technical support and troubleshooting for backup-related issues, ensuring timely resolution and minimal impact on business operations."
                  ]
                },
                {
                  name: "SAN and NAS Technology",
                  data: [
                  "Responsible for Monitoring and Configuring the Switches Connected to the Storange and Backup Devices.",
                  "This Includes Zoning of Swithces Specific to the Storage Device Monitoring the Latency, Throughput, Packet Loss, and other parameters of the Switches.",
                  ]
                },
               
              ]
            },
            technologyUsed: {
              title: "Technology and Tools Used",
              technologies: [
                {
                  name: "Storage Devices",
                  data: [
                    "Alletra", "Primera", "3PAR", "Nimble", "StoreOnce", "HPE Data Protector"
                  ]
                },
                {
                  name: "Backup Tools",
                  data: [
                     "Commvault, HPE Data Protector, Rubrik, Veeam, NetBackup"
                  ]
                },
                {
                  name: "Switches",
                  data: [
                    " Brocade, Cisco, HPE Storage Switches",
                  ]
                }
              ]
            }
          },
          {
            title: "Hybrid Cloud Engineer Intern",
            company: "Hewlett Packard Enterprise India",
            company_url: "https://www.hpe.com/in/en/home.html",
            logo_path: "HPimage.jpg",
            duration: "Dec 2020 - Dec 2022",
            location: "Bangalore, India",
            description:
              "As an Intern at HPE for 6 months of Period I am an Opportunity to Learn Basics of Multiple Technologies Some of those are Vmware, Server Linux Administration(SUSE Enterprise Linux), Windows Server 2017 administration Basics, Basics of Networking and Few Technologies of Azure required for the Project.",
            color: "#000000",
            jobResponsibility: {
              title: "Key Responsibilities and Achievements",
              responsibilities: [
                {
                  name: "Training on On-site Data Center Technologies(overview)",
                  data: [
                     "Acquired foundational knowledge in VMware, SUSE Enterprise Linux, and Windows Server 2017 administration.",
                     "Developed skills in server deployment and basic networking concepts.",
                     "Assisted in data migration projects, ensuring smooth transition and minimal downtime.",
                     "Contributed to various aspects of system maintenance and monitoring.",
                  ]
                },
                {
                  name: "Internship Project",
                  data: [
                     "Collabrated with Senior Solutions architects of the company for Configured AKS Hybrid, SQL Mi, Recourse Bridge, Microsoft Azure Backup Server on Azure Stack HCI enhancing the hybrid cloud infrastructure and ensuring robust data management and backup solutions for clients.",
                     "Constructed AKS Hybrid clusters with GPU workload support on Azure Stack HCI 23H2, enabling advanced computational tasks and improving performance for machine learning and AI applications.",
                     "Deployed Azure Stack HCI Standard & Stretched Clusters for 15 sites at various locations",
                  ]
                },
                
                
              ]
            },
            technologyUsed: {
              title: "Technology and Tools Used",
              technologies: [
                {
                  name: "Cloud",
                  data: [
                    "Azure", "Python Scripting",
                  ]
                },
                {
                  name: "Administration Tools",
                  data: [
                    "VMware", "SUSE Enterprise Linux", "Windows Server 2017", "Azure Stack HCI, Service Now Administartion",
                   
                  ]
                },
                {
                  name: "Networking",
                  data: [
                    "Basic Networking Concepts", "Switches, Routers, Firewalls",
                  ]
                }
              ]
            }
          }
        ],
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     // {
    //     //   title: "Machine Learning Intern",
    //     //   company: "TikTok Inc.",
    //     //   company_url: "https://www.tiktok.com/en/",
    //     //   logo_path: "tiktok_logo.png",
    //     //   duration: "May 2022 - Aug 2022",
    //     //   location: "San Francisco, USA",
    //     //   description:
    //     //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //     //   color: "#000000",
    //     // },

    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     // {
    //     //   title: "Google Explore ML Facilitator",
    //     //   company: "Google",
    //     //   company_url: "https://about.google/",
    //     //   logo_path: "google_logo.png",
    //     //   duration: "June 2019 - April 2020",
    //     //   location: "Hyderabad, Telangana",
    //     //   description:
    //     //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //     //   color: "#4285F4",
    //     // },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create dynamic software development projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   // title: "Publications",
//   // description: "Some of my published Articles, Blogs and Research.",
//   // avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   // data: [
//   //   {
//   //     id: "neuro-symbolic-sudoku-solver",
//   //     name: "Neuro-Symbolic Sudoku Solver",
//   //     createdAt: "2023-07-02T00:00:00Z",
//   //     description: "Paper published in KDD KiML 2023",
//   //     url: "https://arxiv.org/abs/2307.00653",
//   //   },
//   // ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "WhatsApp Image 2024-06-11 at 19.52.04_e68048a3 - Copy.jpg",
    description:
      "👋I'm easily reachable on various social platforms and typically respond within 2-3 working days.📧For swift communication, reach out via email or LinkedIn. 🎯Currently seeking internships or co-op roles, particularly in Software Development💻 and Cloud Computing☁️. Looking forward to connecting with you !!😊",
  },

  // blogSection: {
  //   // title: "Blogs",
  //   // subtitle:
  //   //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   // link: "",
  //   // avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Boston, MA, USA - 02120",
    locality: "Boston",
    country: "USA",
    region: "Massachusetts",
    postalCode: "02120",
    streetAddress: "360 Huntington Ave",
    avatar_image_path: "address_image.svg",
    location_map_link: "360 Huntington Ave, Boston, MA 02115",
  },
  phoneSection: {
    title: "Contact Number:",
    subtitle: "+1 617 407 4295",
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
  // publicationsHeader,
  // publications,
  contactPageData,
};
