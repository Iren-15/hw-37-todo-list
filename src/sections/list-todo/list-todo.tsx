import { useContext} from "react";
import { TodoContext } from "../../providers/todo-provider";
import styles from "../list-todo/styles.module.scss";

export const ListTodo = () => {
  const { arrayTodo, setArrayTodo } = useContext(TodoContext);
 
  const fItemDel = (index: number) => {
    alert("Entry will be deleted!");
    const arrayNew = [...arrayTodo];
    arrayNew.splice(index, 1);
    setArrayTodo(arrayNew);
  };

  return (
    <div>
      {arrayTodo.map((item, index) => (
        <p
          className={styles["todo-item"]}
          onDoubleClick={() => fItemDel(index)}
          key={index}
        >
          {item}
        </p>
      ))}
    </div>
  );
};
