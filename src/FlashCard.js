import React, { useState } from 'react';
import useHover from './useHover';

const FlashCard = ({ card }) => {
  const [hovering, hoveringActions] = useHover();

  return (
    <div {...hoveringActions} style={{ border: '1px solid' }}>
      <p>{card.question}</p>
      {hovering && <p style={{ color: 'lightgreen' }}>{card.answer}</p>}
    </div>
  );
};

export default FlashCard;
