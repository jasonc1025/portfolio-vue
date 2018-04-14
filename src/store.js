import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [
      {
        title: 'Lead Instructor and Curriculum Developer',
        company: 'Encourage and Empower',
        // --
        skills_01_head: 'React',
        skills_01_body: 'Apollo, Axios, Enzyme, Express, Gatsby, GraphQL, Jest, MongoDB, Particles.js, Redux',
        skills_01_link: 'projects-react/',
        // --
        skills_02_head: 'Vue.js',
        skills_02_body: 'Apollo, GraphQL, Express, MongoDB, Nuxt, Stripe, SVG Grapics, TweenJs, Vuex',
        skills_02_link: 'projects-vue-js/',
        // --
        skills_03_head: 'Node.js',
        skills_03_body: 'Axios, Express, MongoDB, Mongoose, Passport, Socket.io, WebSocket',
        skills_03_link: 'projects-node-js/',
        // --
        skills_04_head: 'Robotics',
        skills_04_body: 'Arduino, Lego EV3/Next2, Rasberry Pi, BeagleBone',
        skills_04_link: 'projects-javascript-python/',
        // --
        skills_05_head: 'Backend',
        skills_05_body: 'Amazon AWS/EB, Digital Ocean NginX/Apache, Google-Firebase, Heroku, Netlify, Zeit-Now',
        skills_05_link: '',
        // --
        skills_06_head: 'Others',
        skills_06_body: 'Python ~ Bottle, Flask; JavaScript ~ Bootstrap, CSS, Highcharts, HTML, JQuery, SQL, Webpack',
        skills_06_link: '',
        // --
        skills_07_head: '',
        skills_07_body: '',
        skills_07_link: '',
        // --

        location: 'Milpitas, CA',
        timePeriod: {
          from: 'September 2006',
          to: 'Present'
        }
      }
    ],
    projects: [
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53c-03d-03d-BurgerBuilderPlus',
        title: 'Burger Builder Plus',
        headLine00: 'Fast-Food Order App: Burger Builder Plus',
        headLine01: 'React, Axios, Redux, Enzyme, Jest',
        headLine02: 'Google-Firebase',
        url: 'https://myburger-react-maxs.firebaseapp.com',
        description: 'Description'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53ka-BlogPlus',
        title: 'Blog Plus',
        headLine00: 'Blog App: Full-Stack Web Dev',
        headLine01: 'React, Gatsby, GraphQL, Particles.js (Animation), Jest',
        headLine02: 'Netlify',
        url: 'https://react-gatsby-blog-dustinc.netlify.com',
        description: 'Description'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '53p-CatchOfTheDayPlus',
        title: 'Catch of the Day Plus',
        headLine00: 'Seafood Order & Inventory App: Catch of the Day Plus',
        headLine01: 'React, CRUD (Firebase-Google), Authentication (GitHub, Twitter, FaceBook)',
        headLine02: 'Netlify',
        url: 'http://react-catchoftheday-wesbos.netlify.com/',
        description: 'Description'
      },
      {
        category: 'react-dir',
        id: 0,
        imageListLength: 1,
        slug: '37e-BookshopPlus',
        title: 'BookShop Plus',
        headLine00: 'Bookstore Order & Admin App: BookShop Plus',
        headLine01: 'Mondo, Express, React & Node (MERN)',
        headLine02: 'Amazon ~ Elastic Beanstalk (EB)',
        url: 'http://react-bookshop-marco-tomasello.nyu2gnsj37.us-west-1.elasticbeanstalk.com/',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '38c-ShoppityPlus',
        title: 'Shoppity Plus',
        headLine00: 'Clothing Order w/ Credit Card Purchasing: Shoppity Plus',
        headLine01: 'Vue, Nuxt, Vuex, Stripe (Credit Card Purchasing)',
        headLine02: 'Netlify',
        url: 'https://vuejs-shoppityplus-sarahdrasner.netlify.com/',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '38b-PizzaPlanetPlus',
        title: 'Pizza Planet Plus',
        headLine00: 'Pizza Order & Admin App: Pizza Planet Plus',
        headLine01: 'Vue, Vuex, Google-Firebase (Database), Authentication (Email/Password)',
        headLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8081/',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '73c-03f-CooperaPlus',
        title: 'Coopera Plus',
        headLine00: 'Multi-Player Web-based Game: Coopera Plus',
        headLine01: 'Vue, Socket.io, WebSocket',
        headLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'http://138.68.57.214:8082/',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37q-03f-CastleDuelPlus',
        title: 'Castle Duel Plus',
        headLine00: 'Animation-Based Game: Castle Duel Plus',
        headLine01: 'Vue : SVG Grapics, TweenJs (Animation)',
        headLine02: 'Digital Ocean ~ Linux Ubuntu',
        url: 'https://jasonc1025.github.io/VueJs-CastleDuel-GuillaumeC/ ',
        description: 'Description'
      },
      {
        category: 'vuejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37j-Sec18-StockTraderPlus',
        title: 'Stock Trader Plus',
        headLine00: 'Stock-Trading Simulation Game: Stock Trader Plus',
        headLine01: 'Vue, Vuex, Bootstrap',
        headLine02: 'Amazon S3; Digital Ocean ~ NginX',
        url: 'http://stocktrader-vuejs-maxs.s3-website-us-west-1.amazonaws.com/',
        description: 'Description'
      },
      {
        category: 'nodejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '37l-DangThatsDeliciousPlus',
        title: 'Now That\'s Delicious Plus',
        headLine00: 'Favorite Store Map & Review App: Now That\'s Delicious',
        headLine01: 'Node, Axios, Express, MongoDB, Mongoose, Passport',
        headLine02: 'Heroku; Now-Zeit',
        url: 'https://dang-thats-delicious-jwc.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'nodejs-dir',
        id: 0,
        imageListLength: 1,
        slug: '17-10g-ObsidioPlus',
        title: 'Obsidio Plus',
        headLine00: 'Multi-Player Web-based Game: Obsidio Plus',
        headLine01: 'Node, Express, Socket.io',
        headLine02: 'Heroku',
        url: 'https://obsidio-alvin-l.herokuapp.com/',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: '11h-ArduBlockly-EandE',
        title: 'ArduBlockly-EandE',
        headLine00: '* AWARD WINNING * Arduino Visual/Textual Coder: ArduBlockly-EandE',
        headLine01: 'Node, Google-Blockly, Electron',
        headLine02: 'Python Bottle & Digital Ocean ~ Ubuntu',
        url: 'http://138.68.57.214:8001/ardublockly/index.html',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: 'Siemens-CIPortal-ThreeAmigoes',
        title: 'Energy IP ~ CI Portal',
        headLine00: '* NEXT GEN UI/UX * Siemens User-Experience (UX) Prototype: Energy IP ~ C&I Portal',
        headLine01: 'JavaScript, Highcharts, HTML, CSS',
        headLine02: 'Netlify',
        url: 'https://siemens-cipportal-trunk.netlify.com',
        description: 'Description'
      },
      {
        category: 'javascript-python-dir',
        id: 0,
        imageListLength: 1,
        slug: 'Siemens-EnergyIP-SDPAnalyzer-DemsPortal',
        title: 'Energy IP ~ DEMS Portal',
        headLine00: '* BIG DATA - ANALYTICS * Siemens User-Experience (UX) Prototype: Energy IP ~ DEMS Portal',
        headLine01: 'JavaScript, Highcharts, HTML, CSS',
        headLine02: 'Netlify',
        // For Viewing Only, No Live Demo to Interact With
        url: '',
        description: 'Description'
      }
    ]
  }
})
