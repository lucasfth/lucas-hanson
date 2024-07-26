import Image from 'react-bootstrap/Image';

export const Repolicense = {
  img: 'https://repolicense.com/public/og-image.png',
  imgdesc: 'Click to visit the website',
  imgref: 'https://repolicense.com',
  title: 'Repolicense',
  subtitle: 'Choose the right license for your open source project',
  summary: `Repolicense is a web application that helps developers choose the right license for their open-source projects.`,
  Info:
  <>
    <p style={{ textAlign: 'left' }}>
      <Image src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" rounded alt="HTML5"/>{' '}
      <Image src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" rounded alt="CSS3"/>{' '}
      <Image src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" rounded alt="JavaScript"/>{' '}
      <Image src="https://img.shields.io/badge/shoelace-0CA5E9?style=for-the-badge&logo=shoelace&logoColor=white" rounded alt="Shoelace"/>{' '}
    </p>
  </>,
  Content:
<>
    <h3>Overview</h3>
    <p>
      Repolicense is a web application that helps developers choose the right license for their open-source projects. 
      The app provides an easy-to-use interface where users answer yes or no questions. 
      Based on these responses, the app navigates a decision tree to suggest the most suitable license.
      This method simplifies the complex process of selecting a license by breaking it down into manageable steps.
    </p>
    <h3>Motivation</h3>
    <p>
      The project was created to address the overwhelming number of available licenses, making it difficult for developers to choose the right one. 
      Repolicense aims to provide a simple and intuitive tool for selecting the appropriate license, ensuring that developers can make informed decisions.
      Transparency is a key aspect of this project; hence, the code is open source and available on GitHub.
    </p>
    <h3>Features</h3>
    <h4>Decision Tree Navigation</h4>
    <p>
      The core feature of Repolicense is its decision tree, which guides users through a series of questions to determine the best license for their project.
      Each question leads to either another question or a final license recommendation, making the process straightforward.
    </p>
    <h4>MermaidJS Graph</h4>
    <p>
      To enhance transparency and clarity, Repolicense includes a feature that translates the JavaScript decision tree into a MermaidJS graph.
      This visual representation helps users understand the decision-making process and how the final recommendations are derived.
    </p>
    <h4>API Integration</h4>
    <p>
      Repolicense fetches real-time license descriptions from the GitHub API, providing up-to-date and detailed information about each suggested license.
    </p>
    <h4>Open Source</h4>
    <p>
      The entire codebase for Repolicense is open source and available on GitHub. This allows developers to contribute, suggest improvements, and understand the inner workings of the application.
    </p>
    <h3>How to Use</h3>
    <p>
      Using Repolicense is simple:
    </p>
    <ol>
      <li>Visit the Repolicense website <a href="https://repolicense.com" target="_blank" rel="noopener noreferrer">here</a>.</li>
      <li>Answer the series of yes or no questions about your project and licensing preferences.</li>
      <li>Receive a license recommendation based on your answers.</li>
      <li>Review the license description and details fetched from the GitHub API.</li>
    </ol>
    <h3>Get Involved</h3>
    <p>
      Repolicense is an open-source project, and contributions are welcome. If you have any feedback, suggestions, or improvements, you can:
    </p>
    <ul>
      <li>Visit the <a href="https://github.com/lucasfth/repolicense" target="_blank" rel="noopener noreferrer">GitHub repository</a> to view the code and open issues or conversations.</li>
      <li>Reach out via <a href="mailto:contact+repolicense@lucashanson.dk?subject=Repolicense%20feedback">email</a> with any feedback or questions.</li>
    </ul>
  </>
}

export default Repolicense;
