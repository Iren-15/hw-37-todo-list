import { TodoProvider } from "./providers/todo-provider";
import { InputWithBtn } from "./sections/input-with-btn";
import { ListTodo } from "./sections/list-todo";

import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["header"]}>My toDo List</h1>
      <TodoProvider>
        <InputWithBtn />
        <ListTodo />
      </TodoProvider>
    </div>
  );
}

export default App;
