import React from "react";
import List from "../components/list/list"
import "../App.css";

const awardsData = [
    {
        img: "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=1710374400&v=beta&t=bxZEYB5wmYxJjsCtgNmE5xetj5QYKM7cLSmotwt1SSQ",
        title: "Azure AI Fundamentals",
        subtitle: "",
        date: "Nov 2023",
        description: "https://www.credly.com/badges/351440a7-9575-4932-b5e9-dfea3be44f14",
        skills: "Azure Bot Services, Azure Macahine Learning, Cognitive Services"
    },

    {
        img: "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=1710374400&v=beta&t=bxZEYB5wmYxJjsCtgNmE5xetj5QYKM7cLSmotwt1SSQ",
        title: "Azure Fundamentals",
        subtitle: "",
        date: "Oct 2023",
        description: "https://www.credly.com/badges/a2fcd75f-cca4-42fc-b0b3-11ef0aee1769",
        skills: "Azure, Cloud Data, Cloud Networking, Cloud Security, Cloud Services, Cloud Storage, Virtualizaation"
    },
    {
        img: "https://media.licdn.com/dms/image/C560BAQFI41Ly6leq7Q/company-logo_100_100/0/1631385538719?e=1710374400&v=beta&t=PH21AxWdL4HBnIKlPRtg9wyfceY4kFXxZPgjsZliYL4",
        title: "Certificate of Distinction, Euclid Mathematics Competition",
        subtitle: "University of Waterloo",
        date: "Jun 2022",
        description: "Awarded for placing in the top 25% of 17,000+ contestants.",
        skills: ""
    },
    {
        img: "https://media.licdn.com/dms/image/C560BAQFI41Ly6leq7Q/company-logo_100_100/0/1631385538719?e=1710374400&v=beta&t=PH21AxWdL4HBnIKlPRtg9wyfceY4kFXxZPgjsZliYL4",
        title: "President's Scholarship of Distinction",
        subtitle: "University of Waterloo",
        date: "Jun 2022",
        description: "",
        skills: ""
    },
    {
        img: "https://media.licdn.com/dms/image/D560BAQHXy3XNBtgRiA/company-logo_100_100/0/1680276557881/st_clements_school_logo?e=1710374400&v=beta&t=E1417tfq3tCdh_tdepT3bdi_eUh1y3V3juxeseqrCUQ",
        title: "AP Scholar with Distinction",
        subtitle: "St. Clement's School",
        date: "Jun 2022",
        description: "ITEM: Computer Science A ITEM: Physics 1: Algebra Based ITEM: Calculus AB ITEM: Chemistry ITEM: English Language and Composition ITEM: Psychology",
        skills: ""
    },
    {
        img: "https://media.licdn.com/dms/image/D560BAQHXy3XNBtgRiA/company-logo_100_100/0/1680276557881/st_clements_school_logo?e=1710374400&v=beta&t=E1417tfq3tCdh_tdepT3bdi_eUh1y3V3juxeseqrCUQ",
        title: "Honour Roll Scholar",
        subtitle: "St. Clement's School",
        date: "Jun 2018 - Jun 2022",
        description: "",
        skills: ""
    },
]
 
const Awards = () => {
    return (
        <div>
         <div 
            class="dark-container"
            id="experienceSection"
        >
            <h1>awards & certifications</h1>
            <br/>

            {awardsData.map((person, index, array) => {
                const isLast = index >= array.length - 1;
                return <List {...person}  isProject={false} isLast={isLast}/>;
            })}

            <br></br><br></br><br></br><br></br>
            <br></br><br></br>
            </div>
        </div>
    );
};

export default Awards;

