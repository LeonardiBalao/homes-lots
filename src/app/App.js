import React from 'react';
import Navbar from '../components/Navbar';
import { AllHomes } from '../features/allHomes/AllHomes';
import { FavoriteHomes } from '../features/favoriteHomes/FavoriteHomes';
import { SearchTerm } from '../features/searchTerm/SearchTerm';

function App(props) {
  const { state, dispatch } = props;

  return (
    <div id="app">
        <Navbar />
      <main className="main">
        <section>
          <SearchTerm />
        </section>
        <section>
          <FavoriteHomes />
        </section>
        <section>
          <AllHomes />
        </section>
      </main>
    </div>
  );
}

export default App;
