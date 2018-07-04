import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return <h1 className="card-title">{this.props.title}</h1>;
  }
}
