export const introProps = {
  home: {
    title: "Maaike",
    titleSpan: "Hi, I am",
    subtitle: "Front-end dev",
    baseImg: {
      src: "./images/profile.jpg",
      alt: "",
    },
  },
  about: {
    title: "About me",
    subtitle: "Maaike Konijnendijk",
    baseImg: {
      src: "./images/profile.jpg",
      alt: "",
    },
  },
  projects: {
    title: "Projects",
    subtitle: "Some of my work",
    baseImg: {
      src: "./images/Snake.png",
      alt: "",
    },
  },
};

export const projectIntro = ` 
    While learning JavaScript, React, HTML and CSS, I have built many 
    projects, as I always like to immediately use new concepts that I learn.
    This approach ensures that I fully understand and know how to apply new concepts. 
    Below you find a selection of the projects I have worked on.  
    Curious about my code? Some projects contain a link to GitHub or CodePen, where you
    can take a look.         
`;

export const projectData = [
  {
    slug: "lifelogbrowser",
    title: "Lifelog Browser",
    subtitle: "Thesis project",
    video: "https://www.youtube-nocookie.com/embed/i952OtBgx7Q",
    tools: ["JavaScript", "Leaflet", "HTML", "CSS", "Python", "Django"],
    description: [
      `
                For my master's thesis, I created and scientifically evaluated a web application, 
                the Lifelog Browser, which was built to make
                lifelog data accessible. Lifelog data is a combination of different data types
                that someone collects with sensors that they carry around with them in order to
                record their life's experiences. Specifically,
                the database of lifelog data that I used for this application contained photos,
                together with metadata like date and location. The database contained almost 
                300,000 photos, which were displayed to the user on a map. They could filter the 
                photos by date, time, location or tag. The video below shows a short demonstration
                of the functionalities of the Lifelog Browser. Note that the photos
                are blurred, since their content is privacy sensitive.
            `,
      `
                As you can see in the video, photos are placed on the map and the user may click
                on them to inspect them in more detail. The photos on the map are displayed 
                interactively when the user scrolls the map or adds a filter. A number of different
                map visualizations and temporal filter options are available, as the goal of the
                research was to determine which map visualization and temporal filter type is
                most effective for lifelog data access. 
            `,
      `
                I built the Lifelog Browser from scratch by myself, using Django to set up the
                backend, which managed the database with the photos and their metadata. The 
                front-end was built using mainly vanilla JavaScript, as I felt most comfortable 
                with that at the time. I pulled in a number of libraries for functionalities 
                that were too complex to create by myself. To implement the map, I used Leaflet
                and for the different map visualizations, I used the plug-ins Leaflet.heat and 
                Markercluster, modifying their styling and functionalities to suit my
                needs. Finally, for two of the temporal filter types, I used the Jspreadsheet CE
                library and added functionalities on top in order to be able to use it as an
                input method.
            `,
      `
                It was a very valuable experience for me to build such a large project from scratch.
                Building the back-end was the most challenging aspect to me, as I had little 
                experience in this before starting this project. However, it has taught me 
                valuable lessons about working with API's and optimization. It was also insightful
                to me to work with external JavaScript libraries and building my own functionalities
                on top of them. Even though a number of bugs and performance problems persist in
                this project that I could not solve due to lack of time, I am proud of what I 
                achieved in this project.
            `,
    ],
  },
  {
    slug: "snake",
    title: "Snake",
    subtitle: "Classic game",
    extraImg: {
      src: "./images/Snake.PNG",
      alt: "My Snake web app",
    },
    tools: ["JavaScript", "HTML", "CSS"],
    description: [
      ` 
                Since I was always interested in video games, one of the small 
                projects I enjoyed the most while learning JavaScript was recreating the game Snake.
                This was one of the projects which was included in my course to learn basic JavaScript.
                The game has all the functionalities of the normal Snake game, where the snake
                increases in size and starts to move more quickly after eating an apple.           
            `,
      `
                I expanded upon the basic functionalities of the game that were given by the instructor
                by adding my own styling. With JavaScript, I wrote a function which randomly 
                generates colors for the squares of the playing field to make it look like grass.
                I also wrote a function which changes the styling of the head and tail of the snake
                to make it appear more rounded instead of just square. These were fun little 
                additional challenges which I added to ensure I understood all the concepts 
                completely.
            `,
    ],
    link: {
      url: "https://codepen.io/maaikee/pen/rNdbvRB",
      type: "CodePen",
    },
  },
  // {
  //     key: 3,
  //     url: "notes",
  //     title: "Notes",
  //     subtitle: "Simple app",
  //     baseImg: {
  //         src: "./images/",
  //         alt: ""
  //     },
  //     extraImg: {
  //         src: "./images/",
  //         alt: ""
  //     },
  //     description: [
  //         `hi`,
  //         `I made this three`
  //     ]
  // }
];

