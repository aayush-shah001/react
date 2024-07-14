import styles from './FoodInput.module.css'

const FoodInput = ({handleKeyDown})=>{

    return(
        <input 
        type="text"
        placeholder = "Enter a food item here"
        className={styles.foodInput}
        onKeyDown = {handleKeyDown}
        ></input>
    )

}

export default FoodInput;