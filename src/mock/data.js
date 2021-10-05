import { nanoid } from 'nanoid';

// HEAD DATA | HTML HEAD TAG
export const headData = {
  title: 'Alex Bramall | Technical Project Manager', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website', // e.g: Welcome to my website
};

// HERO DATA
/*
export const heroData = {
  title: 'Developer | Ecommerce',
  name: 'Alex Bramall',
  subtitle: 'Front End Dev',
  cta: 'Contact',
};
*/

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Lipson.png',
    title: 'Lipson Dental Group',
    info: 'Role: Web Project Manager & Developer',
    info2: '',
    url: 'https://lipsondentalgroup.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nomad.png',
    title: 'Nomad Goods',
    info: 'Role: Web Systems Manager',
    info2:
      ' Headless Ecommerce website utilizing the Shogun Frontend platform. Shopify Top 100 Ecommerce website',
    url: 'https://nomadgoods.com/',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Dr. Reyes-Viruet',
    info: 'Role: Web Project Manager & Developer',
    info2: '',
    url: 'https://dentistinfortmyers.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alex@producedbybrams.com',
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
      name: 'instagram',
      url: 'https://www.instagram.com/producedbybrams/',
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
