import React from "react";
import { Table, Header, Segment, Label } from "semantic-ui-react";
import "./style.css";
import CreateRedTable from "./components/Body/CreateRedTable";
import CreateBlueTable from "./components/Body/CreateBlueTable";
import CreateTransactionTable from "./components/Body/CreateTransactionTable";

export default function ResultsTable({ results }) {
  const rows = results.map((result, index) => {
    let RateColor;
    if (result.price / result.primaryprice - 1 < 0) {
      RateColor = "being_blue";
    } else {
      RateColor = "being_red";
    }
    return (
      <Table.Row key={index}>
        <Table.Cell>{result.name}</Table.Cell>
        <Table.Cell>{result.price}</Table.Cell>
        <Table.Cell>{result.primaryprice}</Table.Cell>
        <Table.Cell id={RateColor}>
          {((result.price / result.primaryprice - 1) * 100).toFixed(2) + "%"}
        </Table.Cell>
        <Table.Cell>
          <Label ribbon />
        </Table.Cell>
      </Table.Row>
    );
  }); // Select Ribbon Color

  // function PlusMinus(num) {
  //   if (num < 0) {
  //     color = "blue";
  //   } else {
  //     color = "red";
  //   }
  // }

  return (
    <React.Fragment>
      <Segment>
        <div className="ui container" style={{ marginTop: "50px" }}>
          <h4 class="ui horizontal divider header">
            <i class="copyright icon" />
            Top 4 Coin Review
          </h4>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell id="coin_price_table_name">Name</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Price">Price</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Rate of Change">昨日の価格</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Volume">Rate of Change</Table.HeaderCell>
                <Table.HeaderCell id="coin_price_table_Volume">Transaction volume</Table.HeaderCell>
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
