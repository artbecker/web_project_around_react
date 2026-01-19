import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateAvatar({ avatar: avatarRef.current.value });
  };

  return (
    <form
      className="form popup__form_avatar"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        ref={avatarRef}
        id="avatar-url-input"
        className="form__input"
        required
        type="url"
        name="avatar"
        placeholder="Image URL"
      />
      <span className="form__input-error picture-url-input-error"></span>
      <button className="form__submit">Save</button>
    </form>
  );
}
