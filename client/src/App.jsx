import React, { useEffect, useState } from 'react';
import Card from './card.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import './index.css';

const App = () => {
  const coffees = [
    { name: 'Cappuccino', description: 'A classic coffee drink', ingredients: ['espresso', 'steamed milk', 'foam'],price:5.4 },
    { name: 'Latte', description: 'A coffee drink with a lot of milk', ingredients: ['espresso', 'steamed milk'],price:6.5 },
    { name: 'Mocha', description: 'A coffee drink with chocolate', ingredients: ['espresso', 'steamed milk', 'chocolate syrup'],price:7.5 },
    { name: 'Americano', description: 'A coffee drink with a lot of water', ingredients: ['espresso', 'water'],price:3.5 },
  ];
 
  const API_KEY = "7LExPRtLlXqoeBVIDj9ihxU1b7extYFcjjypI4VxK3f1q3-plg"
  const [coffeList, setCoffeList] = useState([])

  
  useEffect(() => {
    fetch(`api/v1/coffe`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then(response => {
        if(!response.ok) throw new Error("response failed")
        return response.json()
    })
    .then(data => setCoffeList(data.items.map(el => {
        return {
            title: data.items[0].title,
            price: data.items[0].price,
            description: data.items[0].description,
            ingredinets: data.items[0].ingredinets,
            photo: data.items[0].photo,
            id: data.items[0]._uuid
        }
    })))
    .catch(error => console.log(error))
  }, [])

  console.log(coffeList)
  return (
    <div>
      <Header />
          <Card coffee={coffeList}/>
      <Footer />
    </div>
  );
};

export default App;
