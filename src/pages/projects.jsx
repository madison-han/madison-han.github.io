import React from "react";
import List from "../components/list/list"
import "../App.css";



const projectData = [
    {
      title: "CC3K",
      subtitle: "Text-based RPG",
      description: "Developed under the strict timeline of two weeks with two teammates for a final group project. Created with 51 .cc and .h files. Achieved a 99.1%.",
      img: "https://i.imgur.com/uUEwiBF.gif",
      skills: "C++, OOP, Software Design Patterns, Collaborative Problem Solving",
      github: "https://github.com/madison-han/cc3k"
    },
    {
      title: "Harmony Haven",
      subtitle: "Visual Novel",
      description: "Work in progress, created with Unity. Message me for a demo!",
      img: "https://i.imgur.com/cj0vpbO.gif",
      skills: "C#, OOP, Unity, UIX, Beginner Game Development",
      github: "https://github.com/madison-han/Harmony-Haven"

    },
    // {
    //   title: "ToDo",
    //   subtitle: "React App",
    //   description:"A simple to-do list application built with React! Tasks can be added, marked as complete, and deleted.",
    //   img: "https://i.imgur.com/LnIlzcp.png",
    //   skills: "React, JavaScript, VSCode",
    //   github: "https://github.com/madison-han"

    // },
    {
      title: "WeatherApp",
      subtitle: "Java Application",
      description: "Allows users to retrieve weather information for a specific city using the OpenWeatherMap API. Final project for AP (Advanced Placement) Computer Science A.",
      img: "https://i.imgur.com/RC0QOix.png",
      skills: "Java, API",
      github: "https://github.com/madison-han/Weather-App"

    },
    {
      title: "Bash Scripts",
      subtitle: "Automation",
      description: "Various Bash scripts written for testing automation in a Software Development course.", 
      img: "https://i.imgur.com/yqj2yLo.gif",
      skills: "React, JavaScript, VSCode",
      github: "https://github.com/madison-han/Scripts-for-CS-246/"
    },
    {
      title: "This Site!",
      subtitle: "Website",
      description: "Created from scratch, utilizing react libraries: emailjs, react-router-dom, reactjs-popup",
      img: "https://i.imgur.com/F8PLrPm.png",
      skills: "React, HTML, CSS, JavaScript",
      github: "https://github.com/madison-han/madison-han.github.io"
    },
];



const Projects = () => {
    return (
      <div 
        class="dark-container"
        id="projectSection"
      >
          <toTop />
              

            <h1>personal projects</h1>
            <br/>
            

            {projectData.map((person, index, array) => {
              const isLast = index >= array.length - 1;
              return <List {...person} isProject={true} isLast = {isLast}/>;
            })}


            
        </div>
    

    );
};
 


export default Projects;
