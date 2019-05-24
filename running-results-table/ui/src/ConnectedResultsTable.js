import Pusher from "pusher-js";
import React from "react";
import ResultsTable from "./ResultsTable";
import "./style.css";

const socket = new Pusher("441c10743167d14b00fc", {
  cluster: "ap3",
  encrypted: true
});

export default class ConnectedResultsTable extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    var _this = this;

    var id = setInterval(function() {
      fetch("http://localhost:8080/results")
        .then(response => response.json())
        .then(response => _this.setState(response));

      const channel = socket.subscribe("results");
      channel.bind("results", data => {
        //変更した値段をRenderingする
        _this.setState(data);
      });
    }, 4000);
  }

  render() {
    return <ResultsTable results={this.state.results} />;
  }
}
