import dad from '../Images/dad.png'
import netflix from '../Images/netflix.png';
import habit from '../Images/habit.png'
import p from '../Images/portfolio.png';
export default [
  {
    title: 'AdilKhan.me',
    description : 'My portfolio app created using React. Components take a JSON and creates projects out of it. In the future I can just update the JSON file and new apps should appear.',
    skills : [
      'HTML5',
      'CSS3',
      'JavaScript',
      'ReactJS',
      'ES6'
    ],
    image : p,
    links : {
      github : 'https://github.com/Adilkhan510/portfolio',
      preview : 'https://adilkhan.me'
    }
  },
  {
    title: 'Habit Tracker',
    description:
      "Created user stories, sketched out wireframes, and incorporated RESTful API methods to develop full stack application allowing users to input and track their daily habits data.",
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'ReactJS', 'MongoDB', 'Node.js', 'Express'],
    image: habit,
    links: {
      github: 'https://github.com/Adilkhan510/HabitTracker-FrontEnd',
      preview: 'Blah Blah',
    },
  },
  {
    title: 'Netflix Social',
    description:
      'A Full Stack application where users can sign up and talk about their favorite movies. Collaborated with my fellow classmate on this. Full CRUD for comments on movies. Note :This project is still a work in progress.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'Node.js', 'MongoDB', 'Express'],
    image: netflix,
    links: {
      github: 'https://github.com/Adilkhan510/Netflix-social',
      preview: 'https://enigmatic-meadow-90169.herokuapp.com/',
    },
  },
];