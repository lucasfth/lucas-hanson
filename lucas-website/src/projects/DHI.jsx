import Image from "react-bootstrap/Image"

export const dhi = {
    img: "/assets/greenup.png",
    imgdesc: "Link to the GreenUp projected we worked on",
    imgref: "https://eo.dhigroup.com/greenup/",
    title: "DHI",
    subtitle: "GreenUP project",
    summary: `This project was part of a course during our 4th semester where we learned to use Scrum with a business to produce value for them.`,
    Info:
    <>
        <p style={{ textAlign: "left" }}>
            <Image src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python logo" rounded />{" "}
            <Image src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript logo" rounded />{" "}
            <Image src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React logo" rounded />{" "}
            <Image src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI logo" rounded />{" "}
        </p>
    </>,
    Content: 
    <>
        <p>
        During my 4th semester at ITU, I had the opportunity to collaborate with DHI on the GreenUP project. 
        This project was a pivotal part of my learning journey in software development and agile methodologies.
        </p>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7089530977546297345/" 
            aria-label="Link to the LinkedIn post about the collaboration" 
            title="Link to the LinkedIn post about the collaboration" 
            target="_blank" rel="noopener noreferrer">
                <Image src="/assets/dhi_group_pic.jpeg"
                    aria-label="Picture of the group that worked on the GreenUP project"
                    className="image"
                    fluid
                    rounded />
        </a>
        <p>
        The GreenUP project was an immersive experience where I learned to apply Scrum methodologies in close to a real-world setting. 
        Working closely with DHI and other students from ITU, we aimed to create a MVP that addressed the challenges of urban planning and promotes sustainability.
        <br />
        As a team, we tried to understand the needs of urban planners.
        Through collaborative discussions and iterative development cycles, we crafted a MVP that incorporates scenario-based modeling and satellite-based information to facilitate informed decision-making.
        One of the highlights of this project was creating a video presentation to showcase our prototype. 
        You can watch the presentation by clicking the image of the map.
        </p>
        <a href="https://www.youtube.com/watch?v=eoQ5T-fo3Qc" 
            aria-label="Link to the video presentation" 
            title="Link to the video presentation" 
            target="_blank" rel="noopener noreferrer">
            <Image src="https://img.youtube.com/vi/eoQ5T-fo3Qc/0.jpg"
                aria-label="Thumbnail of the video presentation"
                className="image"
                fluid
                rounded />
        </a>
        <p>
        I am proud of our achievements on the GreenUP project and grateful for the invaluable lessons learned during this collaboration. 
        It has equipped me with practical skills and insights that I continue to apply in my journey as a software developer.
        </p>
    </>,
}

export default dhi
