/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This for a file for a regform. This will store a form that a user can reg.
 * For improvment it will mabey change name or i will change the location.
 *
 */

import { ChangeEvent, useState } from "react";
import Input from "../../../components/Input/Input";
import Style from "./UserFormStyle.module.css";

const UserForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={Style.container}>
      <form className={Style.form}>
        <Input
          label="Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <Input
          label="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <div className={Style["btn-wrapper"]}>
          <input type="submit" value="Add user" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
