import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [
      {
        title: 'Developer II, Web Development',
        company: 'Shure Incorporated',
        location: 'Niles, IL',
        timePeriod: {
          from: 'August 2016',
          to: 'Present'
        }
      },
      {
        title: 'Specialist I, Web Marketing',
        company: 'Shure Incorporated',
        location: 'Niles, IL',
        timePeriod: {
          from: 'August 2014',
          to: 'August 2016'
        }
      },
      {
        title: 'Intern, Web Marketing',
        company: 'Shure Incorporated',
        location: 'Niles, IL',
        timePeriod: {
          from: 'May 2014',
          to: 'August 2014'
        }
      },
      {
        title: 'Front-end Developer',
        company: 'CINCS',
        location: 'New York, NY',
        timePeriod: {
          from: 'April 2014',
          to: 'May 2014'
        }
      },
      {
        title: 'Intern, Front-end Developer',
        company: 'Carbon Credit Capital',
        location: 'New York, NY',
        timePeriod: {
          from: 'January 2014',
          to: 'May 2014'
        }
      },
      {
        title: 'Teaching Assistant',
        company: 'State University of New York at Oswego',
        location: 'Oswego, NY',
        timePeriod: {
          from: 'January 2012',
          to: 'May 2012'
        }
      },
      {
        title: 'Sports Photographer',
        company: 'State University of New York at Oswego',
        location: 'Oswego, NY',
        timePeriod: {
          from: 'August 2011',
          to: 'December 2012'
        }
      }
    ],
    projects: [
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53c-03d-03d-BurgerBuilderPlus',
        title: 'Burger Builder',
        headerLine00: 'Fast-Food Order App: Burger Builder',
        headerLine01: 'React, Axios, Redux, Enzyme, Jest',
        headerLine02: 'Google-Firebase',
        url: 'https://myburger-react-maxs.firebaseapp.com',
        description: 'Burger Builder'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53ka-BlogPlus',
        title: 'Blog',
        headerLine00: 'Blog App: Full-Stack Web Dev',
        headerLine01: 'React, Gatsby, GraphQl, Particles.js (Animation), Jest',
        headerLine02: 'Netlify',
        url: 'https://react-gatsby-blog-dustinc.netlify.com',
        description: 'Blog'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53p-CatchOfTheDayPlus',
        title: 'Catch of the Day',
        headerLine00: 'Seafood Order & Inventory App: Catch of the Day',
        headerLine01: 'React, CRUD (Firebase-Google), Authentication (GitHub, Twitter, FaceBook)',
        headerLine02: 'Netlify',
        url: 'http://react-catchoftheday-wesbos.netlify.com/',
        description: 'Catch of the Day'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '37e-BookshopPlus',
        title: 'BookShop',
        headerLine00: 'Bookstore Order & Admin App: BookShop',
        headerLine01: 'Mondo, Express, React & Node (MERN)',
        headerLine02: 'Amazon ~ Elastic Beanstalk (EB)',
        url: 'http://react-bookshop-marco-tomasello.nyu2gnsj37.us-west-1.elasticbeanstalk.com/',
        description: 'Bookshop'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '38c-ShoppityPlus',
        title: 'Shoppity',
        headerLine00: 'Clothing Store w/ Credit Card Purchasing: Shoppity',
        headerLine01: 'Vue, Nuxt, Vuex, Stripe (Credit Card Purchasing)',
        headerLine02: 'Netlify',
        url: 'https://vuejs-shoppityplus-sarahdrasner.netlify.com/',
        description: 'Shoppity'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '38b-PizzaPlanetPlus',
        title: 'Pizza Planet',
        headerLine00: '',
        headerLine01: 'Vue, Vuex, Google-Firebase (Database)',
        headerLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8081/',
        description: 'Pizza Planet'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '73c-03f-CooperaPlus',
        title: 'Coopera',
        headerLine00: '',
        headerLine01: 'Vue, Socket.io, WebSocket',
        headerLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8082/',
        description: 'Coopera'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37q-03f-CastleDuelPlus',
        title: 'Castle Duel',
        headerLine00: '',
        headerLine01: 'Vue : SVG Grapics, TweenJs (Animation)',
        headerLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'https://jasonc1025.github.io/VueJs-CastleDuel-GuillaumeC/ ',
        description: 'Castle Duel'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37j-Sec18-StockTraderPlus',
        title: 'Stock Trader',
        headerLine00: '',
        headerLine01: 'Vue, Vuex, Bootstrap',
        headerLine02: 'Amazon S3; Digital Ocean ~ NginX',
        url: 'http://stocktrader-vuejs-maxs.s3-website-us-west-1.amazonaws.com/',
        description: 'Stock Trader'
      },
      {
        category: 'nodejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37l-DangThatsDelicious',
        title: 'Now That\'s Delicious',
        headerLine00: '',
        headerLine01: 'Node, Axios, Express, MongoDB, Mongoose, Passport',
        headerLine02: 'Heroku; Now-Zeit',
        url: 'https://dang-thats-delicious-jwc.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'nodejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '17-10g-ObsidioPlus',
        title: 'Obsidio',
        headerLine00: '',
        headerLine01: 'Node, Express, Socket.io',
        headerLine02: 'Heroku',
        url: 'https://obsidio-alvin-l.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: '11h-ArduBlockly',
        title: 'ArduBlockly-EandE',
        headerLine00: '',
        headerLine01: 'Node, Google-Blockly, Electron',
        headerLine02: 'Python Bottle & Digital Ocean ~ Ubuntu',
        url: 'http://138.68.57.214:8001/ardublockly/index.html',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: '11h-ArduBlockly',
        title: 'CI Portal',
        headerLine00: '',
        headerLine01: 'JavaScript, HTML, CSS',
        headerLine02: 'Netlify',
        url: 'https://siemens-cipportal-trunk.netlify.com',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: '11h-ArduBlockly',
        title: 'Energy IP: SDP Analyzer',
        headerLine00: '',
        headerLine01: 'JavaScript, HTML, CSS',
        headerLine02: 'Netlify',
        url: 'https://siemens-energyip-trunk-eipsdpanalyzer.netlify.com',
        description: 'Description'
      }
    ]
  }
})
