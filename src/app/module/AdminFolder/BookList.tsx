/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This file is a temp file for a Admin & user file.
 */
const BookList = () => {
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
      </div>

      <table>
        <tr>
          <th>Book tiltle &#128516;</th>
          <th>Book author &#128512;</th>
          <th>Availability &#128516;</th>
          <th>Order &#128525;</th>
          <th>Action &#128151;</th>
        </tr>
        <tr>
          <td>ab </td>
          <td>cd</td>
          <td>ef</td>
          <td>Action</td>
          <td>action</td>
        </tr>
      </table>
    </>
  );
};

export default BookList;