const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: '/',
    title: "Yinhao'He",
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: "About | Yinhao'He",
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: "Projects | Yinhao'He",
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: "Stats | Yinhao'He",
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: "Contact | Yinhao'He",
    heading: 'CONTACT',
  },
];

export { pages, randomString };
