import React from 'react'
import { Divider, Input } from 'antd';
import {useState} from 'react';


function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImg] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    function handleName(event) {
        setName(event.target.value)
    }

    function handleImg(event) {
        setImg(event.target.value)
    }

    function handleCalories(event) {
        setCalories(event.target.value)
    }

    function handleServings(event) {
        setServings(event.target.value)
    }
    // Shorter way to write that function ⬆️
    // const handleServings = (event) => {setServings(event.target.value)};
  

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings
        }
        props.addNewFood(newFood);
        ;
    }

    return (
        <form onSubmit={handleSubmit}>
          <Divider>Add Food</Divider>

          <label>Name
          <Input value={name} type="text" onChange={handleName} />
          </label>

          <label>Image
          <Input value={image} type="text" onChange={handleImg} />
          </label>

          <label>Calories
          <Input value={calories} type="text" onChange={handleCalories}/>
          </label>

          <label>Servings
          <Input value={servings} type="text" onChange={handleServings} />
          </label>

          <button type="submit">Create</button>
        </form>
      );
}

export default AddFoodForm;