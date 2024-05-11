import bachelorImg from './assets/bachelor_frontpage.png';
import Project from '../Project';

export const dhiData = {
    imgpath: bachelorImg,
    imgdesc: 'dhi',
    title: 'DHI',
    subtitle: 'GreenUp project',
    summary: `This project was part of a course during our 4th semester where we learned to use Scrum with a business to produce value for them.`,
    content: `<p>
    This project was part of a course during our 4th semester where we learned to use Scrum with a business to produce value for them.
    </p>
    <a href='https://www.linkedin.com/feed/update/urn:li:activity:7089530977546297345/' aria-label='GreenUp'>See the post</a>`,
};

function Bachelor() {
    return (
        <Project {...dhiData} />
    );
}

export default Bachelor;
