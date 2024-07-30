import React, { useState } from 'react'

const ProductForm = ({onProduct}) => {
    const [title,setTitle] = useState()
    const [price,setPrice] = useState()
    const [description,setDescription] = useState()
    const [ingredinets,setIngredients] = useState()
    const [photo,setPhoto] = useState()
    
    const onSubmit = (e) => {
        e.preventDefault()
        onProduct(title,price,description,ingredinets,photo)
    }
  return (
    <form className='ingredientForm' onSubmit={onSubmit}>
        <p className="text">Product</p>
        <div className='ingredinet'>
          <input type="text" placeholder='Title' onChange={e => setTitle(e.target.value)}/>
          <input type="number" placeholder='Price' onChange={e => setPrice(e.target.value)}/>
          <input type="text" placeholder='Description' onChange={e => setDescription(e.target.value)}/>
          <input type="text" placeholder='Ingredients' onChange={e => setIngredients(e.target.value)}/>
          <input type="file" placeholder='photo' onChange={e => setPhoto(e.target.value)}/>
          <button className='btn' type='submit'>Add</button>
        </div>
    </form>
  )
}

export default ProductForm