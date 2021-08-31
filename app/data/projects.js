// TODO Add a couple lines about each project
const data = [
  {
    title: "Kafka, HBase based Coupon Distribution System",
    subtitle: "Coupon distribution system based on Kafka, HBase & Spring Boot.",
    link: "https://github.com/YinhaoHe/Coupon-Distribution-System",
    image: "images/projects/couponDistributionSystem.jpg",
    date: "2020-06",
    desc:
      "Built the system with Kafka, HBase and MySQL, Redis as cache, Spring Boot for backend service.  " +
      "Created multiple Kafka brokers for collecting customers behavior and coupon consumption. " +
      "Used MySQL to manage merchant database; created HBase tables to manage and store large scale consumer data.  " +
      "Accelerated token verification when consuming coupons with Spring Data Redis for token caching and quick loading.  " +
      "Performed stress test using Apache Jmeter and tested average query time in multi-thread mode.",
  },
  {
    title: "Hadoop, Spark, IoT based WIFI Probe Big Data Analysis Platform",
    subtitle: "Hadoop, Spark, Scala big data analysis system",
    link: " ",
    image: "images/projects/wifi.jpg",
    date: "2020-03",
    desc:
      "Implemented big data analysis system with Hadoop, Spark, Scala; visualized the results using ECharts.js, d3.js. " +
      "Collaborated with team to collect MAC address data using IoT WIFI probe device in public places for analyzing passenger flow, length of stay, re-visiting cycle using Hadoop and Spark, with coding by Scala. " +
      "Developed real-time communication between backend and frontend using Python and Flask-SocketIO. " +
      "Deployed on AWS EC2 with Docker; used Hive to store original data, PostgreSQL to store analysis result.",
  },
  {
    title:
      "Online Taxi Hailing Service Web/Mobile Application (Similar to Uber)",
    subtitle:
      "Web and Mobile application based on Angular, Ionic, Node.js, Express",
    link: " ",
    image: "images/projects/dalianTaxi.jpg",
    date: "2017-04",
    desc:
      "Led web/mobile application development with Angular, RESTful API endpoints and MySQL design with Node.js, SQL. " +
      "Built frontend using Ionic 2, Material-UI; complied web application to IOS and Android applications using Cordova. " +
      "Developed user authentication with Passport.js for Oauth2 based users; created SMS notification with Alidayu-node. " +
      "Implemented online payment for hailing service with Alipay SDK API; realized QR code login using node-qrcode.",
  },
  {
    title: "UCI Cloudberry Big Data Visualization ",
    subtitle: "Gowalla GIS big data visualization",
    link: "http://cloudberry.ics.uci.edu/apps/twittermap/",
    image: "images/projects/cloudBerry.jpg",
    date: "2019-03",
    desc:
      "Improved performance 50% by building code using JavaScript to force browser call GPU to render. " +
      "Visualized 7.6 million GIS data records on frontend by d3.js, sigma.js, and WebGL. " +
      "Built full-stack system prototype to measure network latency of data transferring using UCI Cloudberry as middleware.",
  },
];

export default data;
