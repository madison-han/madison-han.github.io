import React from "react";
import 'reactjs-popup/dist/index.css';
import "../App.css";
import "../App"

import Projects from "./projects";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";
import PageDivider from "../components/page-divider/page-divider";
import ProgressLine from "../components/progress-line/progress-line";
import "../styles/style.css";
// import "../styles/scroll-down.css";
// import "../js/scrollDownButton.js";



const About = () => {
    // Set to true always for now
    // const [isScrolled, setScrolled] = useState(true);
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollPercent = document.documentElement.scrollTop / 100;
    //     setScrolled(scrollPercent > 0);
    //   };

    //   window.addEventListener('scroll', handleScroll);

    //   return () => { window.removeEventListener('scroll', handleScroll); };
    // });


    return (
        <body>
            <ProgressLine />
            <div class="container">
                <br/><br/><br/><br/><br/>
                <h1 style={{textShadow:'0 0 0 rgba(0, 0, 0, 0)', fontSize:'40px'}}>
                    Hi, I'm
                    <span class="highlight-text"> Madison Han</span>
                    .
                </h1>
                <p>
                   Second year at the <b>University of Waterloo</b>, 
                   studying
                </p>
                <p>
                    <li>Statistics (major)</li>
                    <li>Computational Math (major)</li>
                    <li>Computer Science (minor)</li>
                </p>
                <br></br>
                <Contact />
            </div>

            {/* <div class="scroll-down" id="scroll-down">
                <i class="fa fa-angle-down"></i>
            </div> */}

            {/* {isScrolled &&  */}
                <div class="container">
                    <br /><br />

                    <Projects />
                        <PageDivider />
                    <Experience />
                        <PageDivider />
                    <Education />
                </div>
            {/* } */}

        </body>

    );
};
 
export default About;
