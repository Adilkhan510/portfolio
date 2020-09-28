import way from '../Images/way.png'
import netflix from '../Images/netflix.png';
import habit from '../Images/habit.png'
import p from '../Images/portfolio.png';
import pic from '../Images/pic3.png'
import portfolio from '../Images/portfolio2.png'
import movie from '../Images/movieMax.png'
export default [
  {
    title: 'Movie Max',
    description: 'An fullstack movie database app where users have the ability to get information about specific movies and have the ability to add it to their favorites.',
    skills: [
      'Material-Ui',
      'CSS3',
      'JavaScript',
      'ReactJS',
      'Node',
      'Express',
      'MongoDB',
      'ES6'
    ],
    image: movie,
    links: {
      github: 'https://github.com/Adilkhan510/MovieMax',
      preview: 'https://moviemax-2020.herokuapp.com/'
    }
  },
  {
    title: 'Portfolio',
    description: 'My personal portfolio website. Took advantage of reacts component usability to avoid making seperate cards for each of my projects.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'ReactJS',
      'ES6'
    ],
    image: portfolio,
    links: {
      github: 'https://github.com/Adilkhan510/portfolio',
      preview: 'https://adilkhan.me'
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
    title: 'Covid-19 Tracker',
    description: 'Corona virus tracker created using Material-Ui, JavaScript, and React. Data is pulled from a third-party api and passed down to the different components.',
    skills: [
      'Material-Ui',
      'CSS3',
      'JavaScript',
      'ReactJS',
      'ES6'
    ],
    image: pic,
    links: {
      github: 'https://github.com/Adilkhan510/Corona-virus-Tracker',
      preview: "https://covid-19-trackr.herokuapp.com/"
    }
  },
];