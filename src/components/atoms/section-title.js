import React from 'react';
import SimpleLine from 'Atoms/simple-line';
import { BoldText, RegularText } from 'Atoms/fonts';

const SectionTitle = ({ title, description, style = {} }) => {
  return (
    <div style={style}>
      <BoldText>{title}</BoldText>
      {
        description && (
          <RegularText>{ description }</RegularText>
        ) 
      }
      <SimpleLine style={{ marginTop: '15px', marginBottom: '20px' }}/>
    </div>
  );
};

export default SectionTitle;
