let info = {
  name: "Mert Kaan Irtegun",
  logo_name: "Kaan",
  flat_picture: require("./src/assets/photo.jpeg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm Mert Kaan Irtegun, a software engineer who graduated from Istanbul Technical University and is interested in software Development, UI/UX Design and Front-end development.",
  links: {
    linkedin: "https://www.linkedin.com/in/mert-kaan-irteg%C3%BCn-0490541b5/",
    github: "https://github.com/kaanirtegun8",
    instagram: "https://www.instagram.com/kaanirtegun8/",
    resume:
      "https://github.com/itu-itis21-irtegun16/git-fundamentals-draft-itu-itis21-irtegun16/raw/main/CV%20Mert%20Kaan%20%C4%B0rteg%C3%BCn%20%231.pdf"
  },
  education: [
    {
      name: "Istanbul Technical University",
      place: "",
      date: "sep, 2016 - feb, 2022",
      degree: "",
      gpa: "",
      description:
        "Computer Engineering",
      skills: []
    },
    {
      name: "Kadir Has Anatolian High School",
      place: "",
      date: "sep, 2012 - June, 2016",
      degree: "",
      gpa: "",
      description:
        "Math Science",
      skills: []
    },
  ],
  experience: [
    {
      name: "Kavak",
      place: "Istanbul / Turkey",
      date: "July, 2021 - currently",
      position: "Software Developer",
      description:
        "",
      skills: ["HTML5", "CSS3", "Sass", "Bootstrap", "JQuery", "Json", "JavaSript","es6", "VueJS", "Vuex", "Vuetify", "Nuxt", "Twig", "Php"]
    },
    {
      name: "Insider",
      place: "Istanbul / Turkey",
      date: "1,Feb, 2021 - 1,June, 2021",
      position: "Software Developer",
      description:
        "",
      skills: ["HTML5", "CSS3", "JQuery", "Json", "JavaSript", "TypeSript", "es6", "VueJS", "Vuex"]
    },
    {
      name: "GameLab",
      place: "Istanbul / Turkey",
      date: "Sep, 2020 - Jan, 2021",
      position: "Game Developer",
      description:
        "",
      skills: ["Java", "C#", "CSS3"]
    },
  ],
  skills: [
    {
      title: "Language",
      info: [
        "Python","Javascript","TypeScript","Java","C#", "C/C++"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap","JQuery","Es6","json", "Sass", "Ajax", "Less", "Axios"],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "Node"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["MongoDB", "MySQL", "SQL Server"],
      icon: "fa fa-database"
    },
    {
      title: "Operating systems & tools",
      info: [ "Ubuntu", "Windows", "Agile", "Scrum", "JIRA", "Firebase", "Aws - Ec2 / S3"],
      icon: "fas fa-tools"
    },
    {
      title: "Design",
      info: ["XD", "Photoshop", "Figma", "Zeplin", "Gimp"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Iron Monkey",
      pictures: [
        {
          img: require("./src/assets/portfolio/iron-monkey/Im1.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im2.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im3.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im4.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im5.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im6.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im7.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im8.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im9.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im10.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im11.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im12.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im13.png")
        },
        {
          img: require("./src/assets/portfolio/iron-monkey/Im14.png")
        },
        
      ],
      technologies: ["HTML", "CSS","JavaSript","Vue", "Vuex", "Vuetify", "Nodejs", "MongoDB"],
      category: "Mevn Stack Web App",
      date: "Sep, 2021 - Jan, 2022",
      github: "https://github.com/itu-itis21-irtegun16/iron-Monkey-Frontend",
      visit: "http://iron.monkey.s3-website.us-east-2.amazonaws.com/",
      description: "Iron Monkey allows people to create a membership, create their own training program and add it to their personal calendar. You can also share your favorite words with other people and create a cooking program."
    },
    {
      name: "Movie App",
      pictures: [
        {
          img: require("./src/assets/portfolio/MovieApp/MovieApp.png")
        },
      ],
      technologies: ["vue", "css3"],
      category: "Web App",
      date: "Aug, 2021 - 5 days",
      github: "https://github.com/itu-itis21-irtegun16/movie-app",
      visit: "https://lets-movie.netlify.app/",
      description:
        " It is a web application that you can search for series or movies and cache it on the frontend. "
    },
    {
      name: "Case Study",
      pictures: [
        {
          img: require("./src/assets/portfolio/case-study/cs1.png")
        },
        {
          img: require("./src/assets/portfolio/case-study/cs2.png")
        },
        {
          img: require("./src/assets/portfolio/case-study/cs3.png")
        },
      ],
      technologies: ["vue", "vuex", "vuetify", "html", "css3"],
      category: "Web App",
      date: "Jan, 2022 - 1 days",
      github:
        "https://github.com/itu-itis21-irtegun16/case-stduy-live",
      visit: "https://case-study-form.netlify.app/",
      description:
        " A simple case application. "
    },
  ],
};

export default info;
