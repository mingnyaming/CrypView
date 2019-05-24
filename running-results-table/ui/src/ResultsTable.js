import React from "react";
import { Table, Header, Segment, Label, Progress } from "semantic-ui-react";
import "./style.css";
import CreateRedTable from "./components/Body/CreateRedTable";
import CreateBlueTable from "./components/Body/CreateBlueTable";
import CreateTransactionTable from "./components/Body/CreateTransactionTable";
import CoinGrid from "./components/Body/CoinGrid";

export default function ResultsTable({ results }) {
  const rows = results.map((result, index) => {
    let RateColor;
    if (result.price / result.primaryprice - 1 < 0) {
      RateColor = "being_blue";
    } else {
      RateColor = "being_red";
    }
    return (
      <Table.Row key={index} className={result.name}>
        <Table.Cell>{result.name}</Table.Cell>
        <Table.Cell>{result.primaryprice}</Table.Cell>
        <Table.Cell>{result.price}</Table.Cell>
        <Table.Cell id={RateColor}>
          {((result.price / result.primaryprice - 1) * 100).toFixed(2) + "%"}
        </Table.Cell>
        <Table.Cell>{result.volume}</Table.Cell>
      </Table.Row>
    );
  });
  function BTCDisplay() {
    const x = document.getElementsByClassName("BTC");
    const y = document.getElementById("BTC");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }

    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function ETHDisplay() {
    const x = document.getElementsByClassName("ETH");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }
    const y = document.getElementById("ETH");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function XRPDisplay() {
    const x = document.getElementsByClassName("XRP");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }
    const y = document.getElementById("XRP");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function BCHDisplay() {
    const x = document.getElementsByClassName("BCH");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }

    const y = document.getElementById("BCH");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function LTCDisplay() {
    const x = document.getElementsByClassName("LTC");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }

    const y = document.getElementById("LTC");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function EOSDisplay() {
    const x = document.getElementsByClassName("EOS");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }

    const y = document.getElementById("EOS");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function XLMDisplay() {
    const x = document.getElementsByClassName("XLM");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }

    const y = document.getElementById("XLM");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function ADADisplay() {
    const x = document.getElementsByClassName("ADA");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }

    const y = document.getElementById("ADA");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function TRXDisplay() {
    const x = document.getElementsByClassName("TRX");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }

    const y = document.getElementById("TRX");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function BTGDisplay() {
    const x = document.getElementsByClassName("BTG");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
    } else {
      x[0].style.display = "none";
    }

    const y = document.getElementById("BTG");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  return (
    <React.Fragment>
      <Segment>
        <div className="ui container" style={{ marginTop: "50px" }}>
          <h4 class="ui horizontal divider header">
            <i class="copyright icon" />
            Coin Review
          </h4>
          <div
            class="ui inverted segment"
            style={{
              textAlign: "center",
              paddingTop: "5px",
              paddingBottom: "5px"
            }}
          >
            {/* .ui.striped.table > tbody > tr:first-child.style.display='none' */}
            <button id="BTC" class="ui inverted button" onClick={BTCDisplay}>
              BTC
            </button>
            <button id="ETH" class="ui inverted button" onClick={ETHDisplay}>
              ETH
            </button>
            <button id="XRP" class="ui inverted button" onClick={XRPDisplay}>
              XRP
            </button>
            <button id="BCH" class="ui inverted button" onClick={BCHDisplay}>
              BCH
            </button>
            <button id="LTC" class="ui inverted button" onClick={LTCDisplay}>
              LTC
            </button>

            <button id="EOS" class="ui inverted button" onClick={EOSDisplay}>
              EOS
            </button>
            <button id="XLM" class="ui inverted button" onClick={XLMDisplay}>
              XLM
            </button>
            <button id="ADA" class="ui inverted button" onClick={ADADisplay}>
              ADA
            </button>
            <button id="TRX" class="ui inverted button" onClick={TRXDisplay}>
              TRX
            </button>
            <button id="BTG" class="ui inverted button" onClick={BTGDisplay}>
              BTG
            </button>
          </div>

          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell id="coin_price_table_name">Name</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Price">昨日の価格</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Rate of Change">価格</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Volume">Rate of Change</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Volume">
                  Transaction volume(24h)
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{rows}</Table.Body>
          </Table>

          <h4 class="ui horizontal divider header" style={{ marginTop: "45px" }}>
            <i class="bar chart icon" />
            View Top2 Change Rate
          </h4>
          <CreateRedTable />
          <CreateBlueTable />
          <h4 class="ui horizontal divider header" style={{ marginTop: "45px" }}>
            <i class="barcode icon" />
            View Top3 Transaction
          </h4>
          <CreateTransactionTable />
        </div>
      </Segment>

      <div className="ui footer" />
    </React.Fragment>
  );
}
