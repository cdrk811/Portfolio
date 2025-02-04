import tuplogo from '../assets/Technological_University_of_the_Philippines_Seal.png';
import kodacamp from '../assets/kodacamp.png';
import okkda from '../assets/okkda_asia_technologies.PNG';
import tailwindcss_logo from '../assets/TailwindCSS_logo.png';
import figma from '../assets/Figma.png';
import jquery from '../assets/jQuery.png';
import reactjs from '../assets/React.png';
import nextjs from '../assets/Next.js.png';
import javascript from '../assets/JavaScript.png';
import bootstrap from '../assets/Bootstrap.png';
import css3 from '../assets/CSS3.png';
import html5 from '../assets/HTML5.png';
import mysql from '../assets/MySQL.png';
import postgresql from '../assets/PostgresSQL.png';
import firebase from '../assets/Firebase.png';
import php from '../assets/PHP.png';
import ruby from '../assets/Ruby.png';
import laravel from '../assets/Laravel.png';
import ruby_on_rails from '../assets/Ruby on Rails.png';
import wordpress from '../assets/WordPress.png';
import git from '../assets/Git.png';
import github from '../assets/github-mark-white.png';
import docker from '../assets/Docker.png';
import vscode from '../assets/Visual Studio Code (VS Code).png';
import postman from '../assets/Postman.png';
import rubymine from '../assets/RubyMine.png';
import datagrip from '../assets/DataGrip.png';

export const Bio = {
    name: "Cedrick B. Valencia",
    roles: [
        "Software Engineer",
        "Backend Developer",
        "Frontend Developer"
    ],
    description: "I am experienced software engineer specializing in Ruby on Rails development. Skilled in building web applications, creating RESTful APIs, optimizing databases, and integrating third-party services. Passionate about delivering clean, maintainable, and user-friendly solutions while collaborating effectively with teams to achieve project goals. Strong engineering professional holding a Bachelor of Technology in Information Technology from the Technological University of the Philippines.",
    github: "https://github.com/cdrk811",
    resume: "https://drive.google.com/uc?export=download&id=1iIz88-et2r0JuMpRcOL1wdZhkm0LdL6l",
    linkedin: "https://www.linkedin.com/in/cedrick-v-b79253233/",
    // twitter: "",
    // insta: "",
    // facebook: ""
};

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "ReactJS",
                image: reactjs,
            },
            {
                name: "NextJS",
                image: nextjs,
            },
            {
                name: "HTML",
                image: html5,
            },
            {
                name: "CSS",
                image: css3,
            },
            {
                name: "JavaScript",
                image: javascript,
            },
            {
                name: "Bootstrap",
                image: bootstrap,
            },
            {
                name: "TailwindCSS",
                image: tailwindcss_logo,
            },
            {
                name: "JQuery",
                image: jquery,
            },
            {
                name: "Figma",
                image: figma,
            }
            
        ]
    },
    {
        title: "Backend",
        skills: [
            {
                name: "MySQL",
                image: mysql,
            },
            {
                name: "PostgreSQL",
                image: postgresql,
            },
            {
                name: "Firebase",
                image: firebase,
            },
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            {
                name: "PHP",
                image: php,
            },
            {
                name: "Ruby",
                image: ruby,
            },
            {
                name: "JavaScript",
                image: javascript,
            }
        ]
    },
    {
        title: "Frameworks & CMS",
        skills: [
            {
                name: "Laravel",
                image: laravel,
            },
            {
                name: "Ruby on Rails",
                image: ruby_on_rails,
            },
            {
                name: "WordPress",
                image: wordpress,
            },
        ]
    },
    {
        title: "Other Tools",
        skills: [
            {
                name: "Git",
                image: git,
            },
            {
                name: "Github",
                image: github,
            },
            {
                name: "Docker",
                image: docker,
            },
            {
                name: "VS Code",
                image: vscode,
            },
            {
                name: "Postman",
                image: postman,
            },
            {
                name: "Figma",
                image: figma,
            },
            {
                name: "Rubymine",
                image: rubymine,
            },
            {
                name: "Datagrip",
                image: datagrip,
            },
        ]
    }
];

export const experiences = [
    {
        id: 0,
        img: kodacamp,
        role: "Backend Developer",
        company: "Secure Smarter Services Inc.",
        date: "June 2022 - December 2024",
        descriptions: [
            "Integrated third-party services, including payment gateways, SMS notification systems, and game providers, ensuring smooth communication and security across platforms",
            "Designed and optimized database structures, including schema design, indexing, and query performance.",
            "Established coding standards and guidelines for junior software engineers to maintain consistency, providing feedback to ensure adherence to best practices.",
            "Configured and set up Capistrano for automated deployments, streamlining the deployment process to ensure seamless updates to staging and production environments.",
            "Monitored and maintained Sidekiq, a background job processor in Rails, to manage tasks like sending emails, processing payments, and generating reports."
        ],
        skills: [
          "Ruby on Rails",
          "Javascript",
          "CSS",
          "Bootstrap",
          "TailwindCSS",
          "Ajax",
          "Stimulus JS",
          "JQuery",
          "MySQL",
          "Docker",
          "Postman",
          "WordPress"
        ],
        doc: "",
      },
      {
        id: 0,
        img: okkda,
        role: "PHP Programmer",
        company: "Okkda Asia Technologies Inc.",
        date: "September 2019 - July 2021",
        descriptions: [
          "Experienced in PHP for web development, with and without the Laravel Framework.",
          "Integrated third-party services, including payment gateways, and game providers",
          "Responsible for enhancing, maintaining, and optimizing web applications.",
          "Develop applications that are compatible with both desktop and mobile views.",
          "Set up and configure PCs, laptops, company phones, and printers.",
          "Conduct regular checks and maintenance of the office CCTV system."
        ],
        skills: [
          "PHP",
          "Laravel",
          "HTML/CSS",
          "Bootstrap",
          "Javascript",
          "Ajax",
          "MySQL",
          "jQuery",
          "Postman",
          "WordPress"
        ],
        doc: "",
      },
]

