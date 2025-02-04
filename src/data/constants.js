import tuplogo from '../assets/Technological_University_of_the_Philippines_Seal.png';
import kodacamp from '../assets/kodacamp.png';
import okkda from '../assets/okkda_asia_technologies.PNG';
import tailwindcssLogo from '../assets/TailwindCSS_logo.png';
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
import rubyOnRails from '../assets/Ruby on Rails.png';
import wordPress from '../assets/WordPress.png';
import git from '../assets/Git.png';
import github from '../assets/github-mark-white.png';
import docker from '../assets/Docker.png';
import vscode from '../assets/Visual Studio Code (VS Code).png';
import postman from '../assets/Postman.png';
import rubymine from '../assets/RubyMine.png';
import datagrip from '../assets/DataGrip.png';
import portfolio from '../assets/Portfolio.PNG';
import tictactoe from '../assets/Tictactoe.PNG';
import musicPlayer from '../assets/music-player.PNG';

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
                image: tailwindcssLogo,
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
                image: rubyOnRails,
            },
            {
                name: "WordPress",
                image: wordPress,
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
      title: "TicTacToe",
      date: "Jun 2023 - Jul 2023",
      description:
        "Tic-Tac-Toe is a mobile game designed to provide an engaging and fun experience for users to play the classic Tic-Tac-Toe game on their devices. Built using React Native, TypeScript, and Ruby, the app features a simple yet interactive design that allows two players to challenge each other in a game of strategy and quick thinking. It provides a seamless experience for both Android and iOS users, while the backend built in Ruby ensures that game data is securely stored and accessible. Whether you’re playing casually with friends or challenging others, Tic-Tac-Toe brings a timeless game to your fingertips.",
      image: tictactoe,
      tags: [
        "React Native",
        "Typescript",
        "Ruby",
        "CSS"
      ],
      category: "android app",
      github: "https://github.com/cdrk811/tictactoe",
      webapp: "none",
    },
    {
      id: 0,
      title: "Music Player",
      date: "Apr 2023 - May 2023",
      description:
        "Developed a cross-platform music player app using React Native and TypeScript, allowing users to play, pause, skip tracks, and create playlists. Integrated native modules for audio playback and designed an intuitive user interface. Utilized Android and iOS emulators for testing and optimized the app for seamless performance on both platforms",
      image: musicPlayer,
      tags: ["React Native", "Typescript", "Ruby", "CSS"],
      category: "android app",
      github: "https://github.com/cdrk811/music-player",
      webapp: "none",
    },
    {
      id: 1,
      title: "Portfolio",
      date: "January 2025 - February 2025",
      description:
        "My Portfolio is a personal website built with React.js, showcasing my skills, projects, and experience. The site features smooth animations and transitions, providing an engaging user experience. With a clean, modern design, it's tailored to highlight my work, from web development projects to personal achievements.",
      image: portfolio,
      tags: [
        "React Js",
        "Framer-motion",
        "Styled Components",
        "Animation",
        "EmailJS",
        "Icons Material",
        "CSS"
      ],
      category: "web app",
      github: "https://github.com/cdrk811/Portfolio",
      webapp: "https://cdrk811.github.io/Portfolio",
    }
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