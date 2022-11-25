import React from 'react';
import './styles/TextArea.scss';
export interface TextAreaInterface {
  name: string;
  placeHolder: string;
  value: string;
  onChange: (e: any) => void;
}

const TextArea: React.FC<TextAreaInterface> = (prop) => {
  return (
    <div className="textarea-wrapper">
      <textarea
        id={prop.name}
        className="textarea-wrapper__input-area"
        {...prop}
      />
      <label htmlFor={prop.name} className="textarea-wrapper__label">
        {prop.placeHolder}
      </label>
    </div>
  );
};

export default TextArea;
