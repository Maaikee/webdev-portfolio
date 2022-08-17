// import React from 'react'

export const introProps = {
    title: "Maaike",
    titleSpan: "Hi, I am",
    subtitle: "Front-end dev",
    baseImg: {
        src: "/",
        alt: ""
    }
}

export const projects = [
    {
        key: 1,
        url: "lifelogbrowser",
        title: "Lifelog Browser",
        subtitle: "Thesis project",
        baseImg: {
            src: "./images/Lifelog-map.PNG",
            alt: ""
        },
        extraImg: {
            src: "./images/Lifelog-map.PNG",
            alt: ""
        },
        description: [
            `
                For my master's thesis, I created and scientifically evaluated a web application, 
                the Lifelog Browser, which was built to make
                lifelog data accessible. Lifelog data is a combination of different data types
                that someone collects with sensors that they carry around with them. Specifically,
                the database of lifelog data that I used for this application contained photos,
                together with metadata like date and location. The database contained almost 
                300,000 photos, which were displayed to the user on a map. They could filter the 
                photos by date, time, location or tag. The video below shows a short demonstration
                of the functionalities of the Lifelog Browser. Note that the content of the photos
                is blurred, since their content is privacy sensitive.
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
                Markercluster, slightly modifying their styling and functionalities to suit my
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
            `
        ]
    },
    {
        key: 2,
        url: "snake",
        title: "Snake",
        subtitle: "Classic game",
        baseImg: {
            src: "./images/Snake-field.PNG",
            alt: ""
        },
        extraImg: {
            src: "",
            alt: ""
        },
        description: [
            `hi`,
            `I made this too`
        ]
    },
    {
        key: 3,
        url: "notes",
        title: "Notes",
        subtitle: "Simple app",
        baseImg: {
            src: "./images/",
            alt: ""
        },
        extraImg: {
            src: "./images/",
            alt: ""
        },
        description: [
            `hi`,
            `I made this three`
        ]
    }
]

export const skills = [
    {
        key: 1,
        title: "JavaScript",
        content: `
            After building a basis of coding knowledge in Python, 
            I started to learn JavaScript, to which I adapted quickly. 
            I have practiced my JavaScript skills in many different 
            projects, where I used both vanilla JavaScript and a number
            of different libraries. I focus on writing clean and readable code, 
            creating reusable code as much as possible.
        `
    },
    {
        key: 2,
        title: "HTML & CSS",
        content: `
            I focus on creating well-structured HTML pages with sensible CSS styling. 
            I love to see a plain HTML page come to life through CSS. In CSS, 
            I use classes to my advantage to create reusable and well-structured
            code.  I also always ensure that the web page is responsive, so users
            of any screen type can use it seamlessly.
        `
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
            well-performing web pages.
        `
    },
]

export const about = [
    `
        Originally a 3D game artist, I transitioned into the field of front-end
        development because I was looking for a bigger challenge. While finishing 
        my bachelor's degree in 3D visual art, I found an interest in visual 
        scripting and decided to pursue this interest in a master in computer science,
        with a focus on Game and Media Technology. However, at this point I hardly had
        any coding skills and needed to teach myself in order to keep up with my peers,
        which I did successfully. During my master, I realized that
        front-end development was the perfect combination of both my artistic and 
        technical interests. Therefore, I decided to pursue a career as a front-end 
        developer.
    `,
    `
       I have obtained my front-end development skills through self-study combined with
       Scrimba's Front-End Career path, 
       which I have followed simultaneously with my master's degree. During this career path, 
       I have completed a large number of projects, a selection of which can be found on this site. 
    `,
    `
        My skills include more than just my main three skills I have described above. During
        my master's degree, I have also obtained knowledge of various other topics
        such as interaction, machine learning, algorithmics and multimedia retrieval. 
        This, in combination with my background in art, makes me flexible and knowledgeable 
        in a wide variety of areas. My quick transition from game art to computer science shows
        that I am a fast learner and that I enjoy a challenge. Both during my bachelor's and 
        master's degrees, I have worked predominantly in teams, which I enjoy a lot.          
    `
]