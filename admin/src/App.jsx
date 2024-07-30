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

  const deleteIngredient = (id) => {
    fetch(`api/v1/ingredient/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then(response => {
      if(!response.ok) throw new Error("delete failed")
      setIngredientList(prev => prev.filter(ing => ing.id !== id))
    })
    .catch(error => console.log(error))
  }

  const deleteProduct = (id) => {
    fetch(`api/v1/coffe/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then(response => {
      if(!response.ok) throw new Error("delete failed")
      setCoffeList(prev => prev.filter(coffee => coffee.id !== id))
    })
    .catch(error => console.log(error))
  }

  
  const updateIngredient = (id, updatedData) => {
    fetch(`api/v1/ingredient/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(updatedData)
    }).then(response => {
      if(!response.ok) throw new Error("update failed")
      return response.json()
    })
    .then(data => {
      setIngredientList(prev => prev.map(ing => 
        ing.id === id ? {...ing, ...data.items[0]} : ing
      ))
    })
    .catch(error => console.log(error))
  }

  const updateProduct = (id, updatedData) => {
    fetch(`api/v1/coffe/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(updatedData)
    }).then(response => {
      if(!response.ok) throw new Error("update failed")
      return response.json()
    })
    .then(data => {
      setCoffeList(prev => prev.map(coffee => 
        coffee.id === id ? {...coffee, ...data.items[0]} : coffee
      ))
    })
    .catch(error => console.log(error))
  }

  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      <IngredientForm onFormSubmit={onFormSubmit}/>
      <ProductForm onProduct={onProduct}/>
        {/* INGREDIENTEBIS MAPI */}
        {ingredient.map((ing) => (
     <div key={ing.id} className='wrapper'>{
      
      editingId === ing.id ? (
      <>
        <input  
          defaultValue={ing.name} 
          onChange={(e) => ing.name = e.target.value}/>

        <input 
          defaultValue={ing.price} 
          onChange={(e) => ing.price = e.target.value}/>

        <input 
          defaultValue={ing.description} 
          onChange={(e) => ing.description = e.target.value}/>

        <button onClick={() => {
          updateIngredient(ing.id, ing);
          setEditingId(null);
        }}>Save</button>

        <button onClick={() => setEditingId(null)}>Cancel</button>
      </>
    ) : (
      <>
        <h1>{ing.name}</h1>
        <h1>{ing.price}</h1>
        <h1>{ing.description}</h1>
        <button className='del' onClick={() => deleteIngredient(ing.id)}>Delete</button>
        <button className='edit' onClick={() => setEditingId(ing.id)}>Edit</button>
      </>
    )}
  </div>
))}
      {/* KAVIS MAPI */}
      {coffeList.map((coffe) => (
  <div key={coffe.id} className='wrapper'>
    {editingId === coffe.id ? (
      <>
        <input 
          defaultValue={coffe.title} 
          onChange={(e) => coffe.title = e.target.value}
        />
        <input 
          defaultValue={coffe.price} 
          onChange={(e) => coffe.price = e.target.value}
        />
        <input 
          defaultValue={coffe.description} 
          onChange={(e) => coffe.description = e.target.value}
        />
        <input 
          defaultValue={coffe.ingredinets} 
          onChange={(e) => coffe.ingredinets = e.target.value}
        />
        <button onClick={() => {
          updateProduct(coffe.id, coffe);
          setEditingId(null);
        }}>Save</button>
        <button onClick={() => setEditingId(null)}>Cancel</button>
      </>
    ) : (
      <>
        <h1>{coffe.title}</h1>
        <h1>{coffe.price}</h1>
        <h1>{coffe.description}</h1>
        <h1>{coffe.ingredinets}</h1>
        <button className='del' onClick={() => deleteProduct(coffe.id)}>Delete</button>
        <button className='edit' onClick={() => setEditingId(coffe.id)}>Edit</button>
      </>
    )}
  </div>
))}
    </div>
  )
}

export default App