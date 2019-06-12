import React, { Component } from "react";
import { Drawer } from "antd";

export default class DrawerWeb extends Component {
  render() {
    return (
      <Drawer closable={true} visible={false}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}
