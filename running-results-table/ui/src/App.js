import React, { Component, Fragment } from "react";
import jQuery from "jquery";

import ConnectedResultsTable from "./ConnectedResultsTable";
//import NewResultsForm from "./NewResultsForm";
import Header from "./components/Header";
import "./style.css";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ConnectedResultsTable />

        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;
