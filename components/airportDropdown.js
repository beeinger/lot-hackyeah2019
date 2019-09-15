import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

export default class AirportDropdown extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
      items: ["red", "orange", "green", "blue", "fuckyourmother"]
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toUpperCase().trim() });
  }

  render() {
    const { value } = this.state;
    return (
      <Dropdown>
        <Dropdown.Toggle>Toggle</Dropdown.Toggle>

        <Dropdown.Menu>
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={this.handleChange}
            value={value}
          />
          {this.state.items.map((val, idx) => {
            return (
              (this.state.value === "" ||
                val.toUpperCase().includes(this.state.value)) && (
                <Dropdown.Item key={idx + "1"}>{val}</Dropdown.Item>
              )
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
