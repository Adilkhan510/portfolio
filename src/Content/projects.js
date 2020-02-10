import dad from '../Images/dad.png'
import netflix from '../Images/netflix.png';
import habit from '../Images/habit.png'
import way from '../Images/way.png';
import p from '../Images/portfolio.png';
export default [
  {
    title: 'Netflix Social',
    description:
      'A Full Stack application where users can sign up and talk about their favorite movies. Collaborated with my fellow classmate on this. Full CRUD for comments on movies.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'Node.js', 'MongoDB', 'Express'],
    image: netflix,
    links: {
      github: 'https://github.com/Adilkhan510/Netflix-social',
      preview: 'https://enigmatic-meadow-90169.herokuapp.com/',
    },
  },
  {
    title: 'Habit Tracker',
    description:
      'Full Stack application where users can create and track their habits. Main objective for the app was to show data visually. Created using the MERN stack.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'ReactJS', 'MongoDB', 'Node.js', 'Express'],
    image: habit,
    links: {
      github: 'https://github.com/Adilkhan510/HabitTracker-FrontEnd',
      preview: 'Blah Blah',
    },
  },
  {
    title: 'WayFarer App',
    description:
      'A group project where the task given was to create a travel community app where users can share tips about their favorite locations around the world.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'ReactJS',
      'ES6'
    ],
    image: way,
    links: {
      github: 'https://git.generalassemb.ly/lindseyhiltner/project-wayfarer-frontend',
      preview: 'https://wayfarer-nightlife.herokuapp.com/',
    },
  },
  {
    title : 'Dad Jokes',
    description : 'An app where users can upvote/downvote jokes. Backend for the app is in currently in progress.',
    skills : [
      'HTML5',
      'CSS3',
      'JavaScript',
      'ReactJS',
      'ES6'
    ],
    image : dad,
    links : {
      github : 'https://github.com/Adilkhan510/Jokes-react',
      preview : 'https://jokes-react.herokuapp.com/'
    }
  }
  {
    title: 'AdilKhan.me',
    description : 'My portfolio app created using React. Components take a JSON and creates projects out of it. In the future I can just update the JSON file and new apps should appear.',
    image : p,
    links : {
      github : 'https://github.com/Adilkhan510/portfolio',
      preview : 'https://adilkhan.herokuapp.com/'
    }
  }
];