export const projects = [
    {
      id: 9,
      title: "Trackify",
      date: "Jun 2023 - Jul 2023",
      description:
        "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
      image:
        "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
      tags: [
        "Docker",
        "AWS",
        "DuckDNS",
        "Eslint",
        "Husky",
        "CI/CD",
        "React Js",
        "MongoDb",
        "Node Js",
        "Express Js",
        "Redux",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/Trackify",
      webapp: "https://trackify.duckdns.org",
    },
    {
      id: 0,
      title: "Podstream",
      date: "Apr 2023 - May 2023",
      description:
        "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
      image:
        "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
      tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
      category: "web app",
      github: "https://github.com/rishavchanda/Podstream",
      webapp: "https://podstream.netlify.app/",
      member: [
        {
          name: "Rishav Chanda",
          img: "https://avatars.githubusercontent.com/u/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
          github: "https://github.com/rishavchanda/",
        },
        {
          name: "Upasana Chaudhuri",
          img: "https://avatars.githubusercontent.com/u/100614635?v=4",
          linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
          github: "https://github.com/upasana0710",
        },
      ],
    },
    {
      id: 1,
      title: "Vexa",
      date: "Oct 2022 - Present",
      description:
        "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
      image:
        "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
      tags: [
        "React Js",
        "MongoDb",
        "Node Js",
        "Express Js",
        "Redux",
        "NodeMailer",
      ],
      category: "web app",
      github: "https://github.com/rishavchanda/Project-Management-App",
      webapp: "https://vexa-app.netlify.app/",
    },
    {
      id: 2,
      title: "Brain Tumor Detection",
      date: "Jan 2023 - Mar 2023",
      description:
        "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
      image:
        "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
      tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
      category: "machine learning",
      github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
      webapp: "https://brain-tumor.netlify.app/",
      member: [
        {
          name: "Rishav Chanda",
          img: "https://avatars.githubusercontent.com/u/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
          github: "https://github.com/rishavchanda/",
        },
        {
          name: "Upasana Chaudhuri",
          img: "https://avatars.githubusercontent.com/u/100614635?v=4",
          linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
          github: "https://github.com/upasana0710",
        },
      ],
    },
    {
      id: 3,
      title: "Buckoid",
      date: "Dec 2021 - Apr 2022",
      description:
        "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
      image:
        "https://camo.githubusercontent.com/fbf405040ae86b5d4a40f24e4ac034982cb8c0e2d850560ba64527997b258be8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
      tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
      category: "android app",
      github: "https://github.com/rishavchanda/Buckoid-Android-App",
      webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
    },
    {
      id: 10,
      title: "Job Finding App",
      date: "Jun 2023 - Jul 2023",
      description:
        "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
      image:
        "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
      tags: ["React Native", "JavaScript", "Axios"],
      category: "android app",
      github: "https://github.com/rishavchanda/Job-finder-App",
      webapp: "https://github.com/rishavchanda/Job-finder-App",
    },
    {
      id: 4,
      title: "Whatsapp Clone",
      date: "Jul 2021",
      description:
        "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
      tags: ["React Js", "Firebase", "Firestore", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
      webapp: "https://whatsapp-clone-rishav.web.app",
    },
    {
      id: 5,
      title: "Todo Web App",
      date: "Jun 2021",
      description:
        " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
      image:
        "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
      tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Todo-Web-App",
      webapp: "https://rishav-react-todo.netlify.app/",
    },
    {
      id: 6,
      title: "Breaking Bad",
      date: "Jun 2021",
      description:
        "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
      image:
        "https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
      tags: ["React Js", "API", "Axios", "Node JS"],
      category: "web app",
      github: "https://github.com/rishavchanda/Breaking-Bad",
      webapp: "https://breaking-bad-webapp.netlify.app",
    },
    {
      id: 7,
      title: "Quiz App",
      date: "Dec 2020 - Jan 2021",
      description:
        "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
      tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
      category: "android app",
      github: "https://github.com/rishavchanda/Quiz-Earn",
      webapp: "https://github.com/rishavchanda/Quiz-Earn",
    },
    {
      id: 8,
      title: "Face Recognition",
      date: "Jan 2021",
      description:
        "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
      image:
        "https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",
      tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
      category: "machine learning",
      github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
      webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
    },
  ];

  export const educations = [
    {
      id: 0,
      img: tuplogo,
      school: "Technological University of the Philippines - Taguig Campus",
      date: "2017 - 2019",
      desc: "I completed my Bachelor's degree in Information Technology at Technological University of the Philippines.",
      degree: "Bachelor of Technology - BTech, Information Technology",
    },
    {
      id: 1,
      img: tuplogo,
      school: "Technological University of the Philippines - Taguig Campus",
      date: "2014 - 2017",
      desc: "I completed my Computer Engineering at Technological University of the Philippines.",
      degree: "Computer Engineering Technology (CoET)",
    }
  ];