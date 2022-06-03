const personalProjects = [
  {
    title: 'Petbook',
    summary: `
      In development... Facebook for pets!
      A social media app with beautiful Framer Motion animations, Google and Facebook OAuth authentication, a React Typescript front-end, and more.
    `,
    tags: [
      {
        text: 'Express',
        icon: <i className='devicon-express-original'></i>,
      },
      {
        text: 'Framer Motion',
        icon: <i className='devicon-react-original'></i>,
      },
      {
        text: 'Heroku',
        icon: <i className='devicon-heroku-original'></i>,
      },
      {
        text: 'Javascript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'MaterialUI',
        icon: <i class="devicon-materialui-plain colored"></i>,
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
      {
        text: 'Styled Components',
        icon: <i className='devicon-react-original'></i>,
      },
      {
        text: 'Typescript',
        icon: <i className='devicon-typescript-plain'></i>,
      },
    ],
    images: [
      {
        src: require('../img/petbook/login.gif'),
        alt: 'petbook login animation',
      },
    ],
    color: '#069def',
    repo: 'https://github.com/gregolive/petbook',
    link: '',
  },
  {
    title: 'bitblog',
    summary: `
      A platform for creating and managing a blog, built using the MERN stack.
      User authentication is handled via a simple username & password strategy with password hashing and salting for secure storage.
      JSON Web Tokens ensure that users remain authenticated as they navigate the site.
      The responsive app features a TinyMCE rich text editor that allows for the creation of clean, properly formatted blog posts.
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
        text: 'Heroku',
        icon: <i className='devicon-heroku-original'></i>,
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
        src: require('../img/bitblog/home.jpg'),
        alt: 'bitblog home screen',
      },
      {
        src: require('../img/bitblog/login.jpg'),
        alt: 'bitblog login screen',
      },
      {
        src: require('../img/bitblog/dashboard.jpg'),
        alt: 'bitblog dashboard',
      },
      {
        src: require('../img/bitblog/post-form.jpg'),
        alt: 'bitblog new post form',
      },
    ],
    color: '#fc573c',
    repo: 'https://github.com/gregolive/blog-platform',
    link: 'https://gregolive.github.io/blog-platform/',
  },
  {
    title: "Where's Waldo",
    summary: `
      Search for Waldo and friends in this online version of the classic books.
      This is a multi-technology app with a React frontend and a Ruby on Rails backend.
      The React client deployed with Github pages makes calls to the Rails API deployed on Heroku where images, map data, and other assets are stored.
      On each of the 6 levels, users must find 4 waldo characters hidden throughout the map and are presented with a form to submit their solve time.
    `,
    tags: [
      {
        text: 'CSS',
        icon: <i className='devicon-css3-plain'></i>,
      },
      {
        text: 'Heroku',
        icon: <i className='devicon-heroku-original'></i>,
      },
      {
        text: 'Javascript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'PostgreSQL',
        icon: <i className='devicon-postgresql-plain'></i>,
      },
      {
        text: 'Rails',
        icon: <i className='devicon-rails-plain'></i>,
      },
      {
        text: 'React',
        icon: <i className='devicon-react-original'></i>,
      },
      {
        text: 'Ruby',
        icon: <i className='devicon-ruby-plain'></i>,
      },
    ],
    images: [
      {
        src: require('../img/waldo/dashboard.jpg'),
        alt: 'waldo dashboard',
      },
      {
        src: require('../img/waldo/outer-space.jpg'),
        alt: 'waldo outer space level',
      },
      {
        src: require('../img/waldo/ski-slopes.jpg'),
        alt: 'waldo ski slopes level',
      },
      {
        src: require('../img/waldo/game-over.jpg'),
        alt: 'waldo game over form',
      },
    ],
    color: '#e71a0f',
    repo: 'https://github.com/gregolive/waldo',
    link: 'https://gregolive.github.io/waldo/',
  },
  {
    title: 'Tendies Tracker',
    summary: `
      A full-stack app to track your stock holdings, created with Express, MongoDB, and more.
      The platform provides real-time stock data from finnhub to ensure that users stay up to date on their portfolio.
      Features secure user authentication with hashed and salted passwords, a dashboard that provides daily and all-time portfolio statistics, and a portfolio page with a full portfolio breakdown, down to each holding.
    `,
    tags: [
      {
        text: 'CSS',
        icon: <i className='devicon-css3-plain'></i>,
      },
      {
        text: 'EJS',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'Express',
        icon: <i className='devicon-express-original'></i>,
      },
      {
        text: 'Heroku',
        icon: <i className='devicon-heroku-original'></i>,
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
    ],
    images: [
      {
        src: require('../img/tendies-tracker/dashboard.jpg'),
        alt: 'tendies tracker dashboard',
      },
      {
        src: require('../img/tendies-tracker/dashboard2.jpg'),
        alt: 'tendies tracker dashboard 2',
      },
      {
        src: require('../img/tendies-tracker/portfolio.jpg'),
        alt: 'tendies tracker portfolio view',
      },
      {
        src: require('../img/tendies-tracker/transaction-view.jpg'),
        alt: 'tendies tracker transaction view',
      },
      {
        src: require('../img/tendies-tracker/transactions.jpg'),
        alt: 'tendies tracker all transactions',
      },
    ],
    color: '#deaf02',
    repo: 'https://github.com/gregolive/portfolio-tracker',
    link: 'https://tendies-trackr.herokuapp.com/',
  },
  {
    title: 'Retro Battleship',
    summary: `
      Take to the high seas and test your luck against the computer in the classic guessing game.
      This is a single-page application built in vanilla JavaScript using a test-driven development approach via the Jest testing framework.
      Users select a computer difficulty, place their ships and then take turns guessing locations on the opponent's board.
      Last one standing (or floating) wins!
    `,
    tags: [
      {
        text: 'CSS',
        icon: <i className='devicon-css3-plain'></i>,
      },
      {
        text: 'HTML',
        icon: <i className='devicon-html5-plain'></i>,
      },
      {
        text: 'Javascript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'Jest',
        icon: <i className='devicon-jest-plain'></i>,
      },
      {
        text: 'npm',
        icon: <i className='devicon-npm-original-wordmark'></i>,
      },
      {
        text: 'Webpack',
        icon: <i className='devicon-webpack-plain'></i>,
      },
    ],
    images: [
      {
        src: require('../img/battleship/level-select.jpg'),
        alt: 'retro battleship level select',
      },
      {
        src: require('../img/battleship/place-ships.jpg'),
        alt: 'retro battleship place ships screen',
      },
      {
        src: require('../img/battleship/player-board.jpg'),
        alt: 'retro battleship player board',
      },
      {
        src: require('../img/battleship/enemy-board.jpg'),
        alt: 'retro battleship enemy board',
      },
    ],
    color: '#8a4fff',
    repo: 'https://github.com/gregolive/battleship',
    link: 'https://gregolive.github.io/battleship/',
  },
];

const openSourceProjects = [
  {
    title: 'The Odin Project',
    summary: `
      A hands-on, open curriculum for learning web development with 3 learning paths: Foundations, Full Stack Ruby on Rails, and Full Stack Javascript.
      My contributions include updating curriculum Markdown files for typos and adding links to additional resources related to lesson topics.
      Contributing to The Odin Project has helped me to learn various aspects of Git workflow, such as opening and merging branches, creating pull requests, and opening new issues.
    `,
    images: [
      {
        src: require('../img/odin/home.jpg'),
        alt: 'odin project home screen',
      },
      {
        src: require('../img/odin/javascript.jpg'),
        alt: 'odin project javascript course',
      },
      {
        src: require('../img/odin/overview.jpg'),
        alt: 'odin project overview',
      },
    ],
    color: '#D4AE63',
    repo: 'https://github.com/TheOdinProject/curriculum',
    link: 'https://www.theodinproject.com/',
  },
];

export { personalProjects, openSourceProjects };
