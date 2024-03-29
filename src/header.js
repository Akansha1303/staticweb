import React from "react";
import logo from './reactjs-icon.png'
export default function Header() {
  return (
    <header>
      <nav>
        <div className="left">
          <img
            src={logo}
            width="40px"
          />
          <p className="lefthead">ReactFacts</p>
        </div>
        <p className="project">React course Project-1</p>
      </nav>
    </header>
  );
}
