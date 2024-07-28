import React from 'react';
import cappuccino from './images/cappuccino.PNG';
import latte from './images/latte.PNG';
import mocha from './images/mocha.PNG';
import americano from './images/americano.PNG';


const images = {
  Cappuccino: cappuccino,
  Latte: latte,
  Mocha: mocha,
  Americano: americano,
};

const Card = ({ coffee }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2 className="coffee-name">{coffee.name}</h2>
          <img className="coffee-img" src={images[coffee.name]} alt={coffee.name} />
        </div>
        <div className="flip-card-back">
          <p className="coffee-description">{coffee.description}</p>
          <div className="main-div">
          <ul>
            {coffee.ingredients.map((ingredient, index) => (
              <li className="ingredients" key={index}>{ingredient}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;