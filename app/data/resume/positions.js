const positions = [
  {
    company: 'Cameo',
    position: 'Software Engineering Intern',
    link: 'https://www.cameo.com/',
    daterange: 'June 2021 - September 2021',
    points: [
      'Developed, shipped, and operated web/mobile app notification system which served 6 million customers with 99.9% successful delivery rate, using OneSignal SDK, Amazon SQS, and React Native. ',
      'Built and scaled Redis/MongoDB batch synchronization services by creating Pub/Sub pattern events/handlers using Amazon SQS, running in standalone AWS EC2 pod.',
      'Decreased p99/p95 latency over 21% by implementing Redis caching and MongoDB connection pooling, and isolating db-intensive tasks on different EC2 pods.',
      'Increased scalability by isolating one of the high dynamic requests core products in a separate cloud service CockroachDB Cloud, which saved operating costs by 35%.',
      'Stretched myself, teaching myself typeORM, and stepped up to lead the work of replacing expensive MongoDB aggregations with fast CockroachDB SQL joins using TypeScript.',
      'Improved reliability and testing practices by integrating Datadog dd-trace and monitoring alerts, running load tests using loader.io, and refactoring 30+ unit and e2e tests with Jest and Detox.',
    ],
  },
  {
    company: 'Ardent Labs',
    position: 'Software Developer Intern',
    link: 'https://www.ardentlabs.io/',
    daterange: 'April 2020 - June 2021',
    points: [
      'Redesigned and launched frontend with modern JavaScript, React, React-hooks, and Material-UI which boosted platform review score.',
      'Developed and maintained backend services for online teaching management platform using Node.js, TypeScript, Flow, and RethinkDB.',
      'Stepped up and refactored 60% backend code by migrating into TypeScript, replacing REST APIs with GraphQL.',
      'Enhanced maintainability of code by isolating legacy code into different domains and migrating into individual services. This improved the backend team’s efficiency by more than 20%.',
      'Integrated CI/CD with Drone; followed Git Flow for version control; used Jira to realize Agile development.',
    ],
  },
  {
    company: 'Ardent Academy',
    position: 'Developer and Trainer',
    link:
      'http://www.ardentacademy.com/?gclid=CjwKCAjw9vn4BRBaEiwAh0muDPhA5t8eTpzBpMEMe1MeMLIcuky2OcVV9BDoYLEHD3xtGGaWV-420hoCdpYQAvD_BwE',
    daterange: 'July 2020 - September 2020',
    points: [
      'Designed a month-long Python for AI curriculum with 10+ projects and a strong TensorFlow2/tf.keras focus.',
      'Trained 15 participants from no background to have good knowledge of Python/AI and being able to build image classification applications in a month.',
    ],
  },
  {
    company: 'China Construction Bank (CCB)',
    position: 'Software Engineering Intern',
    link: 'http://www.ccb.com/en/home/indexv3.html',
    daterange: 'June 2019 - Auguest 2019',
    points: [
      'Reduced 85% support ticket rate by revamping legacy frontend with JavaScript, CSS, jQuery, Thymeleaf; utilized Spring, SpringMVC, MyBatis for backend; used Maven for constructing project, SVN for version control.',
    ],
  },
];

export default positions;
