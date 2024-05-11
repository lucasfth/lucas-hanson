import bachelorImg from './assets/bachelor_frontpage.png';
import Project from '../Project';

export const bachelorData = {
    imgpath: bachelorImg,
    imgdesc: 'Link to download the bachelor thesis PDF',
    imgref: "",
    title: 'Bachelor',
    subtitle: 'Hand-Gesture-Based Interaction in Hybrid Meetings',
    summary: `This bachelor project aims to improve hybrid and virtual meetings by implementing hand-gesture-based controls in the Zoom platform. 
    It seeks to create a universally recognizable gesture-to-task vocabulary to enhance user experience, 
    reduce friction, and increase focus during meetings.`,
    Content: 
    <>
        <p>
        During my bachelor&apos;s project, titled &quot;Hand-Gesture-Based Interaction in Hybrid Meetings,&quot; 
        I focused on developing a minimal viable product (MVP) that enables hand-gesture-based interaction in hybrid meeting environments. 
        The project involved implementing a machine learning model capable of recognizing hand gestures and translating them into actions within meeting platforms like Zoom.
        <br />
        Key achievements include:
        </p>
        <ul>
            <li>
                <p>Efficient Model Training:<br />
                Utilized an existing model and supplemented it with new data, 
                requiring minimal training time while maintaining high accuracy.
                </p>
            </li>
            <li>
                <p>Gesture Set Development:<br />
                Developed a gesture set based on dynamic gestures primarily, 
                enhancing the program&apos;s capability to recognize natural hand movements during interactions.
                </p>
            </li>
            <li>
                <p>Future Extensions:<br />
                Outlined future enhancements, 
                including dynamic gesture set training using LSTM neural networks and implementing visual 
                feedback for gesture recognition.
                </p>
            </li>
            <li>
                <p>Discussion and Findings:<br />
                Investigated the results of experiments, 
                highlighting challenges and proposing solutions for creating a gesture-to-task vocabulary. 
                Explored the importance of reversible gestures, 
                experiential bias from analogue interfaces, and the use of dynamic gestures.
                </p>
            </li>
        </ul>
        <p>
        Conclusion:<br />
        The project&apos;s findings revealed the complexity of developing a natural gesture-to-task 
        vocabulary and emphasized the importance of considering user preferences and societal norms. 
        Future work should focus on implementing the proposed framework for gesture set creation and 
        conducting further tests to evaluate its effectiveness and usability.
        <br />
        Finalized Gesture Set:<br />
        The project concluded with the establishment of a finalized gesture set, determined through an A/B test. 
        This set serves as the foundation for future iterations of the hand-gesture-based interaction system.
        </p>
    </>,
};

function Bachelor() {
    return (
        <Project {...bachelorData} />
    );
}

export default Bachelor;
