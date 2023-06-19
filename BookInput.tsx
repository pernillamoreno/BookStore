import { ChangeEvent } from "react";
import Style from "./BookInputStyle.module.css";

interface IProps {
  label: string;
  value: string | number;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
/*Here is the Inputs in my Userform.*/
const Input = (props: IProps) => {
  const { label, value, type = "text", onChange } = props;
  return (
    <div className={Style.container}>
      <label>{label}:</label>
      <div>
        <input
          type={type}
          value={value}
          className={Style.input}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
