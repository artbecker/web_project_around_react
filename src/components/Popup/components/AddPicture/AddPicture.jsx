import { useContext, useRef } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function AddPicture() {
  const { handleAddPictureSubmit } = useContext(CurrentUserContext);
  const nameRef = useRef();
  const linkRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddPictureSubmit({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  };

  return (
    <form
      className="form popup__form_picture"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        ref={nameRef}
        id="picture-title-input"
        className="form__input"
        type="text"
        minLength="2"
        maxLength="30"
        required
        name="name"
        placeholder="Title"
      />
      <span className="form__input-error picture-title-input-error"></span>
      <input
        ref={linkRef}
        id="picture-url-input"
        className="form__input"
        required
        type="url"
        name="link"
        placeholder="Image URL"
      />
      <span className="form__input-error picture-url-input-error"></span>
      <button className="form__submit">Add</button>
    </form>
  );
}
