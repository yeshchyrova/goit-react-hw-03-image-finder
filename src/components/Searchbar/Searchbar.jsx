// використати лібу formik
import React from 'react'

const Searchbar = ({onSubmit}) => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;