import { useState } from "react";

function HeartIconBtn({ onClick, isFavorite }) {
  return (
    <button className="btn" onClick={(e) => onClick(e)}>
      <img
        className="btn__img"
        src={isFavorite ? `/img/heart-fill-icon.svg` : `/img/heart-icon.svg`}
        alt="heart img"
      />
    </button>
  );
}
function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link && link} target="_blank" rel="noerferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt="link 이동" />
    </a>
  );
}

export default function CourseItem({
  title,
  description,
  thumbnail,
  isFavorite: initialIsFavorite,
  link,
}) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const handleHeartIcon = (e) => {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };
  const handleUrl = () => {
    window.open(link, "_blank");
  };
  return (
    <article className="course" onClick={handleUrl}>
      <img className="course__img" src={thumbnail} alt={description} />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} onClick={handleHeartIcon} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}
