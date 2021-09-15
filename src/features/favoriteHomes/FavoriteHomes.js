import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeHome, selectFilteredFavoriteHomes } from './favoriteHomesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Home from "../../components/Home";

const unfavoriteIconUrl = '../../assets/icons/unfavorite.svg';

export const FavoriteHomes = () =>{
  const favoriteHomes = useSelector(selectFilteredFavoriteHomes);
  const dispatch = useDispatch();

  const onRemoveHomeHandler = (home) => {
    dispatch(removeHome(home));
  };

  return (
    <div className="homes-container">
      {favoriteHomes.map(createHomeComponent)}
    </div>
  );

  // Helper Function
  function createHomeComponent(home) {
    return (
      <Home home={home} key={home.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveHomeHandler(home)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Home>
    )
  } 
};