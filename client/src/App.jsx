import React from 'react';
import { CappuccinoProvider } from './CappuccinoContext';
import Card from './Card.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './index.css';

const App = () => {
  const coffees = [
    { name: 'Cappuccino', description: 'A classic coffee drink', ingredients: ['espresso', 'steamed milk', 'foam'],price:5.4 },
    { name: 'Latte', description: 'A coffee drink with a lot of milk', ingredients: ['espresso', 'steamed milk'],price:6.5 },
    { name: 'Mocha', description: 'A coffee drink with chocolate', ingredients: ['espresso', 'steamed milk', 'chocolate syrup'],price:7.5 },
    { name: 'Americano', description: 'A coffee drink with a lot of water', ingredients: ['espresso', 'water'],price:3.5 },
  ];

  return (
    <div>
      <Header />
      {coffees.map((coffee, index) => (
        <CappuccinoProvider key={index} value={{ coffee }}>
          <Card coffee={coffee} />
        </CappuccinoProvider>
      ))}
      <Footer />
    </div>
  );
};

export default App;
