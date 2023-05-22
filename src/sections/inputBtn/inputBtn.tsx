import { useContext, useState } from "react";
import { Button } from "../../components/button";
import { Input, IInput } from "../../components/input";
import { TodoContext } from "../../providers/todo-provider";

export const InputBtn = () => {
  const [value, setValue] = useState<string>("");

  let { setArrayTodo } = useContext(TodoContext);
  let { arrayTodo } = useContext(TodoContext);

  const onChange: IInput["onChange"] = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setArrayTodo([...arrayTodo, value]);
  };
  
  return (
    <div>
      <Input value={value} type="string" onChange={onChange} />
      <Button title="Submit" onClick={onClick} />
    </div>
  );
};

