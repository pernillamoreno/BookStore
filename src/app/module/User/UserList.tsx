/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This file is a temp file for a Admin & user file.
 */
const UserList = () => {
  return (
    <>
      <div className="User-serch">
        <p>Search: </p>
        <input
          className="User-field"
          type="text"
          placeholder="Search user..."
        />
        <button className="User-btn">Tryck på mig</button>
      </div>

      <table>
        <tr>
          <th>id &#128516;</th>
          <th>Username &#128512;</th>
          <th>Role &#128516;</th>
          <th>Purchase &#128525;</th>
          <th>Action &#128151;</th>
        </tr>
        <tr>
          <td>ab </td>
          <td>cd</td>
          <td>ef</td>
          <td>gh</td>
          <td>action</td>
        </tr>
      </table>
    </>
  );
};

export default UserList;
