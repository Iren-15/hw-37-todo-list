import styles from "../button/styles.module.scss";

interface IButton {
  title?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ disabled, onClick }: IButton) => {
  return (
    <button className={styles["btn-add"]} disabled={disabled} onClick={onClick}>
      Add
    </button>
  );
};
