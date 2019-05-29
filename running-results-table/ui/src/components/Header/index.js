import React from "react";
import "./style.css";
import image from "./logo.gif";

export default function Header() {
  return (
    <div
      class="ui fixed inverted menu"
      id="nav_bar"
      style={{
        boxShadow: "0 1px 6px 0 rgba(32,33,36,0.28)",
        background: "white",
        height: "15px",
        borderColor: "black",
        lineHeight: "150%"
      }}
    >
      <div class="ui container">
        {
          <a href="#">
            <img
              class="logo"
              src={image}
              style={{
                width: "150px",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginTop: "0px",
                display: "inline-block",
                lineHeight: "40px"
              }}
            />
          </a>
          /*{ <a href="#" class="item" id="homebutton">
          Home
        </a> */
        }
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
