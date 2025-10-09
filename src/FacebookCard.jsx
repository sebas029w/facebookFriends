import { useState } from "react";
export function FacebookFollowCard({ userName, commonFriends, initialIsFriend }) {
  const [isFriend, setIsFriend] = useState(initialIsFriend);
  const text = isFriend? "Ahora son amigos":"confirmar"
  const buttonClassName = isFriend? "fb-RequestCard-Button-stop":"fb-RequestCard-button-delete" ;
  const handelClick = () => {
    setIsFriend(!isFriend);
  }
  return (
    <article className="fb-RequestCard">
      <img
       src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random`}
       className="fb-RequestCard-avatar"
    alt={`Foto de perfil de ${userName}`}
      />

      <h2 className="fb-RequestCard-user">{userName}</h2>
      <p className="fb-RequestCard-info">{commonFriends}</p>
      <div className="fb-RequestCard-section">
        <button className="fb-RequestCard-button">
          <strong><span className="fb-RequestCard-button"
          onClick={handelClick}>{text}</span></strong>
        </button>
        <button className={buttonClassName}>
          <strong><span onClick={handelClick}>Eliminar</span></strong>
        </button>
      </div>
    </article>
  );
}