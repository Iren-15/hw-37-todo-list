import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import styles from "../input/styles.module.scss";

export interface IInput {
  type?: HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name, onChange, type = "text", value }: IInput) => {
  return (
    <input
      className={styles["input-item"]}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};
