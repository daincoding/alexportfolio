import project1 from "../assets/Images/project-1.png";
import project2 from "../assets/Images/project-2.png";
import project3 from "../assets/Images/project-3.png";
import project4 from "../assets/Images/project-4.png";

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Student - Fullstack Dev. (Education)",
    company: "DBE Academy",
    description: `I’m learning all about web development using a variety of tools. The program emphasizes a hands-on approach, and I work on multiple side projects to deepen my understanding of each tool.`,
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "php", "MySQL / SQLite", "Tailwind CSS", "Chakra UI", "Bootstrap", "Git", "Notion"],
  },
  {
    year: "2020 - Present",
    role: "Freelancer",
    company: "dain. / Sound Designer & Composer",
    description: `Creating Music for people and for myself since multiple years. Also taking commissions especially for Streamers, providing high quality alerts and songs for their projects. Offering recording sessions and helping costumers realizing their projects.`,
    technologies: ["Ableton", "Reaper", "DaVinci", "Audition", "Adobe"],
  },
  {
    year: "2022 - 2024",
    role: "Sound Designer & Composer / Costumer Support",
    company: "Blankhans GmbH",
    description: `Took care of everything that has to do with Sound. Recording, creating and also implementation into the project using the Unreal Engine. Worked also on Mixing and Mastering everything for the multiplayer game Coreborn as well as some smaller projects in UEFN. Also took responsibility of Costumer Support as well as Community Support.`,
    technologies: ["Unreal Engine", "Figma", "Ableton", "Reaper", "DaVinci", "Audition", "Jira"],
  },
  {
    year: "2015 - 2022",
    role: "Store Manager",
    company: "LIDL GmbH & Co. KG.",
    description: `Worked on a local town store with a high intensity of costumers. Managed shifts on a day to day basis reaching the high quality goals. Started as a Job next to my studies. `,
    technologies: [],
  },
  {
    year: "2016",
    role: "Eventmanager (Internship)",
    company: "Living Concerts",
    description: `Learnd how to and managed concerts in the scale between 200 till 2500 people.`,
    technologies: [],
  },
  {
    year: "2014 - 2017",
    role: "Student (Bachelor) - Eventmanagement & Entertainment (Education)",
    company: "Fachhochschule des Mittelstands Hannover",
    description: `Got my Bachelor in Eventmanagement & Entertainment`,
    technologies: ["Notion"],
  },
  {
    year: "2014",
    role: "Student - Abitur (Education)",
    company: "Klaus-Harms-Schule Kappeln",
    description: `Highest school education in Germany.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Tailwind CSS", "Figma", "JavaScript"],
    link: 'https://alexander-panske.com',
  },
  {
    title: "Music Portfolio",
    image: project2,
    description:
      "My music portfolio website, where I focused on using minimal JavaScript and primarily HTML and CSS.",
    technologies: ["HTML", "CSS"],
    link: 'https://dainsounds.netlify.app/',
  },
  {
    title: "Hitless Guides",
    image: project3,
    description:
      "A Website project for Team Hitless an online community for challenge gaming. The goal is to create a place where you find all the guides and tutorials for your challenge.",
    technologies: ["HTML", "CSS", "React", "TypeScript", "Vite", "ChakraUI"],
    link: 'https://hitlessguides.vercel.app/',
  },
  {
    title: "Music Projects (dain. / 90 Miles / Toyou)",
    image: project4,
    description:
      "52 official released Songs - Over 12 Million Streams in total - 2 Remix Contest Wins: All my music projects together!",
    technologies: ["Ableton", "Audition", "Adobe", "Affinity", "Notion"],
    link: 'https://linktr.ee/dainspotify',
  },
];

export const CONTACT = {
  location: "Hanover, Germany",
  phoneNo: "+49 17672796953 ",
  email: "alexander.panske@yahoo.com",
};
