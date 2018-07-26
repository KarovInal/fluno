import React from 'react';
import SimpleLine from 'Atoms/simple-line';
import { BoldText, RegularText } from 'Atoms/fonts';

const SectionTitle = ({ title, description }) => {
  return (
    <div>
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
