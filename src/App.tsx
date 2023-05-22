import { TodoProvider } from "./providers/todo-provider";
import { InputBtn } from "./sections/inputBtn";
import { ListTodo } from "./sections/listTodo";

import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["header"]}>My toDo List</h1>
      <TodoProvider>
        <InputBtn />
        <ListTodo />
      </TodoProvider>
    </div>
  );
}

export default App;
