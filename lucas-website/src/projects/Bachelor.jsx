import Image from 'react-bootstrap/Image';

export const Bachelor = {
  img: '/assets/bachelor_frontpage.webp',
  imgdesc: 'Click to download the bachelor thesis PDF',
  imgref: '/assets/hand-gesture-based_interaction.pdf',
  title: 'Bachelor',
  subtitle: 'Hand-Gesture-Based Interaction in Hybrid Meetings',
  summary: `The project explored intuitive hand gestures to control virtual meeting settings, 
  aiming to enhance the efficiency and user experience in hybrid meeting environments.`,
  Info:
  <>
      <p style={{ textAlign: 'left' }}>
          <Image src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' rounded alt='Python logo' />{' '}
          <Image src='https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white' rounded alt='TensorFlow logo' />{' '}
          <Image src='https://img.shields.io/badge/MediaPipe-4285F4?style=for-the-badge&logo=google&logoColor=white' rounded alt='MediaPipe logo' />{' '}
      </p>
  </>,
  Content: 
  <>
    <h3>Overview</h3>
    <p>
      My bachelor project, conducted at the IT-University of Copenhagen, focused on utilizing hand gestures to improve the user experience in hybrid meetings. This project addressed the common challenges faced during such meetings by providing an intuitive way to control meeting settings like volume and camera toggling using hand gestures.
    </p>

    <h3>Motivation</h3>
    <p>
      With the rise of remote and hybrid work, traditional methods requiring physical interaction with the hosting device often disrupted the meeting flow. This project aimed to reduce such disruptions by enabling hand-gesture-based controls, thereby enhancing meeting efficiency and user satisfaction.
    </p>

    <h3>Objectives</h3>
    <ul>
      <li>Developed a comprehensive dataset through a gesture elicitation study.</li>
      <li>Conducted A/B testing to refine the gesture set.</li>
      <li>Created a Minimum Viable Product (MVP) to integrate these gestures with Zoom.</li>
      <li>Tested the usability of the MVP.</li>
    </ul>

    <h3>Methodology</h3>
    <p>
      Our approach involved a gesture elicitation study with 102 university students, followed by A/B testing with 104 participants. We then developed an MVP using the Mediapipe Framework and OpenCV, which allowed users to control Zoom meetings with gestures such as palm up/down for volume control and a wave to end the meeting.
    </p>

    <h3>Data Collection</h3>
    <p>
      We collected a substantial amount of data during our study:
    </p>
    <ul>
      <li>Total video recordings: just below 14 hours</li>
      <li>Data size: 43.52 gigabytes</li>
      <li>Participants in gesture elicitation study: 102</li>
      <li>Participants in A/B testing: 104</li>
    </ul>

    <h3>Results</h3>
    <p>
      Our research identified popular gestures for specific meeting tasks, though we found no universally recognized gestures. The usability test received positive feedback on the intuitiveness of the gestures, with suggestions for improvements in visual feedback.
    </p>

    <h3>Future Work</h3>
    <ul>
      <li>Implement dynamic gesture recognition.</li>
      <li>Improve visual feedback during gesture use.</li>
      <li>Expand the gesture set to cover more meeting controls.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>
      This project demonstrated the potential of hand-gesture-based controls to enhance hybrid meeting experiences. 
      By reducing physical interaction with meeting controls, we aimed to create a smoother and more intuitive user experience.
    </p>
  </>,
}

export default Bachelor
