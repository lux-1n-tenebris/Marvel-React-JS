import React from "react";
import './heroCard.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";

const heroCard = (props) => (
  <div className="example" key={props.hero.name}>
    <article className="card depth--two">
      <figure className="image">
        <img src={props.hero.thumbnail.path + '.' + props.hero.thumbnail.extension} alt="Heroes"/>
      </figure>
      <div className="card__body">
        <header className="card__primary-title">
          <h2 className="text-medium">{props.hero.name}</h2>
          <h3 className="text-secondary text-normal text-small">{props.hero.id}</h3>
        </header>
        <div className="card__supporting-text">
          {props.hero.description}
        </div>
      </div>
      <footer className="card__actions">
        <FontAwesomeIcon icon={faChevronDown} className="btn" />
        <FontAwesomeIcon icon={faBookmark} className="btn"  />
      </footer>
    </article>
  </div>
);

export default heroCard;