import React from "react";
import "./style.css";
import image from "./logo.png";

export default function Header() {
  return (
    <div class="ui fixed inverted menu" id="nav_bar">
      <div class="ui container">
        <a href="#" class="header item">
          <img
            class="logo"
            src="//opgg-static.akamaized.net/images/lol/champion/Yuumi.png?image=w_34&v=1"
          />
          mingnyaminG
        </a>
        <a href="#" class="item" id="homebutton">
          Home
        </a>
        {/* <div class="ui simple dropdown item">
          Dropdown <i class="dropdown icon" />
          <div class="menu">
            <a class="item" href="#">
              Link Item
            </a>
            <a class="item" href="#">
              Link Item
            </a>
            <div class="divider" />
            <div class="header">Header Item</div>
            <div class="item">
              <i class="dropdown icon" />
              Sub Menu
              <div class="menu">
                <a class="item" href="#">
                  Link Item
                </a>
                <a class="item" href="#">
                  Link Item
                </a>
              </div>
            </div>
            <a class="item" href="#">
              Link Item
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
