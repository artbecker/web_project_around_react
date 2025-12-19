export default function AddPicture() {
  return (
    <form className="form popup__form_picture" noValidate>
      <input
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
