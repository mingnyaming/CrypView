import React from "react";
import "./style.css";

export default function CreateBlueTable() {
  //dummyデータ
  let Sample_val = 68.4;
  let Sample_val2 = 81.9;
  let Sample_val3 = 114;
  let Sample_val4 = 116.5;

  let ColorSetting;

  if (Sample_val / Sample_val2 - 1 < 0) {
    ColorSetting = "blue";
  } else {
    ColorSetting = "red";
  }
  return (
    <table class="ui blue table">
      <thead>
        <tr>
          <th>Coin</th>
          <th>今の価格</th>
          <th>昨日の価格</th>
          <th>ChangeRate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sample</td>
          <td>{Sample_val}</td>
          <td>{Sample_val2}</td>
          <td id={ColorSetting}>{((Sample_val / Sample_val2 - 1) * 100).toFixed(2) + "%"}</td>
        </tr>
        <tr>
          <td>Sample2</td>
          <td>{Sample_val3}</td>
          <td>{Sample_val4}</td>
          <td id={ColorSetting}>{((Sample_val3 / Sample_val4 - 1) * 100).toFixed(2) + "%"}</td>
        </tr>
      </tbody>
    </table>
  );
}
