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
import { useAppDispatch } from "../../hooks";
import { createAdminUserAction } from "./AdminSlice";
import { IUserForm } from "./Admin.type";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  /*funtion and call onSubmitForm*/
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const data: IUserForm = { username, password };
    dispatch(createAdminUserAction(data));
  };

  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={onSubmitForm}>
        <Input
          label="Name"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
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
