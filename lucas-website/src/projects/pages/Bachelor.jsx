import bachelorImg from './assets/bachelor_frontpage.png';
import Project from '../Project';
import Image from 'react-bootstrap/Image';

export const bachelorData = {
    imgpath: bachelorImg,
    imgdesc: 'Link to download the bachelor thesis PDF',
    imgref: "",
    title: 'Bachelor',
    subtitle: 'Hand-Gesture-Based Interaction in Hybrid Meetings',
    summary: `This bachelor project aims to improve hybrid and virtual meetings by implementing hand-gesture-based controls in the Zoom platform. 
    It seeks to create a universally recognizable gesture-to-task vocabulary to enhance user experience, 
    reduce friction, and increase focus during meetings.`,
    Info:
    <>
        <p style={{ textAlign: 'left' }}>
            <Image src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' rounded />{' '}
            <Image src='https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white' rounded />{' '}
            <Image src='https://img.shields.io/badge/MediaPipe-4285F4?style=for-the-badge&logo=google&logoColor=white' rounded />{' '}
        </p>
    </>,
    Content: 
    <>
        <p>
            I recently completed my bachelor&apos;s thesis at the IT University of Copenhagen, 
            where I explored the exciting realm of hand-gesture-based interactions in hybrid meetings. 
            This project was a collaboration with my colleague Mads Aqqalu Roager, under the guidance of our supervisor, Fabricio Batista Narcizo.
        </p>
        <h3>
            Motivation and Background
        </h3>
        <p>
        The global shift to remote and hybrid work during the pandemic highlighted several challenges in virtual meeting environments. 
        One persistent issue is the disruption caused when participants need to physically interact with the hosting device to adjust 
        settings like volume or camera toggling. 
        This inspired us to develop a solution that leverages hand gestures for seamless and intuitive control during meetings.
        </p>
        <h3>
            Objectives and Contributions
        </h3>
        <p>
        The primary goal of our research was to create a data-driven solution for gesture-based meeting controls. We aimed to:
        </p>
        <ul>
            <li>Develop a comprehensive data set through a gesture elicitation study.</li>
            <li>Conduct an A/B test to refine and validate our gesture set.</li>
            <li>Build a Minimum Viable Product (MVP) that integrates these gestures with Zoom.</li>
            <li>Evaluate the usability and effectiveness of the MVP.</li>
        </ul>
        <p>
        Our project resulted in &quot;GestureVerse: Exploring the Multiverse of Interactive Gestures,&quot; 
        a rich dataset of natural gestures mapped to common meeting tasks. 
        We also developed an MVP that allows users to control Zoom settings like volume and camera toggling using intuitive hand gestures.
        </p>
        <h3>
            Methodology
        </h3>
        <p>
            To achieve our objectives, we conducted a gesture elicitation study involving 102 university students. 
            Participants were asked to perform gestures for specific meeting tasks, which we recorded and analyzed. 
            We then refined these gestures through an A/B test with 104 participants, selecting the most intuitive and effective gestures for our MVP.
            <br/>
            Our MVP was built using the Mediapipe Framework and OpenCV, 
            and it features a virtual camera that interacts seamlessly with Zoom. 
            This setup enables users to control meeting settings with gestures such as palm up/down for volume control and a wave to end the meeting.
        </p>
        <h3>
            Results and Findings
        </h3>
        <p>
            Our research highlighted several key findings:
        </p>
        <ul>
            <li>There are no universally recognized gestures for all meeting tasks, but some gestures, like raising a hand to indicate a question, had high consensus.</li>
            <li>Dynamic gestures were generally preferred over static ones for tasks like volume control.</li>
            <li>The usability test of our MVP received positive feedback, with users appreciating the intuitiveness of the gestures but suggesting improvements in visual feedback.</li>
        </ul>
        <h3>
            Future Work
        </h3>
        <p>
            While our MVP demonstrated the potential of gesture-based meeting controls, there are several areas for future improvement. These include:
        </p>
        <ul>
            <li>Implement dynamic gesture recognition for more complex gestures.</li>
            <li>Enhance visual feedback to improve user experience.</li>
            <li>Expand the gesture set to cover additional meeting controls and scenarios.</li>
        </ul>
        <h3>
            Personal Reflections
        </h3>
        <p>
            This project has been an incredibly rewarding journey, enhancing my understanding of human-computer 
            interaction as well as getting a glimpse into the potential of machine-learning for mostly unexplored domains. 
            The opportunity to address real-world challenges and create a user-centric solution 
            has been a highlight of my academic career.
        </p>
        <h3>
            Conclusion
        </h3>
        <p>
            Our hand-gesture-based interaction project aims to streamline the user experience in hybrid meetings, 
            reducing friction and allowing for more natural and efficient control. 
            This research lays the groundwork for future innovations in interaction technologies, 
            making virtual meetings smoother and more intuitive for everyone.
            <br/>       
            If you have any questions or would like to collaborate, feel free to reach out to me!
        </p>
    </>,
};

function Bachelor() {
    return (
        <Project {...bachelorData} />
    );
}

export default Bachelor;
