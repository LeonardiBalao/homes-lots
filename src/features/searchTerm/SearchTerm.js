import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from './searchTermSlice.js';

export const SearchTerm = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <FaSearch id="search-icon" />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search"
      />
      {searchTerm.length > 0 && (<MdClear onClick={onClearSearchTermHandler} id="search-clear-button" />)}
    </div>
  );
};