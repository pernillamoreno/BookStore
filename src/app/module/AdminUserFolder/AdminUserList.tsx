/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This file is a file for a Admin file.
 */

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { ApiStatus, IAdmin } from "./Admin.type";
import { getAdminUserListAction } from "./AdminSlice";

/*import Style from "./SiteLayoutStyle.module.css";*/
const AdminUserList = () => {
  const { list, listStatus } = useAppSelector(
    (state: RootState) => state.admin
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAdminUserListAction());
  }, []);

  return (
    <>
      <div className="Admin-serch">
        <h1>Admin Page</h1>
        <input
          className="Admin-field"
          type="text"
          placeholder="Search user..."
        />
        <button
          /*temp styling*/
          style={{ backgroundColor: "gold", float: "right" }}
          className="Sign-btn"
        >
          Sign out
        </button>
      </div>

      <table>
        <tr>
          <th>id &#128516;</th>
          <th>Username &#128512;</th>
          <th>Role &#128516;</th>
          <th>Purchase &#128525;</th>
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
                <td>{user.role}</td>
                <td>{user.purchase}</td>
                <td>action</td>
              </tr>
            );
          })}
      </table>
    </>
  );
};

export default AdminUserList;
