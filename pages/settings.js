import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import { Card, Checkbox, Button } from "semantic-ui-react";
class settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      checked: false,
      luggage: false,
      seat: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLuggage = this.handleLuggage.bind(this);
    this.handleSeat = this.handleSeat.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      checked: window.localStorage.getItem("checked"),
      luggage: window.localStorage.getItem("luggage"),
      seat: window.localStorage.getItem("seat")
    });
    console.log(this.state);
  }

  handleClick(idx) {
    if (this.state.isFlipped === false) {
      this.setState({
        isFlipped: idx
      });
    } else {
      this.setState({
        isFlipped: false
      });
    }
  }

  handleConfirm() {
    const { checked, luggage, seat } = this.state;
    window.localStorage.setItem("checked", checked);
    window.localStorage.setItem("luggage", luggage);
    window.localStorage.setItem("seat", seat);
  }

  handleToggle() {
    if (this.state.checked === "false") {
      this.setState({ checked: "true" });
    } else if (this.state.checked === "true") {
      this.setState({ checked: "false" });
    }
  }

  handleLuggage() {
    if (this.state.luggage === "false") {
      this.setState({ luggage: "true" });
    } else if (this.state.luggage === "true") {
      this.setState({ luggage: "false" });
    }
  }

  handleSeat() {
    if (this.state.seat === "false") {
      this.setState({ seat: "true" });
    } else if (this.state.seat === "true") {
      this.setState({ seat: "false" });
    }
  }

  render() {
    return (
      <Layout>
        <Container>
          <img
            style={{
              width: "70%",
              marginLeft: "15%",
              marginBottom: "2.5vh",
              marginTop: "2vh"
            }}
            src="/static/resources/lot2.png"
          ></img>
        </Container>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Content>
                  <Card.Header>Meal preferences</Card.Header>
                  <Card.Description>
                    <Row>
                      <Col>
                        {" "}
                        <Card.Meta>Meat</Card.Meta>{" "}
                      </Col>{" "}
                      <Col>
                        {" "}
                        <Checkbox
                          onChange={this.handleToggle}
                          checked={
                            this.state.checked === "false" ? false : true
                          }
                          toggle
                        />
                      </Col>
                      <Col>
                        <Card.Meta>Non-meat</Card.Meta>
                      </Col>
                    </Row>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Content>
                  <Card.Header>Extra luggage</Card.Header>
                  <Card.Description>
                    <Row>
                      <Col>
                        {" "}
                        <Card.Meta>No</Card.Meta>{" "}
                      </Col>{" "}
                      <Col>
                        {" "}
                        <Checkbox
                          onChange={this.handleLuggage}
                          checked={
                            this.state.luggage === "false" ? false : true
                          }
                          toggle
                        />
                      </Col>
                      <Col>
                        <Card.Meta>Yes</Card.Meta>
                      </Col>
                    </Row>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Col>
          </Row>
          <br style={{ lineHeight: "2vh" }} />
          <Row>
            <Col>
              <Card>
                <Card.Content>
                  <Card.Header>What's your preffered seat?</Card.Header>
                  <Card.Description>
                    <Row>
                      <Col>
                        {" "}
                        <Card.Meta>In the back</Card.Meta>{" "}
                      </Col>{" "}
                      <Col>
                        {" "}
                        <Checkbox
                          onChange={this.handleSeat}
                          checked={this.state.seat === "false" ? false : true}
                          toggle
                        />
                      </Col>
                      <Col>
                        <Card.Meta>In the front</Card.Meta>
                      </Col>
                    </Row>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Col>
          </Row>
          <br style={{ lineHeight: "2vh" }} />

          <Row>
            <Col />
            <Col />
            <Col />
            <Col>
              <Button onClick={this.handleConfirm}>Confirm</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
export default settings;
