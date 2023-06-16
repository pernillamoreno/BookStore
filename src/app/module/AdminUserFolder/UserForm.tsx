/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This for a file for a regform. This will store a form that a user can reg.
 * For improvment it will mabey change name or i will change the location.
 *
 */

import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import Style from "./UserFormStyle.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { createAdminUserAction, resetCreateListStatus } from "./AdminSlice";
import { ApiStatus, IUserForm } from "./Admin.type";
import { RootState } from "../../store";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { createUserFormStatus } = useAppSelector(
    (state: RootState) => state.admin
  );
  const dispatch = useAppDispatch();

  /*funtion and call onSubmitForm*/
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const data: IUserForm = { username, password };
    dispatch(createAdminUserAction(data));
  };

  useEffect(() => {
    if (createUserFormStatus === ApiStatus.success) {
      setUsername("");
      setPassword("");
      dispatch(resetCreateListStatus());
    }
  }, [createUserFormStatus]);

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
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
