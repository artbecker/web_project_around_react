import ImagePopup from "../Popup/components/ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { onImageClick } = props;

  function handleImageClick() {
    const imageComponent = {
      title: null,
      children: <ImagePopup card={props.card} />,
    };
    onImageClick(imageComponent);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleImageClick}
      />
      <div className="card__footer">
        <h2 className="card__title">{name}</h2>
        <button aria-label="Like card" className="like-button" type="button" />
      </div>
      <button
        aria-label="Delete card"
        className="delete-button"
        type="button"
      />
    </li>
  );
}
