import ezksin from './assets/images/github.png'

const logotext = "DWIKI";
const meta = {
    title: "Dwiki",
    description: "I’m Dwiki, Software Engineer who still has lots to learn.",
};

const introdata = {
    title: 'Hi, Dwiki\'s here',
    animated: {
        first: "I love coding",
        second: "I love learning new things",
        third: "I love coffeeee",
    },
    description: "Software Engineer",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: `I'm a Computer Science graduate with a specialization in database technology from Bina Nusantara University. 
    Particularly drawn to frontend engineering, I am dedicated to crafting seamless user experiences and dynamic web applications.`,
};
const worktimeline = [{
        jobtitle: "Frontend Engineer Intern",
        where: "UPLINK Creative Studio",
        date: "2018",
    },
    {
        jobtitle: "Fullstack Engineer",
        where: "PT Bank BTPN",
        date: "2022",
    },
    {
        jobtitle: "Frontend Engineer",
        where: "PT Mega Finance",
        date: "2024",
    },
];

const skills = [{
        name: "NoSQL",
        value: 80,
    },
    {
        name: "SQL",
        value: 75,
    },
    {
        name: "Javascript",
        value: 85,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Typescript",
        value: 80,
    },
    {
        name: "Node.js/Express.js",
        value: 80,
    },
    {
        name: "iOS Development (SwiftUI)",
        value: 50,
    },
    {
        name: "Testing Library (Jest, Enzyme, RTL)",
        value: 80,
    },
];

const services = [{
        title: "Web Development",
        description: "Developed and maintained web applications using react, and node.js",
    },

];

const dataportfolio = [{
        img: ezksin,
        description: "Developed a fullstack e-comnmerce, with CMS web applications using MERN, integrating 3rd party payment gateway Midtrans to securely process payments, also implemented JWT for authorization ",
        link: "https://github.com/dwikis17/final-thesis-web",
        title: "EZSKIN Web"
    },
    {
        img: ezksin,
        description: `Developed an iOS App using swift and UIKit to showcase Valorant content, including agents,
        images from an API. this project uses programmatic implementation of UICollectionView,
        UITableView with custom cells, and followed the MVVM architectural pattern`,
        link: "https://github.com/dwikis17/valorant-app-swift",
        title: "iOS Valorant App Swift"
    },
    {
        img: ezksin,
        description: `Developed a fullstack E-commerce web application using Laravel`,
        link: "https://github.com/daniellie31/gameSlotProject",
        title: "GameSlot"
    },
    {
        img: ezksin,
        description: `Developed a MERN fullstack CMS Application for BTPN Employee, using antd library, Jest, enzyme, and RTL for testing`,
        link: "#",
        title: "TalentX Web (BTPN)"
    },
    {
        img: ezksin,
        description: `Desgined and developed web aplication with react and typescript, integraitng sales data, and also CMS for clients.`,
        link: "#",
        title: "Sales Tracking"
    },

];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/dwikis17",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/dwiki-dwiki-97610b223/",
    twitter: "https://twitter.com/dwikii____",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};