// user experience / usability

export const skills = [
  {
    key: 1,
    title: "JavaScript",
    content: `
            After building a basis of coding knowledge in Python, 
            I started to learn JavaScript, to which I adapted quickly. 
            I have practiced my JavaScript skills in many different 
            projects, where I used both vanilla JavaScript and a number
            of different libraries. I focus on writing clean and readable code.
        `,
  },
  {
    key: 2,
    title: "HTML & CSS",
    content: `
            I create well-structured HTML pages with sensible CSS styling. 
            I love to see a plain HTML page come to life through CSS. 
            I use classes to my advantage to create reusable and well-structured
            code.  I also always ensure that the web page is responsive, so users
            of any screen type can use it seamlessly.
        `,
  },
  {
    key: 3,
    title: "React",
    content: `
            Only recently I have started to learn React, as I first wanted
            to ensure that my background in Javascript was solid. I have been 
            practicing the basics of React and I've been enjoying the speed and 
            simplicity of building web pages in React. I'm excited to learn more
            about this framework so I can use it to create well-structured and 
            well-performing web apps.
        `,
  },
  {
    key: 4,
    title: "Python",
    content: `
            Even though not directly applicable to front-end development, I learned 
            a lot of Python during my master's degree. I use it for a variety of different
            purposes, from machine learning to multimedia retrieval and scripting. I also have some
            back-end experience with Python, as for my thesis project I built a web-app
            with a Django back-end. 
        `,
  },
];

export const about = {
  summary: `
            Originally a 3D Game Artist, I moved to the field of front-end development because 
            it allows me to use both my artistic and technical skills. I enjoy problem solving 
            and I always need to be learning something new. I understand that a project has 
            both visual and technical requirements and therefore I focus on creating web 
            applications which both look good and run smoothly. I always strive to come up with 
            the best possible solution to a problem.          
        `,
  description: [
    `
            Originally a 3D game artist, I transitioned into the field of front-end
            development because I was looking for a bigger challenge. While finishing 
            my bachelor's degree in 3D visual art, I found an interest in visual 
            scripting and decided to pursue this interest through a master in computer science,
            with a focus on Game and Media Technology. However, at this point I hardly had
            any coding skills and needed to adapt quickly in order to keep up with my peers.
            I started out learning Python and later moved on to learning front-end skills such as
            JavaScript, HTML, CSS and React.
        `,
    `
           I obtained these front-end skills through self-study combined with Scrimba's Front-End Career path, 
           which I have followed simultaneously with my master's degree. With the career path I learned 
           the basics of front-end development, while my in master's I learned about a variety of different
           subjects, including performing academic research, human-computer interaction,
           machine learning, algorithmics and multimedia retrieval. Learning about many 
           different subjects improved my versatility and I am always ready to take on a challenge. 
           My degrees also taught me to work in teams, as most courses included teamwork. 
           I really enjoy the dynamic of teamwork, as I view receiving and giving 
           feedback as one of the most important ways to improve.
        `,
    `
            Even though I enjoy coding a lot, it's also very important for me to dedicate time to other activities. 
            When I'm not coding I enjoy a number of different hobbies, such as climbing, sewing or playing
            video games.
        `,
  ],
};
