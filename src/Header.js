import React from 'react'
import Dropdown from './DropDown';

const Header = (props) => {
  return (
    <div>
      <header className="App-header">
        <h2>{props.text}</h2>
      </header>
    </div>
  );
};

export default Header