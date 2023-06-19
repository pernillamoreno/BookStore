import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { ApiStatus, IBookForm, IUpdateBookActionProps } from "./Book.type";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Style from "./BookFormStyle.module.css";
import Input from "../../../components/Input/BookInput";

interface IProps {
  isEditForm?: boolean;
}

const BookForm = (props: IProps) => {
  const { isEditForm } = props;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [availability, setAvailability] = useState("");
  const [order, setOrder] = useState("");

  const params = useParams();
  const userIdToEdit = useRef(parseInt(params.id || ""));

  const { list } = useAppSelector((state: RootState) => state.admin);

  useEffect(() => {
    if (isEditForm && userIdToEdit.current) {
      // list of user
      const userData = list.filter((x) => x.id === userIdToEdit.current);

      if (userData.length) {
        setTitle(userData[0].title);
        setAuthor(userData[0].author);
        setAvailability(userData[0].availability);
        setOrder(userData[0].order);
      }
    }
  }, [isEditForm]);

  const { createBookFormStatus, updateBookFormStatus } = useAppSelector(
    (state: RootState) => state.book
  );
  const dispatch = useAppDispatch();

  /*funtion and call onSubmitForm*/
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const data: IBookForm = {
      title,
      author,
      availability: "",
      order: "",
    };

    if (isEditForm) {
      const dirtyFormData: IUpdateBookActionProps = {
        id: userIdToEdit.current,
        data,
      };
      dispatch(updateBookAction(dirtyFormData));
    } else {
      const data: IBookForm = {
        title,
        author,
        availability,
        order,
      };
      dispatch(createBookAction(data));
    }
  };

  useEffect(() => {
    if (createBookFormStatus === ApiStatus.success) {
      setTitle("");
      setAuthor("");
      setAvailability("");
      setOrder("");
      dispatch(resetBookListStatus());
    }
  }, [createBookFormStatus, dispatch]);

  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={onSubmitForm}>
        <Input
          label="Title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <Input
          label="Author"
          value={author}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAuthor(e.target.value);
          }}
        />
        <Input
          label="Availability"
          value={availability}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAvailability(e.target.value);
          }}
        />
        <Input
          label="Order"
          value={order}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setOrder(e.target.value);
          }}
        />
        <div className={Style["btn-wrapper"]}>
          <input
            type="submit"
            value={isEditForm ? "Update" : "Create"}
            disabled={
              createBookFormStatus === ApiStatus.loading ||
              updateBookFormStatus === ApiStatus.loading
            }
          />
        </div>
      </form>
    </div>
  );
};

export default BookForm;
