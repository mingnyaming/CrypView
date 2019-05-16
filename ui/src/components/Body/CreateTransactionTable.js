import React from "react";
import "./style.css";

export default function CreateBlueTable() {
  return (
    <table class="ui table">
      <tbody>
        <tr>
          <td class="collapsing">
            <i class="bitcoin icon" style={{ width: "3rem", textAlign: "left" }} /> Coin1
          </td>
          <td class="collapsing">
            <i class="asterisk loading icon" /> 取引所１
          </td>
          <td class="positive" style={{ width: "12rem", textAlign: "right" }}>
            4,930 ¥ (+18.14%)
          </td>
          <td style={{ textAlign: "center" }}>1,000,000 Coins</td>
        </tr>
        <tr>
          <td>
            <i class="bitcoin icon" style={{ width: "3rem", textAlign: "left" }} /> Coin2
          </td>
          <td class="collapsing">
            <i class="asterisk loading icon" /> 取引所２
          </td>
          <td class="negative" style={{ width: "12rem", textAlign: "right" }}>
            94.8 ¥ (-7.42%)
          </td>
          <td style={{ textAlign: "center" }}>200,000 Coins</td>
        </tr>
        <tr>
          <td>
            <i class="bitcoin icon" style={{ width: "3rem", textAlign: "left" }} /> Coin3
          </td>
          <td class="collapsing" style={{ width: "8rem" }}>
            <i class="asterisk loading icon" /> 取引所３
          </td>
          <td class="positive" style={{ width: "12rem", textAlign: "right" }}>
            3,340 ¥ (+0.80%)
          </td>
          <td style={{ textAlign: "center" }}>5,000 Coins</td>
        </tr>
      </tbody>
    </table>
  );
}
