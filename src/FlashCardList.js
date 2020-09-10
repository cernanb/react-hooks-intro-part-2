import React from 'react';
import FlashCard from './FlashCard';

const flashCards = [
  {
    id: 1,
    question: 'What is the name of the frontend library created by Facebook',
    answer: 'React',
  },
  {
    id: 2,
    question:
      'What is the name of the state management library popularized by Dan Abramov?',
    answer: 'Redux',
  },
];

const FlashCardList = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px',
      }}
    >
      {flashCards.map((card) => (
        <FlashCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default FlashCardList;
