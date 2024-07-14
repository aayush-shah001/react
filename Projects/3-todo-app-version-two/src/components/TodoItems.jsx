import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';

const TodoItems = ({todoItems})=>{

    return(
      <div className={styles['items-container']}>
        {
            todoItems.map((item)=>{
              return <TodoItem TodoDate = {item.dueDate} TodoName = {item.name}></TodoItem> 
            })
        }
      </div>
    );
};

export default TodoItems;