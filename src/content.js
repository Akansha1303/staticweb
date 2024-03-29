import React from "react";
import  imgreact from './reactjs-icon 2.png';

export default function Content() {
    return (
      <div>
        <h1 className="head">Fun facts about React</h1>
        <div className="content">
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img src={imgreact} className="coimg"></img>
      </div>
      </div>
    );
  }
  