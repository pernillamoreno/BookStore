/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This for a file for a regform. This will store a form that a user can reg.
 * For improvment it will mabey change name or i will change the location.
 *
 */

import { ChangeEvent, useEffect, useRef, useState } from "react";
import Input from "../../../components/Input/Input";
import Style from "./UserFormStyle.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  createAdminUserAction,
  resetCreateListStatus,
  updateAdminUserAction,
} from "./AdminSlice";
import {
  ApiStatus,
  IUpdateAdminUserActionProps,
  IUserForm,
} from "./Admin.type";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";

interface IProps {
  isEditForm?: boolean;
}

const UserForm = (props: IProps) => {
  const { isEditForm } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Role, setRole] = useState("");

  const params = useParams();
  const userIdToEdit = useRef(parseInt(params.id || ""));

  const { list } = useAppSelector((state: RootState) => state.admin);

  useEffect(() => {
    if (isEditForm && userIdToEdit.current) {
      // list of user
      const userData = list.filter((x) => x.id === userIdToEdit.current);

      if (userData.length) {
        setUsername(userData[0].username);
        setPassword(userData[0].password);
        setRole(userData[0].role);
      }
    }
  }, [isEditForm]);

  const { createUserFormStatus, updateUserFormStatus } = useAppSelector(
    (state: RootState) => state.admin
  );
  const dispatch = useAppDispatch();

  /*funtion and call onSubmitForm*/
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const data: IUserForm = { username, password, role: "" };

    if (isEditForm) {
      const dirtyFormData: IUpdateAdminUserActionProps = {
        id: userIdToEdit.current,
        data,
      };
      dispatch(updateAdminUserAction(dirtyFormData));
    } else {
      const data: IUserForm = {
        username,
        password,
        role: "",
      };
      dispatch(createAdminUserAction(data));
    }
  };

  useEffect(() => {
    if (createUserFormStatus === ApiStatus.success) {
      setUsername("");
      setPassword("");
      setRole("");
      dispatch(resetCreateListStatus());
    }
  }, [createUserFormStatus, dispatch]);

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
        <Input
          label="Role"
          value={Role}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setRole(e.target.value);
          }}
        />
        <div className={Style["btn-wrapper"]}>
          <input
            type="submit"
            value={isEditForm ? "Update" : "Create"}
            disabled={
              createUserFormStatus === ApiStatus.loading ||
              updateUserFormStatus === ApiStatus.loading
            }
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
