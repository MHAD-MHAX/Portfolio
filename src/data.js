// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
 import newLogo from "./images/navbar.png";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import SDL from "./images/SDL.png";
import Todo from "./images/Todo.png";
import Yagitech from "./images/Yagitech.png";
import Prop from "./images/Prop.png";

import Business from "./images/Business Creatives.png"





// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "MHAD-MHAX";

// Navbar Logo image
export const navLogo = newLogo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API. I am dedicated to bringing designs to life and enhancing user experiences through clean and efficient code.";
  

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/1MwWzCxCU3IsQ1xOwAnVNdO7-AlPgTlWO0FLUtKbG_Ts/edit?usp=drive_link";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["SDL-WEBSITE", "SAAS-project", "Yagitech", "Blog"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "SDL-WEBSITE",
    image: SDL,
  },
  {
    name: "SAAS-project",
    image: Business,
  },
  {
    name: "YAGITECH",
    image: Yagitech,
  },
  {
    name: "BLOG",
    image: Prop,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mnqkkppr";
