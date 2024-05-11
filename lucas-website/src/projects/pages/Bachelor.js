import bachelorImg from './assets/bachelor_frontpage.png';
import Project from '../Project';

export const bachelorData = {
    imgpath: bachelorImg,
    imgdesc: 'bachelor',
    title: 'Bachelor',
    subtitle: 'Hand-Gesture-Based Interaction in Hybrid Meetings',
    summary: `This bachelor project aims to improve hybrid and virtual meetings by implementing hand-gesture-based controls in the Zoom platform. 
    It seeks to create a universally recognizable gesture-to-task vocabulary to enhance user experience, 
    reduce friction, and increase focus during meetings.`,
    content: `<p>
    This bachelor project focuses on addressing the challenges faced in hybrid and virtual meetings, 
    particularly the friction caused by the need to adjust meeting settings while some participants are physically present and others join remotely. 
    The solution proposed involves implementing hand-gesture-based interaction to control meeting settings. 
    The project aims to develop a minimum viable product (MVP) that enables hand-gesture-based interaction with the Zoom virtual meeting client. 
    It will utilize a preexisting machine-learning model and aim for a good user experience based on research findings and gesture elicitation studies. 
    The contributions include researching natural gestures, developing an extension to control meeting settings through intuitive hand gestures, 
    and exploring the correlation between hand gestures and meeting tasks. 
    The implications of the project include improving user experience in hybrid meetings, 
    reducing friction, and increasing focus. 
    The hypothesis posits that there are intuitively associated hand gestures for specific meeting controls, 
    forming a universally recognizable gesture-to-task vocabulary. 
    The research question seeks to determine whether a consensus on such a vocabulary can be reached among diverse international university students.
    </p>
    <a href='youtube.com' aria-label='Watch the video presentation'>Watch the video presentation 🎥</a>`,
};

function Bachelor() {
    return (
        <Project {...bachelorData} />
    );
}

export default Bachelor;
