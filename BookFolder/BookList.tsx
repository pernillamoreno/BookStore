import { AsyncThunkAction, Dispatch, AnyAction } from "@reduxjs/toolkit";
import { Modal } from "../../../components/Modal";
import { ApiStatus, IBook } from "./Book.type";

/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This file is a file for a Admin page.
 */
const BookList = () => {
  function setUserDatatoView(arg0: null) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="Book-search">
        <h1>Admin Page</h1>
        <input
          className="Book-field"
          type="text"
          placeholder="Search book..."
        />
        <button className="Book-btn">Add new book</button>
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
          <th>Id &#128516;</th>
          <th>Title &#128516;</th>
          <th>Author &#128512;</th>
          <th>Availability &#128516;</th>
          <th>Order &#128525;</th>
          <th>Action &#128151;</th>
        </tr>
        {listStatus === ApiStatus.loading && (
          <tbody>List Loading... loading...</tbody>
        )}
        {listStatus === ApiStatus.error && (
          <tbody>Error while loading...</tbody>
        )}
        {listStatus === ApiStatus.ideal &&
          list.map((user: IBook, index: number) => {
            function setUserDatatoView(user: IBook) {
              throw new Error("Function not implemented.");
            }

            function dispatch(
              arg0: AsyncThunkAction<
                number,
                number,
                {
                  state?: unknown;
                  dispatch?: Dispatch<AnyAction> | undefined;
                  extra?: unknown;
                  rejectValue?: unknown;
                  serializedErrorType?: unknown;
                  pendingMeta?: unknown;
                  fulfilledMeta?: unknown;
                  rejectedMeta?: unknown;
                }
              >
            ) {
              throw new Error("Function not implemented.");
            }

            function deleteBookAction(
              id: number
            ): AsyncThunkAction<
              number,
              number,
              {
                state?: unknown;
                dispatch?: Dispatch<AnyAction> | undefined;
                extra?: unknown;
                rejectValue?: unknown;
                serializedErrorType?: unknown;
                pendingMeta?: unknown;
                fulfilledMeta?: unknown;
                rejectedMeta?: unknown;
              }
            > {
              throw new Error("Function not implemented.");
            }

            return (
              <tr>
                <td>{index + 1} </td>
                <td>{user.title}</td>
                <td>{user.author}</td>
                <td>{user.availability}</td>
                <td>{user.order}</td>
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
                      value="Delete"
                      onClick={() => {
                        dispatch(deleteBookAction(user.id));
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
        //  })}
  //  </table>
    // {setUserDatatoView && (
       // <Modal
      //    title="User Details "
       //   onClose={() => {
       //     setUserDatatoView(null);
        //  }}
       /* >
          <div>
            <div>
              <label>Title: {setUserDatatoView.title}</label>
            </div>
            <div>
              <label>Author: {setUserDatatoView.author}</label>
            </div>
            <div>
              <label>Availability: {setUserDatatoView.availability}</label>
            </div>
          </div>
       </> //</Modal>
      )}
   </>
  );
};

export default BookList;
