import React from 'react';
import './styles/Lights.scss';
export interface LightsInterface {}

const LightBlue: React.FC<LightsInterface> = () => {
  return <div className="light-cyan" />;
};

export default LightBlue;
