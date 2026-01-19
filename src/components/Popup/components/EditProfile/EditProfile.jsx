import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
  };

  return (
    <form
      className="form popup__form_profile"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        id="profile-name-input"
        className="form__input"
        type="text"
        minLength="2"
        maxLength="40"
        required
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <span className="form__input-error profile-name-input-error"></span>
      <input
        id="profile-about-input"
        className="form__input"
        type="text"
        minLength="2"
        maxLength="200"
        required
        name="about"
        placeholder="About me"
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="form__input-error profile-about-input-error"></span>
      <button className="form__submit">Save</button>
    </form>
  );
}
