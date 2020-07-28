// TODO Add a couple lines about each project
const data = [
  {
    title: "Coupon Distribution System",
    subtitle: "Coupon distribution system based on Kafka, HBase & Spring Boot.",
    link: "https://github.com/YinhaoHe/Coupon-Distribution-System",
    image: "/images/projects/couponDistributionSystem.jpg",
    date: "2020-03",
    desc:
      "Built Pub/Sub coupon distribution system with Kafka, HBase & MySQL, Redis as cache, Spring Boot for backend service.  " +
      "Leveraged Kafka to implement message queue for coupon distribution, data persistence, data retention policy. " +
      "Used MySQL to manage merchant database, HBase to distribute & store large scale consumer data.  " +
      "Created Java Servlet rest APIs to handle http requests and tested with Postman; performed stress test with JMeter.",
  },
  {
    title: "UCI Cloudberry Big Data Visualization ",
    subtitle: "Gowalla GIS big data visualization",
    link: "http://cloudberry.ics.uci.edu/apps/twittermap/",
    image: "/images/projects/cloudBerry.jpg",
    date: "2019-03",
    desc:
      "Improved performance 50% by building code using JavaScript to force browser call GPU to render. " +
      "Visualized 7.6 million GIS data records on frontend by d3.js, sigma.js, and WebGL in less than 60 seconds. " +
      "Built full-stack system prototype to measure network latency of data transferring using UCI Cloudberry as middleware.",
  },
  {
    title: "Commercial Big Data Analysis Based on WiFi Probe",
    subtitle: "Hadoop-based big data analysis system",
    link: " ",
    image: "/images/projects/wifi.jpg",
    date: "2017-07",
    desc:
      "Collaborated with team to analyze data using Hadoop and Spark, with coding by Scala. " +
      "Distributed deployment on Linux server using Docker, distributed data storage in HBase. " +
      "Oversaw backend development by implementing interaction with hardware using Java and Jfinal Framework.",
  },
  {
    title: "Dalian Taxi Android App (Similar to Uber)",
    subtitle: "Dalian taxi Android app(ride service hailing)",
    link: "https://github.com/YinhaoHe/Dalian-Taxi",
    image: "/images/projects/dalianTaxi.jpg",
    date: "2017-04",
    desc:
      "Led Android app development to follow UI/UX’s design, database design & REST API endpoints design for backend service. " +
      "Built frontend webpage for user login, hailing service, service status display using JavaScript(Angular) and Bootstrap. " +
      "Implemented automatic email & SMS confirmations upon creation of hailing order, order confirmation and order completed receipt; Built user login authentication with SMS verification code. " +
      "Oversaw operations and maintenance within project team environment; gained user feedback by application reviews.",
  },
];

export default data;
