import React, { Component } from "react";
import Layout from "../components/Layout";
import { MDBBtn } from "mdbreact";
import { BackendService } from "../utilis/backend.service";
import AirportDropdown from "../components/airportDropdown";
import SearchExampleStandard from "../components/Search";
import qs from "query-string";
import { withRouter } from "next/router";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: {
        params: {
          cabinClass: "E",
          market: "PL",
          departureDate: ["16092019"],
          returnDate: "26092019",
          origin: ["WAW"],
          tripType: "R",
          adt: 1,
          destination: ["CDG"]
        }
      }
    };
    this.getToken = this.getToken.bind(this);
    this.checkAvailbilty = this.checkAvailbilty.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  getToken() {
    BackendService.getToken();
  }

  async checkAvailbilty() {
    console.log(this.state);
    const response = await BackendService.checkAvailbilty(
      this.state.check.params
    );
    console.log(response.data[0][0].url);
    var url = response.data[0][0].url;
    location.href = url;
  }

  handleQuery() {
    const { router } = this.props;
    console.log(router.query.name, router.query.aaa);
  }

  render() {
    return (
      <Layout>
        <MDBBtn onClick={this.getToken}>Get Token </MDBBtn>
        <MDBBtn onClick={this.checkAvailbilty}>Check Availbilty</MDBBtn>
        <MDBBtn onClick={this.handleQuery}>Query</MDBBtn>
        <AirportDropdown />
        <SearchExampleStandard />
      </Layout>
    );
  }
}
export default withRouter(index);
