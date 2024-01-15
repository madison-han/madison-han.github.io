import React from "react";
import List from "../components/list/list"
import "../App.css";

const educationData = [
    {
        img: "https://media.licdn.com/dms/image/C560BAQFI41Ly6leq7Q/company-logo_100_100/0/1631385538719?e=1710374400&v=beta&t=PH21AxWdL4HBnIKlPRtg9wyfceY4kFXxZPgjsZliYL4",
        title: "University of Waterloo",
        subtitle: "Bachelor's degree — Double major",
        date: "May 2027",
        description: "Object Oriented Software Development (C++), Elementary Algorithm Design and Data Abstraction (C), Tools and Techniques for Software Development",
        skills: "C++, C, OOP, Functional Programming, Linux Shell, Debugging, Probability, Statistics, R, Python"
    },
    {
        img: "https://media.licdn.com/dms/image/D560BAQHXy3XNBtgRiA/company-logo_100_100/0/1680276557881/st_clements_school_logo?e=1710374400&v=beta&t=E1417tfq3tCdh_tdepT3bdi_eUh1y3V3juxeseqrCUQ",
        title: "St. Clement's School",
        subtitle: "High School Diploma",
        date: "Jun 2022",
        description: "Elected Programming Team Co-President, VEX Robotics, Senior Math Team, STEM Committee, LUMINA Fashion Show, Track and Field, Cross Country",
        skills: "Java"
    },
]
 
const Education = () => {
    return (
        <div>
         <div 
            class="dark-container"
            id="experienceSection"
        >
            <h1>education</h1>
            <br/>

            {educationData.map((person, index, array) => {
                const isLast = index >= array.length - 1;
                return <List {...person}  isProject={false} isLast={isLast}/>;
            })}

            <br></br><br></br><br></br><br></br>
            <br></br><br></br>
            </div>
        </div>
    );
};

export default Education;

