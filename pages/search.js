import React, { Component } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import { MDBBtn } from "mdbreact";
import { SingleDatePicker } from "react-dates";
import { RadioButton } from "grommet";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "react-dates/initialize";
import { Dropdown } from "semantic-ui-react";

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: undefined,
      focused: undefined,
      selected: "",
      nineMarks: [],
      cabinClass: [
        {
          value: 0,
          label: "Economy"
        },
        {
          value: 1,
          label: "Business"
        },
        {
          value: 2,
          label: "First"
        }
      ],
      travelOptions: [
        {
          value: 0,
          label: "Saver"
        },
        {
          value: 1,
          label: "Standard"
        },
        {
          value: 2,
          label: "Flex"
        },
        {
          value: 3,
          label: "All"
        }
      ],
      airports: [
        { key: "YUL", value: "YUL", text: "Montreal (YUL)" },
        { key: "YQB", value: "YQB", text: "Quebec (YQB)" },
        { key: "YYZ", value: "YYZ", text: "Toronto (YYZ)" },
        { key: "PEK", value: "PEK", text: "Beijing (PEK)" },
        { key: "DLC", value: "DLC", text: "Dalian (DLC)" },
        { key: "SHA", value: "SHA", text: "Shanghai (SHA)" },
        { key: "SPU", value: "SPU", text: "Split (SPU)" },
        { key: "ZAD", value: "ZAD", text: "Zadar (ZAD)" },
        { key: "PRG", value: "PRG", text: "Prague (PRG)" },
        { key: "CAI", value: "CAI", text: "Cairo (CAI)" },
        { key: "HEL", value: "HEL", text: "Helsinki (HEL)" },
        { key: "LYS", value: "LYS", text: "Lyon (LYS)" },
        { key: "NCE", value: "NCE", text: "Nice (NCE)" },
        { key: "CDG", value: "CDG", text: "Paris (CDG)" },
        { key: "TXL", value: "TXL", text: "Berlin (TXL)" },
        { key: "FRA", value: "FRA", text: "Frankfurt (FRA)" },
        { key: "MUC", value: "MUC", text: "Munich (MUC)" },
        { key: "KRK", value: "KRK", text: "Krakow (KRK)" },
        { key: "LUZ", value: "LUZ", text: "Lublin (LUZ)" },
        { key: "WAW", value: "WAW", text: "Warsaw (WAW)" }
      ]
    };
    this.getPickerValue = this.getPickerValue.bind(this);
    this.confirm = this.confirm.bind(this);
    this.departureDate = this.departureDate.bind(this);
    this.departureFocused = this.departureFocused.bind(this);
    this.returnDate = this.returnDate.bind(this);
    this.returnFocused = this.returnFocused.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    var i = 0;
    while (i < 10) {
      this.state.nineMarks.push({ value: i, label: i.toString() });
      i++;
    }
  }

  getPickerValue(value) {
    console.log(value);
  }

  confirm() {
    console.log(this.state);
  }

  departureDate(date) {
    const depDate = date;
    this.setState({ depDate });
  }

  departureFocused(focused) {
    const depFocused = focused;
    this.setState({ depFocused });
  }

  returnDate(date) {
    const retDate = date;
    this.setState({ retDate });
  }

  returnFocused(focused) {
    const retFocused = focused;
    this.setState({ retFocused });
  }

  handleChange(event, data) {
    console.log(event);
    console.log(data);
  }

  render() {
    const { selected } = this.state;

    return (
      <Layout>
        <Container style={{ marginLeft: "8vw" }}>
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
        <Container style={{ marginLeft: "15vw" }}>
          <Container>
            <Container>
              <Form style={{ marginTop: "3vh" }}>
                <Form.Group controlId="departureAirport">
                  <Form.Label>From:</Form.Label>
                  <Dropdown
                    name="depAirport"
                    placeholder="Choose departure airport"
                    fluid
                    search
                    selection
                    options={this.state.airports}
                    onChange={this.handleChange()}
                  />
                </Form.Group>
                <Form.Group controlId="destinationAirport">
                  <Form.Label>To:</Form.Label>
                  <Dropdown
                    placeholder="Choose destination airport"
                    fluid
                    search
                    selection
                    options={this.state.airports}
                  />
                </Form.Group>
                <Row
                  style={{
                    marginLeft: "2vw",
                    marginRight: "2vw",
                    marginBottom: "1vh",
                    justifyContent: "space-between"
                  }}
                >
                  <Col>
                    <SingleDatePicker
                      withFullScreenPortal={true}
                      date={this.state.depDate}
                      onDateChange={date => this.departureDate(date)}
                      focused={this.state.depFocused}
                      onFocusChange={({ focused }) =>
                        this.departureFocused(focused)
                      }
                      id="departure"
                      placeholder="Departure date"
                      numberOfMonths={1}
                    />
                    <div style={{ marginTop: "2vh", marginBottom: "2vh" }}>
                      {["One way trip", "Round trip"].map(label => (
                        <RadioButton
                          name={label}
                          key={label}
                          checked={selected === label}
                          id={label}
                          label={label}
                          onChange={() => this.setState({ selected: label })}
                        />
                      ))}
                    </div>
                    <SingleDatePicker
                      withFullScreenPortal={true}
                      disabled={
                        this.state.selected === "One way trip" ? true : false
                      }
                      date={this.state.retDate}
                      onDateChange={date => this.returnDate(date)}
                      focused={this.state.retFocused}
                      onFocusChange={({ focused }) =>
                        this.returnFocused(focused)
                      }
                      id="return"
                      placeholder="Return date"
                      numberOfMonths={1}
                    />
                  </Col>
                </Row>
                <Typography id="cabin-class-slider" gutterBottom>
                  Choose cabin class
                </Typography>
                <Slider
                  defaultValue={0}
                  aria-labelledby="cabin-class-slider"
                  step={1}
                  marks={this.state.cabinClass}
                  min={0}
                  max={2}
                />
                <Typography id="travel-options-slider" gutterBottom>
                  Choose travel option
                </Typography>
                <Slider
                  defaultValue={1}
                  aria-labelledby="travel-options-slider"
                  step={1}
                  marks={this.state.travelOptions}
                  min={0}
                  max={3}
                />
                <Typography id="adult-slider" gutterBottom>
                  Adults
                </Typography>
                <Slider
                  defaultValue={1}
                  aria-labelledby="adult-slider"
                  step={1}
                  marks={this.state.nineMarks}
                  min={0}
                  max={9}
                />
                <Typography id="teenager-slider" gutterBottom>
                  Teenagers
                </Typography>
                <Slider
                  defaultValue={0}
                  aria-labelledby="teenager-slider"
                  step={1}
                  marks={this.state.nineMarks}
                  min={0}
                  max={9}
                />
                <Typography id="children-slider" gutterBottom>
                  Children
                </Typography>
                <Slider
                  defaultValue={0}
                  aria-labelledby="children-slider"
                  step={1}
                  marks={this.state.nineMarks}
                  min={0}
                  max={9}
                />
                <Typography id="infant-slider" gutterBottom>
                  Infants
                </Typography>
                <Slider
                  defaultValue={0}
                  aria-labelledby="infant-slider"
                  step={1}
                  marks={this.state.nineMarks}
                  min={0}
                  max={9}
                />

                <div className="text-center mt-4">
                  <MDBBtn color="indigo" onClick={this.confirm}>
                    Confirm
                  </MDBBtn>
                </div>
              </Form>
            </Container>
          </Container>
        </Container>
      </Layout>
    );
  }
}
export default search;
