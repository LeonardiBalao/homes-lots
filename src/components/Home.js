import React from "react";
import { IoHeartCircleOutline } from 'react-icons/io5';

export default function Home({ home, children, onClickHandler }) {
  // Mapping tags
  //////////////////
  const tags = home.tags.map((tag, index) =>
    <button className="home-tags" disabled>{tag}</button>
  )
  return (
    <div key={home.homePlanId} className="home" tabIndex={0}>

      <span className="home-container">
        <div className="home-image-container">
          <img src={home.image} alt="" className="home-image" ></img>
          <span className="favorite-icons"><IoHeartCircleOutline onClick={onClickHandler}></IoHeartCircleOutline></span>
        </div>
        <div className="home-info-container">
          <h3 className="home-name">{home.name}</h3>
          <p className="home-info">{home.numBeds} beds - {home.numBaths} baths - {home.sqft} sqft</p>
          {home.tags.length > 0 ? tags : <button className="home-tags" disabled>...</button>}
          <p className="home-description">{home.description}</p>
        </div>
      </span>
      {children}
    </div>
  );
}