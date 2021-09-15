
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addHome } from '../favoriteHomes/favoriteHomesSlice.js';
import { loadData, selectFilteredAllHomes } from './allHomesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Home from "../../components/Home";

const favoriteIconURL = '../../assets/icons/favorite.svg';

export const AllHomes = () => {
  const allHomes = useSelector(selectFilteredAllHomes);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, []);

  const onAddHomeHandler = (home) => {
    dispatch(addHome(home));
  };

  return (
    <div className="homes-container">
      {allHomes.map((home) => (
        <Home home={home} key={home.homePlanId} onClickHandler={() => onAddHomeHandler(home)}>
        </Home>
      ))}
    </div>
  );
};


