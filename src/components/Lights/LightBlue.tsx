import React from 'react';
import './styles/Lights.scss';
export interface LightsInterface {
  rigth: boolean;
}

const LightBlue: React.FC<LightsInterface> = ({ rigth }) => {
  return <div className={`light-blue ${rigth && 'light-blue--right'}`} />;
};

export default LightBlue;
