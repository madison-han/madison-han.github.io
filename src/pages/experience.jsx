import React from "react";
import List from "../components/list/list"
import "../App.css";


const experienceData = [
    {
        img: "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=1710374400&v=beta&t=bxZEYB5wmYxJjsCtgNmE5xetj5QYKM7cLSmotwt1SSQ",
        title: "Project Member",
        subtitle: "Microsoft · Remote, Project-Based",
        date: "Sep 2023 - Dec 2023 · 4 mos",
        description: "ITEM: Collaborated with group members in utilizing Microsoft Azure AI and cloud computing technology to develop comprehensive plan prototyping and refining a healthcare chatbot ITEM: Conducted reserach to identify key requirements, user needs and technical feasibility of implementing machine learning techniques within the solution ITEM: Received highest employer rating \"outstanding\" in recognition of exceptional performance",
        // "Experience utilizing Microsoft Azure AI and cloud computing technology to prototype a health care solution. \
        // Collaborated with a multidisciplinary team to develop and implement an innovative solution for creating a trustworthy chatbot for healthcare guidance. \
        // Utilized Microsoft Azure AI and cloud computing technology to prototype and refine the chatbot, addressing the need for accurate and reliable healthcare information in the industry. \
        // Conducted extensive research and analysis to identify key requirements, user needs, and technical feasibility of the proposed chatbot solution. \
        // Led the design and development process, utilizing agile methodologies to ensure timely delivery and iterative improvement of the chatbot. \
        // Presented project outcomes and recommendations to stakeholders, showcasing the value and potential impact of the chatbot on improving healthcare access and patient engagement.",
        
        skills: "Microsoft Azure AI, Machine Learning, Cloud Computing Technology, Teamwork, Collaborative Problem Solving"

    },
    {
        img: "https://media.licdn.com/dms/image/D560BAQHXy3XNBtgRiA/company-logo_100_100/0/1680276557881/st_clements_school_logo?e=1710374400&v=beta&t=E1417tfq3tCdh_tdepT3bdi_eUh1y3V3juxeseqrCUQ",
        title: "Programming Team Co-President",
        subtitle: "St. Clement's School",
        description:"ITEM:Developed a mobile-responsive user interface using HTML, JavaScript and CSS ITEM:Taught programming concepts to young students, communicating in a friendly and tangible manner ITEM:Prepared senior team members for Computer Science competitions (ex. CCC)",
        date: "Sep 2021 - May 2022 · 9 mos",
        skills:"HTML, CSS, JavaScript"
    },

    {
        img: "https://media.licdn.com/dms/image/C4D0BAQGt-qFROwUgpw/company-logo_100_100/0/1630536605614/uoftwics_logo?e=1710374400&v=beta&t=zu1mbaXIvgTNXsRVJxN1iVslY0h1TjxlOosqUufaKrY",
        title: "Mentorship Program",
        subtitle: "University of Toronto Women in Computer Science (WiCS)",
        date: "Nov 2021 - Apr 2022 · 6 mos",
        description: "",
        skills:""
    }
]

const Experience = () => {
    return (
        <div 
            class="dark-container"
            id="experienceSection"
        >

            <h1>experience</h1>
            <br/>


            {experienceData.map((person, index, array) => {
                const isLast = index >= array.length - 1;
                return <List {...person} isProject={false} isLast={isLast}/>;
            })}

        </div>
    );
};

export default Experience;

