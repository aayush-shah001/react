import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import {useState} from "react";


function App(){
  
  // const foodItems = ["Rice", "dal", "roti", "green vegetable"];
  // const foodItems = [];

  // let[textToShow,setTextState] = useState('hello everyone');

  let [foodItems,setFoodItems] = useState([]); 

  const onKeyDown = (event)=>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems,newFoodItem];
      setFoodItems(newItems);
      console.log(foodItems);
    }
}

  return(
    <Container>
      <h1>Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </Container>
  )

}

export default App;
