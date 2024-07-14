import styles from "./ListItem.module.css";

const Item = ({foodItem,handleClick})=>{

    return (
        <li key={foodItem} className={`${styles['kg-item']} list-group-item`}>
            {foodItem} 
            <button className={`${styles.button} btn btn-info`} onClick={handleClick}> buy </button> 
        </li>
    )
}

export default Item;