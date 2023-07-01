import { useContext, useState } from "react";
import { Button } from "../../components/button";
import { Input, IInput } from "../../components/input";
import { TodoContext } from "../../providers/todo-provider";

export const InputWithBtn = () => {
  const [value, setValue] = useState<string>("");

  const { arrayTodo, setArrayTodo } = useContext(TodoContext);
  
  const onChange: IInput["onChange"] = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setArrayTodo([...arrayTodo, value]);
  };
  
  return (
    <div>
      <Input value={value} type="string" onChange={onChange} />
      <Button onClick={onClick} />
    </div>
  );
};

