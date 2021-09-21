import { nanoid } from 'nanoid';

// HEAD DATA | HTML HEAD TAG
export const headData = {
  title: 'Bramall Codes', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Alex Bramall Persoanl Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Project Manager | Web Developer',
  name: 'Alex Bramall',
  subtitle: 'E-Commerce Consultant',
  cta: 'Contact',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne: 'Paragraph about a project that I did.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Lipson.png',
    title: 'Lipson Dental Group',
    info: 'Wordpress Website',
    info2: '',
    url: 'https://lipsondentalgroup.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/producedbybrams',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alexanderbramall',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Alex-Bramall',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
