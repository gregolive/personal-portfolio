const personalProjects = [
  {
    title: 'bitblog',
    summary: `
      A platform for creating and managing a blog built using the MERN stack.
    `,
    tags: [
      {
        text: 'CSS',
        icon: <i className='devicon-css3-plain'></i>,
      },
      {
        text: 'Express',
        icon: <i className='devicon-express-original'></i>,
      },
      {
        text: 'Javascript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'MongoDB',
        icon: <i className='devicon-mongodb-plain'></i>,
      },
      {
        text: 'Node.js',
        icon: <i className='devicon-nodejs-plain'></i>,
      },
      {
        text: 'React',
        icon: <i className='devicon-react-original'></i>,
      },
    ],
    images: [
      {
        src: require('../img/bitblog/bitblog-home.jpg'),
        alt: 'bitblog home screen',
      },
      {
        src: require('../img/bitblog/bitblog-login.jpg'),
        alt: 'bitblog login screen',
      },
      {
        src: require('../img/bitblog/bitblog-dashboard.jpg'),
        alt: 'bitblog dashboard',
      },
      {
        src: require('../img/bitblog/bitblog-create.jpg'),
        alt: 'bitblog new post form',
      },
    ],
    color: '#fc573c',
    repo: 'https://github.com/gregolive/blog-platform',
    link: 'https://gregolive.github.io/blog-platform/',
  },
];

const openSourceProjects = [
  {
    title: 'The Odin Project',
    summary: 'An open curriculum for learning web development.',
    img: require('../img/thumbnails/odin-project.jpg'),
    link: 'https://github.com/TheOdinProject/curriculum'
  },
];

export { personalProjects, openSourceProjects };
