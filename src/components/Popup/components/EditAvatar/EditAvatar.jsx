export default function EditAvatar() {
  return (
    <form className="form popup__form_avatar" noValidate>
      <input
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
