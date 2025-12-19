import { useState } from "react";
import Popup from "../Popup/Popup.jsx";
import EditAvatar from "../Popup/components/EditAvatar/EditAvatar.jsx";
import EditProfile from "../Popup/components/EditProfile/EditProfile.jsx";
import AddPicture from "../Popup/components/AddPicture/AddPicture.jsx";
import Card from "../Card/Card.jsx";
import ConfirmDelete from "../Popup/components/ConfirmDelete/ConfirmDelete.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const editAvatarPopup = {
    title: "Update Profile Picture",
    children: <EditAvatar />,
  };

  const editProfilePopup = {
    title: "Edit Profile",
    children: <EditProfile />,
  };

  const addPicturePopup = {
    title: "Add Picture",
    children: <AddPicture />,
  };

  const confirmDeletePopup = {
    title: "Are you sure?",
    children: <ConfirmDelete />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__pic"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img className="profile__pic-image" src="" alt="profile picture" />
        </div>
        <div className="profile__data">
          <h1 className="profile__name"></h1>
          <button
            aria-label="Edit profile"
            className="edit-button profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className="profile__description"></p>
        </div>
        <button
          aria-label="Add picture"
          className="add-button profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(addPicturePopup)}
        />
      </section>
      <ul className="gallery">
        {cards.map((card) => (
          <Card key={card._id} card={card} onImageClick={handleOpenPopup} />
        ))}
      </ul>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
