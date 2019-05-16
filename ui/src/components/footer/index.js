import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div class="ui inverted vertical footer segment">
      <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">
          <div class="three wide column">
            <h4 class="ui inverted header">Topic</h4>
            <div class="ui inverted link list">
              <a href="#" class="item">
                aaa
              </a>
            </div>
          </div>

          <div class="seven wide column">
            <h4 class="ui inverted header">Test</h4>
            <p>Footer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
