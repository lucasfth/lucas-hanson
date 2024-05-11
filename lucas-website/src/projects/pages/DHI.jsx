import bachelorImg from './assets/greenup.png';
import Project from '../Project';
import Image from 'react-bootstrap/Image';
import groupImg from './assets/dhi_group_pic.jpeg';
import './pages.css'

export const dhiData = {
    imgpath: bachelorImg,
    imgdesc: 'Link to the GreenUp projected we worked on',
    imgref: "https://eo.dhigroup.com/greenup/",
    title: 'DHI',
    subtitle: 'GreenUP project',
    summary: `This project was part of a course during our 4th semester where we learned to use Scrum with a business to produce value for them.`,
    Content: 
    <>
        <p>
        During my 4th semester at ITU, I had the opportunity to collaborate with DHI on the GreenUP project. 
        This project was a pivotal part of my learning journey in software development and agile methodologies.
        </p>
        <a href='https://www.linkedin.com/feed/update/urn:li:activity:7089530977546297345/' 
            aria-label='Link to the LinkedIn post about the collaboration' 
            title='Link to the LinkedIn post about the collaboration' 
            target='_blank' rel='noopener noreferrer'>
                <Image src={groupImg}
                    aria-label='Picture of the group that worked on the GreenUP project'
                    style={{
                        maxWidth: window.innerWidth <= 576 ? '100%' : '40%',
                        float: window.innerWidth <= 576 ? 'none' : 'right',
                        marginLeft: window.innerWidth <= 576 ? 'auto' : '1rem',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                    }}
                    className='image'
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
        You can watch the presentation here.
        </p>
        <a href='https://www.youtube.com/watch?v=eoQ5T-fo3Qc' 
            aria-label='Link to the video presentation' 
            title='Link to the video presentation' 
            target='_blank' rel='noopener noreferrer'>
            <Image src='https://img.youtube.com/vi/eoQ5T-fo3Qc/0.jpg'
                aria-label='Thumbnail of the video presentation'
                style={{
                    maxWidth: window.innerWidth <= 576 ? '100%' : '30%',
                    float: window.innerWidth <= 576 ? 'none' : 'left',
                    marginRight: window.innerWidth <= 576 ? 'auto' : '1rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                }}
                className='image'
                fluid
                rounded />
        </a>
        <p>
        I am proud of our achievements on the GreenUP project and grateful for the invaluable lessons learned during this collaboration. 
        It has equipped me with practical skills and insights that I continue to apply in my journey as a software developer.
        </p>
    </>,
};

function Bachelor() {
    return (
        <Project {...dhiData} />
    );
}

export default Bachelor;
