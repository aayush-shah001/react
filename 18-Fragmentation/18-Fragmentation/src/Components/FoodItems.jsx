import Item from "./ListItem";

const FoodItems = ({items})=>{

  return(
    <ul className="list-group">
        {items.map((item)=>{
            return (
                <Item foodItem = {item} handleClick={()=>{
                  const element = document.querySelector('btn');
                  element.classList.add("active");
                }}></Item>
            )
        })}
    </ul>
  )
};

export default FoodItems;