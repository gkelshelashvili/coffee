import React from 'react';
import { CappuccinoProvider } from './CappuccinoContext';
import Card from './card.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';

const App = () => {
  const coffees = [
    { name: 'Cappuccino', description: 'A classic coffee drink', ingredients: ['espresso', 'steamed milk', 'foam'] },
    { name: 'Latte', description: 'A coffee drink with a lot of milk', ingredients: ['espresso', 'steamed milk'] },
    { name: 'Mocha', description: 'A coffee drink with chocolate', ingredients: ['espresso', 'steamed milk', 'chocolate syrup'] },
    { name: 'Americano', description: 'A coffee drink with a lot of water', ingredients: ['espresso', 'water'] },
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
