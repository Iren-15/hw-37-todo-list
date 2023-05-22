import { useContext } from "react";
import { TodoContext } from "../../providers/todo-provider";
import styles from "../listTodo/styles.module.scss";

export const ListTodo = () => {
  let { arrayTodo } = useContext(TodoContext);
  let { setArrayTodo } = useContext(TodoContext);

  const fItemDel = (index: number) => {
    alert("Entry will be deleted!");
    let arrayNew = [...arrayTodo];
    arrayNew.splice(index, 1);
    setArrayTodo(arrayNew);
  };

  //onDoubleClick не работает !???????
  return (
    <div>
      {arrayTodo.map((item, index) => (
        <p
          className={styles["todo-item"]}
          onClick={() => fItemDel(index)}
          key={index}
        >
          {item}
        </p>
      ))}
    </div>
  );
};
