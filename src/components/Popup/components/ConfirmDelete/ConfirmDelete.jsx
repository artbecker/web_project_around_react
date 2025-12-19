export default function ConfirmDelete() {
  return (
    <>
      <p className="popup__text">Picture deletion is permanent</p>
      <button className="popup__confirm-button" type="submit">
        Yes
      </button>
    </>
  );
}
