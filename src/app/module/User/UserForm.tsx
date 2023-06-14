/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This for a file for a regform. This will store a form that a user can reg.
 * For improvment it will mabey change name or i will change the location.
 *
 */
import Style from "./UserFormStyle.module.css";

const UserForm = () => {
  return (
    <div className={Style.container}>
      <form className={Style.form}>
        <div>
          <label>Name:</label>
          <div>
            <input type="text" value="" />
          </div>
        </div>
        <div>
          <label>Password:</label>
          <div>
            <input type="password" value="" />
          </div>
        </div>
        <div className={Style["btn-wrapper"]}>
          <input type="submit" value="Add user" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
