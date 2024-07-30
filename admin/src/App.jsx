import React, { useEffect, useState } from 'react'
import IngredientForm from './components/IngredientForm'
import ProductForm from './components/ProductForm'

const App = () => {
  const API_KEY = "7LExPRtLlXqoeBVIDj9ihxU1b7extYFcjjypI4VxK3f1q3-plg"
  const [ingredient, setIngredientList] = useState([])
  const [coffeList, setCoffeList] = useState([])


  const onFormSubmit = (name,price,description) => {
    console.log(name,price,description)
    fetch(`api/v1/ingredient`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },body: JSON.stringify([{name,price,description}])
    }).then(response => {
        if(!response.ok) throw new Error("response failed")
        return response.json()
    })
    .then(data => 
      setIngredientList((prev) => [...prev, {
        description: data.items[0].description,
        name: data.items[0].name,
        price: data.items[0].price,
        id: data.items[0]._uuid
      }])
    )
    .catch(error => console.log(error))
  }

  const onProduct = (title,price,description,ingredinets,photo) => {
    console.log(title,price,description,ingredinets,photo)
    fetch(`api/v1/coffe`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },body: JSON.stringify([{title,price,description,ingredinets,photo}])
    }).then(response => {
        if(!response.ok) throw new Error("response failed")
        return response.json()
    })
    .then(data => 
        setCoffeList((prev) => [...prev, {
        title: data.items[0].title,
        price: data.items[0].price,
        description: data.items[0].description,
        ingredinets: data.items[0].ingredinets,
        photo: data.items[0].photo,
        id: data.items[0]._uuid
      }])
    )
    .catch(error => console.log(error))
  }

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

  useEffect(() => {
    fetch(`api/v1/ingredient`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then(response => {
        if(!response.ok) throw new Error("response failed")
        return response.json()
    })
    .then(data => setIngredientList(data.items.map(el => {
        return {
            description: el.description,
            name: el.name,
            price: el.price,
            id: el._uuid
        }
    })))
    .catch(error => console.log(error))
  }, [])
  
  console.log(ingredient)
  console.log(coffeList)

  return (
    <div>
      <IngredientForm onFormSubmit={onFormSubmit}/>
      <ProductForm onProduct={onProduct}/>
        {/* INGREDIENTEBIS MAPI */}
      {/* {ingredient.map((ing) => <div key={ing.id} className='wrapper'>
            <h1>{ing.name}</h1>
            <h1>{ing.price}</h1>
            <h1>{ing.description}</h1>
            <button>Del</button>
            <button>Edit</button>
      </div>)} */}
      {/* KAVIS MAPI */}
        {coffeList.map((coffe) => <div key={coffe.id} className='wrapper'>
            <h1>{coffe.description}</h1>
            <h1>{coffe.ingredinets}</h1>
            <h1>{coffe.price}</h1>
            <h1>{coffe.title}</h1>
            <button>Del</button>
            <button>Edit</button>
      </div>)}
    </div>
  )
}

export default App