export default function EditProfile() {
  return (
    <form className="form popup__form_profile" noValidate>
      <input
        id="profile-name-input"
        className="form__input"
        type="text"
        minLength="2"
        maxLength="40"
        required
        name="name"
        placeholder="Name"
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
      />
      <span className="form__input-error profile-about-input-error"></span>
      <button className="form__submit">Save</button>
    </form>
  );
}
