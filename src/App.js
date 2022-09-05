import logo from './logo.svg';
import './App.css';
import foodsJson from './foods.json';
//import React from "react";
import { useState } from 'react';
import FoodBox from './components/FoodBox';

import { Row } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div>
      <Row>
        {foods.map(function (food) {
          return (
            <FoodBox food={food} />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
