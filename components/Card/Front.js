import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Front extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <Card.Img variant="top" src={this.props.photo} />
        <Card.Body>
          <Card.Title>
            {this.props.name}
            <br />
            <a style={{ fontSize: "0.7em", textAlign: "right" }}>
              {this.props.country}
            </a>
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
