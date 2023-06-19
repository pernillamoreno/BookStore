/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This file is a file for a Admin file.
 */

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { ApiStatus, IAdmin } from "./Admin.type";
import { deleteAdminUserAction, getAdminUserListAction } from "./AdminSlice";
import { Modal } from "../../../components/Modal";
import { useNavigate } from "react-router-dom";

const AdminUserList = () => {
  const [userDataToView, setUserDatatoView] = useState<IAdmin | null>(null);
  const { list, listStatus } = useAppSelector(
    (state: RootState) => state.admin
  );
  const dispatch = useAppDispatch();

  const navigator = useNavigate();

  useEffect(() => {
    dispatch(getAdminUserListAction());
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>id &#128516;</th>
          <th>Username &#128512;</th>
          <th>Password &#128516;</th>
          <th>Role &#128516;</th>
          <th>Action &#128151;</th>
        </tr>
        {listStatus === ApiStatus.loading && (
          <tbody>List Loading... loading...</tbody>
        )}
        {listStatus === ApiStatus.error && (
          <tbody>Error while loading...</tbody>
        )}
        {listStatus === ApiStatus.ideal &&
          list.map((user: IAdmin, index: number) => {
            return (
              <tr>
                <td>{index + 1} </td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>
                  <div>
                    <input
                      type="button"
                      value="View"
                      onClick={() => {
                        setUserDatatoView(user);
                      }}
                    />
                    <input
                      type="button"
                      value="Edit"
                      onClick={() => {
                        navigator(`/edit/${user.id}`);
                      }}
                    />
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => {
                        dispatch(deleteAdminUserAction(user.id));
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
      </table>
      {userDataToView && (
        <Modal
          title="User Details "
          onClose={() => {
            setUserDatatoView(null);
          }}
        >
          <div>
            <div>
              <label>Username: {userDataToView.username}</label>
            </div>
            <div>
              <label>Password: {userDataToView.password}</label>
            </div>
            <div>
              <label>Role: {userDataToView.role}</label>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AdminUserList;
