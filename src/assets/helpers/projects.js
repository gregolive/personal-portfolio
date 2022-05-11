const personalProjects = [
  {
    title: 'bitblog',
    summary: 'A social media app reminiscent of Facebook.',
    tags: [
      '',
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
