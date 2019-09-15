import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Back extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{this.props.country}</small>
        </Card.Footer>
      </Card>
    );
  }
}
