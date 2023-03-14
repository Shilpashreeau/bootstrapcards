import React from 'react';
import './index.css';

import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import cardsArr from "./data";

export default function App() {
  console.log(cardsArr);
  const cards = cardsArr.map((ele, index) => {
    return (
      <Card1
        {...ele}
        key={index}
     />
    );
  })

  console.log('this is cards:', cards);
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
    {cards}
    {/* <Card1 title="Santorini" />
    <Card2 /> */}
</section>
    </div>
  );
}

