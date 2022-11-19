import React from 'react';
import './styles/AboutMe.scss';
export interface AboutMeInterface {}

const AboutMe : React.FC<AboutMeInterface> = () => {
	return <div className='aboutme'>AboutMe</div >;
};

export default AboutMe;
