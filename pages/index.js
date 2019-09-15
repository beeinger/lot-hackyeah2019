import React, { Component } from "react";
import { CardColumns, Row, Col, Container, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import ReactCardFlip from "react-card-flip";
import Front from "../components/Card/Front";
import Back from "../components/Card/Back";
import { Icon } from "semantic-ui-react";
import { MDBFormInline } from "mdbreact";
import { withRouter } from "next/router";
import { BackendService } from "../utilis/backend.service";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: [],
      noResults: 0,
      feed: [],
      search: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    var feed = await BackendService.getFeed();
    console.log(feed);
    if (feed.length < 1) {
      this.state.interval = setInterval(async () => {
        feed = await BackendService.getFeed();
        console.log(feed);
        if (feed.length > 0) {
          this.setState({ feed });
          clearInterval(this.state.interval);
        }
      }, 100);
    } else {
      this.setState({ feed });
    }
  }

  handleChange(e) {
    this.state.search !== e.target.value &&
      this.setState({ search: e.target.value, noResults: 0 });
  }

  handleClick(idx) {
    if (!this.state.isFlipped.includes(idx)) {
      this.state.isFlipped.push(idx);
      this.setState({ isFlipped: this.state.isFlipped });
    } else {
      var index = this.state.isFlipped.indexOf(idx);
      index > -1 && this.state.isFlipped.splice(index, 1);
      this.setState({ isFlipped: this.state.isFlipped });
    }
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

  render() {
    const { router } = this.props;
    router.query.accessToken &&
      window.sessionStorage.setItem("accessToken", router.query.accessToken);
    router.query.userId &&
      window.sessionStorage.setItem("userId", router.query.userId);
    return (
      <Layout>
        <Col />
        <Col>
          <Container>
            <Row>
              <img
                style={{
                  width: "70%",
                  marginRight: "15%",
                  marginLeft: "15%",
                  marginTop: "2vh"
                }}
                src="/static/resources/lot1.png"
              ></img>
            </Row>
            <Row>
              <MDBFormInline
                className="md-form"
                onChange={this.handleChange}
                style={{ width: "50%", marginLeft: "25%" }}
              >
                <Icon name="search" style={{ marginRight: "0.5vw" }} />
                <input
                  style={{ maxWidth: "30vw" }}
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </MDBFormInline>
            </Row>
          </Container>
        </Col>
        <Col />
        <Container>
          {this.state.noResults ? (
            <div
              style={{
                textAlign: "center",
                width: "100%",
                marginTop: "5vh",
                color: "grey"
              }}
            >
              <a>No results</a>
            </div>
          ) : (
            ""
          )}
          <CardColumns>
            {this.state.feed.length > 0 ? (
              this.state.feed.map((val, idx) => {
                return this.state.search === "" ||
                  val.name
                    .toUpperCase()
                    .includes(this.state.search.toUpperCase()) ||
                  val.country
                    .toUpperCase()
                    .includes(this.state.search.toUpperCase()) ||
                  val.airport
                    .toUpperCase()
                    .includes(this.state.search.toUpperCase()) ? (
                  <div key={idx} onClick={() => this.handleClick(idx)}>
                    <ReactCardFlip
                      isFlipped={this.state.isFlipped.includes(idx)}
                    >
                      <Front
                        key="front"
                        name={val.name}
                        country={val.country}
                        photo={val.image_url}
                      />
                      <Back
                        key="back"
                        name={val.name}
                        country={val.country}
                        description={
                          String(val.name) +
                          " - place located in " +
                          String(val.country)
                        }
                      />
                    </ReactCardFlip>
                    {this.state.noResults === 0 &&
                      this.setState({ noResults: false })}
                  </div>
                ) : (
                  this.state.noResults === 0 &&
                    this.setState({ noResults: true })
                );
              })
            ) : (
              <Spinner
                animation="border"
                role="status"
                style={{ marginLeft: "40%", marginRight: "40%" }}
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </CardColumns>
        </Container>
      </Layout>
    );
  }
}
export default withRouter(index);
