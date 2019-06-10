import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import { Col, Row, Card, Carousel } from "antd";

const { Meta } = Card;

export default class about extends Component {
  render() {
    return (
      <MainLayout>
        <p>
          Lê Minh Cường:{" "}
          <a href="https://facebook.com/le.minhcuong.9638">Facebook</a>
        </p>
        <p>
          Nguyễn An Ninh{" "}
          <a href="https://www.facebook.com/ninhnguyen375">Facebook</a>
        </p>
      </MainLayout>
    );
  }
}
