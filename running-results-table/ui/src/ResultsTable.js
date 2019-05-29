import React from "react";
import { Table, Header, Segment, Label, Progress, TableHeader } from "semantic-ui-react";
import "./style.css";
import CreateRedTable from "./components/Body/CreateRedTable";
import CreateBlueTable from "./components/Body/CreateBlueTable";
import CreateTransactionTable from "./components/Body/CreateTransactionTable";
import CoinGrid from "./components/Body/CoinGrid";
import ViewLogo from "./logo.png";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export default function ResultsTable({ results }) {
  let CoinVolume = 0;
  let ChartSimbol = "BITHUMB:XRPKRW";
  let PastCoinVolume = 0;
  let UpDownIcon = "minus icon";
  let r1UpDownIcon = "minus icon";
  let r2UpDownIcon = "minus icon";
  let d1UpDownIcon = "minus icon";
  let d2UpDownIcon = "minus icon";
  let RiseBest = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
  let DeclineBest = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

  const rows = results.map((result, index) => {
    let RateColor;
    if (result.price / result.primaryprice - 1 < 0) {
      RateColor = "being_blue";
    } else {
      RateColor = "being_red";
    }
    CoinVolume = CoinVolume + result.price;
    PastCoinVolume = PastCoinVolume + result.primaryprice;
    RiseBest[index][0] = result.name;
    RiseBest[index][1] = result.price;
    RiseBest[index][2] = result.primaryprice;
    RiseBest[index][3] = ((result.price / result.primaryprice - 1) * 100).toFixed(2);

    DeclineBest[index][0] = result.name;
    DeclineBest[index][1] = result.price;
    DeclineBest[index][2] = result.primaryprice;
    DeclineBest[index][3] = ((result.price / result.primaryprice - 1) * 100).toFixed(2);
    return (
      <Table.Row key={index} className={result.name} style={{ textAlign: "center" }}>
        <Table.Cell>{result.name}</Table.Cell>
        <Table.Cell>{result.primaryprice}</Table.Cell>
        {/* <Table.Cell style={{ fontWeight: "bold", columnWidth: "45%" }}>{}</Table.Cell> */}
        <Table.Cell id={RateColor}>
          {result.price + " (" + ((result.price / result.primaryprice - 1) * 100).toFixed(2) + "%)"}
        </Table.Cell>
        <Table.Cell>{result.volume.toFixed(0)}</Table.Cell>
      </Table.Row>
    );
  });
  DeclineBest.sort(function(a, b) {
    return a[3] - b[3];
  });

  RiseBest.sort(function(a, b) {
    return b[3] - a[3];
  });

  function ChartSelect(str) {}

  function RiseDescline() {
    const r1 = document.getElementById("Rise1");
    const r2 = document.getElementById("Rise2");

    const d1 = document.getElementById("Descline1");
    const d2 = document.getElementById("Descline2");

    if (RiseBest[0][3] > 0) {
      r1.style.color = "red";
      r1UpDownIcon = "angle up icon";
    } else if (RiseBest[0][3] < 0) {
      r1.style.color = "blue";
      r1UpDownIcon = "angle down icon";
    }

    if (RiseBest[1][3] > 0) {
      r2.style.color = "red";
      r2UpDownIcon = "angle up icon";
    } else if (RiseBest[1][3] < 0) {
      r2.style.color = "blue";
      r2UpDownIcon = "angle down icon";
    }

    if (DeclineBest[0][3] > 0) {
      d1.style.color = "red";
      d1UpDownIcon = "angle up icon";
    } else if (DeclineBest[0][3] < 0) {
      d1.style.color = "blue";
      d1UpDownIcon = "angle down icon";
    }

    if (DeclineBest[1][3] > 0) {
      d2.style.color = "red";
      d2UpDownIcon = "angle up icon";
    } else if (DeclineBest[1][3] < 0) {
      d2.style.color = "blue";
      d2UpDownIcon = "angle down icon";
    }
  }
  RiseDescline();
  function MarketIndex() {
    const a = document.getElementById("MarketIndexData");
    const b = document.getElementById("MarketIndexRate");
    const c = document.getElementById("RateNum");
    if (CoinVolume > PastCoinVolume) {
      a.style.color = "red";
      b.style.color = "red";
      UpDownIcon = "angle up icon";
    } else if (CoinVolume < PastCoinVolume) {
      a.style.color = "blue";
      b.style.color = "blue";
      UpDownIcon = "angle down icon";
    }
  }
  function BTCDisplay() {
    const x = document.getElementsByClassName("BTC");
    const y = document.getElementById("BTC");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
      BTC_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      BTC_chart.style.display = "none";
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
      ETH_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      ETH_chart.style.display = "none";
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
      XRP_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      XRP_chart.style.display = "none";
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
      BCH_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      BCH_chart.style.display = "none";
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
      LTC_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      LTC_chart.style.display = "none";
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
      EOS_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      EOS_chart.style.display = "none";
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
      XLM_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      XLM_chart.style.display = "none";
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
      ADA_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      ADA_chart.style.display = "none";
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
      TRX_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      TRX_chart.style.display = "none";
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
      BTG_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      BTG_chart.style.display = "none";
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
  function BSVDisplay() {
    const x = document.getElementsByClassName("BSV");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
      BSV_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      BSV_chart.style.display = "none";
    }

    const y = document.getElementById("BSV");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function ETCDisplay() {
    const x = document.getElementsByClassName("ETC");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
      ETC_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      ETC_chart.style.display = "none";
    }

    const y = document.getElementById("ETC");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function NPXSDisplay() {
    const x = document.getElementsByClassName("NPXS");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
      NPXS_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      NPXS_chart.style.display = "none";
    }

    const y = document.getElementById("NPXS");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function ENJDisplay() {
    const x = document.getElementsByClassName("ENJ");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
      ENJ_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      ENJ_chart.style.display = "none";
    }

    const y = document.getElementById("ENJ");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  function ELFDisplay() {
    const x = document.getElementsByClassName("ELF");
    if (x[0].style.display == "none") {
      x[0].style.display = "table-row";
      ELF_chart.style.display = "block";
    } else {
      x[0].style.display = "none";
      ELF_chart.style.display = "none";
    }

    const y = document.getElementById("ELF");
    if (y.style.background == "white") {
      y.style.background = "black";
      y.style.color = "white";
    } else {
      y.style.background = "white";
      y.style.color = "black";
    }
  }
  const BTC_chart = document.getElementById("BTCChartDiv");
  const ETH_chart = document.getElementById("ETHChartDiv");
  const XRP_chart = document.getElementById("XRPChartDiv");
  const BCH_chart = document.getElementById("BCHChartDiv");
  const LTC_chart = document.getElementById("LTCChartDiv");

  const EOS_chart = document.getElementById("EOSChartDiv");
  const XLM_chart = document.getElementById("XLMChartDiv");
  const ADA_chart = document.getElementById("ADAChartDiv");
  const TRX_chart = document.getElementById("TRXChartDiv");
  const BTG_chart = document.getElementById("BTGChartDiv");

  const BSV_chart = document.getElementById("BSVChartDiv");
  const ETC_chart = document.getElementById("ETCChartDiv");
  const NPXS_chart = document.getElementById("NPXSChartDiv");
  const ENJ_chart = document.getElementById("ENJChartDiv");
  const ELF_chart = document.getElementById("ELFChartDiv");

  function BTConClick() {
    BTC_chart.style.display = "block";
  }

  function ETHonClick() {
    ETH_chart.style.display = "block";
  }

  return (
    <React.Fragment>
      <Segment>
        <div className="ui container" style={{ marginTop: "50px" }}>
          <h4 class="ui horizontal divider header" style={{ marginTop: "45px" }}>
            <i class="bar chart icon" />
            Market Index
          </h4>
          {MarketIndex()}
          <div class="ui segment">
            <div class="ui two column very relaxed grid">
              <div class="column">
                <strong class="MarketIndexName">Index Top10</strong>
                <spen class="MarketIndexData" id="MarketIndexData">
                  <i class={UpDownIcon} />
                  {(CoinVolume / 10000).toFixed(2)}
                </spen>
                <spen class="MarketIndexRate" id="MarketIndexRate">
                  {((CoinVolume - PastCoinVolume) / 10000).toFixed(2)}
                  <i class="RateNum" id="RateNum">
                    {"  ("}
                    {((CoinVolume / PastCoinVolume - 1) * 100).toFixed(2)}
                    {"%)"}
                  </i>
                </spen>
              </div>
              <div class="column">
                <table
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: "5px 5px",
                    borderWidth: "1px"
                  }}
                  class="ui red table"
                >
                  <thead>
                    <tr style={{ columnWidth: "3px" }}>
                      <th>Coin</th>
                      <th>昨日の価格</th>
                      <th>価格</th>
                      <th>ChangeRate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold", width: "1em" }}>{RiseBest[0][0]}</td>
                      <td>{RiseBest[0][2]}</td>
                      <td>{RiseBest[0][1]}</td>
                      <td id="Rise1">
                        <i class={r1UpDownIcon} />
                        {RiseBest[0][3] + "%"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold", width: "1em" }}>{RiseBest[1][0]}</td>
                      <td>{RiseBest[1][2]}</td>
                      <td>{RiseBest[1][1]}</td>
                      <td id="Rise2">
                        <i class={r2UpDownIcon} />
                        {RiseBest[1][3] + "%"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="ui blue table"
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: "5px 5px",
                    borderWidth: "1px"
                  }}
                >
                  <thead>
                    <tr>
                      <th>Coin</th>
                      <th>昨日の価格</th>
                      <th>価格</th>
                      <th>ChangeRate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ display: "float" }}>
                      <td style={{ fontWeight: "bold", width: "1em" }}>{DeclineBest[0][0]}</td>
                      <td>{DeclineBest[0][2]}</td>
                      <td>{DeclineBest[0][1]}</td>
                      <td id="Descline1">
                        <i class={d1UpDownIcon} />
                        {DeclineBest[0][3] + "%"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold", width: "1em" }}>{DeclineBest[1][0]}</td>
                      <td>{DeclineBest[1][2]}</td>
                      <td>{DeclineBest[1][1]}</td>
                      <td id="Descline2">
                        {" "}
                        <i class={d2UpDownIcon} />
                        {DeclineBest[1][3] + "%"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="ui vertical divider">and</div>
          </div>
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
            <button id="BSV" class="ui inverted button" onClick={BSVDisplay}>
              BSV
            </button>
            <button id="ETC" class="ui inverted button" onClick={ETCDisplay}>
              ETC
            </button>
            <button id="NPXS" class="ui inverted button" onClick={NPXSDisplay}>
              NPXS
            </button>
            <button id="ENJ" class="ui inverted button" onClick={ENJDisplay}>
              ENJ
            </button>
            <button id="ELF" class="ui inverted button" onClick={ELFDisplay}>
              ELF
            </button>
          </div>
          <Table striped>
            <Table.Header style={{ textAlign: "center" }}>
              <Table.Row>
                <Table.HeaderCell id="coin_price_table_name" style={{ width: "50px" }}>
                  Name
                </Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Price">昨日の価格</Table.HeaderCell>
                {/* <Table.HeaderCell id="coin_price_table_Rate of Change">価格</Table.HeaderCell> */}
                <Table.HeaderCell id="coin_price_table_Volume">Rate of Change</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Volume" style={{ width: "200px" }}>
                  Transaction volume(24h)
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row />
            </Table.Header>
            <Table.Body>{rows}</Table.Body>
          </Table>
          <h4 class="ui horizontal divider header" style={{ marginTop: "45px" }}>
            <i class="barcode icon" />
            Chart
          </h4>
          {/* <TradingViewWidget
            container_id="tv-medium-widget"
            symbol="BITHUMB:XRPKRW|1d"
            greyText="Quotes by"
            gridLineColor="#e9e9ea"
            fontColor="rgba(0, 0, 0, 1)"
            underLineColor="#dbeffb"
            trendLineColor="#4bafe9"
            width="100%"
            height="100%"
            locale="ja"
          /> */}

          <div
            class="ui inverted segment"
            style={{
              textAlign: "center",
              paddingTop: "5px",
              paddingBottom: "5px"
            }}
          >
            {" "}
            }
          </div>
          <div id="BTCChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="BTCChart"
              symbol="BITHUMB:BTCKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>

          <div id="ETHChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="ETHChart"
              symbol="BITHUMB:ETHKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="XRPChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="XRPChart"
              symbol="BITHUMB:XRPKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="BCHChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="BCHChart"
              symbol="BITHUMB:BCHKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="LTCChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="LTCChart"
              symbol="BITHUMB:LTCKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>

          <div id="EOSChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="EOSChart"
              symbol="BITHUMB:EOSKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="XLMChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="XLMChart"
              symbol="BITHUMB:XLMKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="ADAChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="ADAChart"
              symbol="BITHUMB:ADAKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="TRXChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="TRXChart"
              symbol="BITHUMB:TRXKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="BTGChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="BTGChart"
              symbol="BITHUMB:BTGKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>

          <div id="BSVChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="BSVChart"
              symbol="BITHUMB:BSVKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="ETCChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="ETCChart"
              symbol="BITHUMB:ETCKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="NPXSChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="NPXSChart"
              symbol="BITHUMB:NPXSKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="ENJChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="ENJChart"
              symbol="BITHUMB:ENJKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
          <div id="ELFChartDiv" style={{ display: "block" }}>
            <TradingViewWidget
              id="ELFChart"
              symbol="BITHUMB:ELFKRW"
              theme={Themes.DARK}
              locale="fr"
              autosize
              width="980"
              height="610"
              hide_top_toolbar="true"
              style="1"
            />
          </div>
        </div>
      </Segment>

      {/* <div className="ui footer" /> */}
    </React.Fragment>
  );
}
