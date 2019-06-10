import React, { Component } from "react";
import { Descriptions, Badge } from "antd";
import Link from "next/link";

export default class Description extends Component {
  render() {
    console.log(this.props.record);
    return (
      <Descriptions title="User Info" bordered column={1}>
        <Description.Item label="Tên đầy đủ">Lê Minh Cường</Description.Item>
        <Description.Item label="Giáo viên phụ trách">
          Nguyễn An Ninh
        </Description.Item>
        <Description.Item label="Ngày sinh">29/08/1999</Description.Item>
        <Descriptions.Item label="Bảng điểm đầy đủ">
          <Link href="">
            <a href="">Chi tiết</a>
          </Link>
        </Descriptions.Item>
      </Descriptions>
    );
  }
}
