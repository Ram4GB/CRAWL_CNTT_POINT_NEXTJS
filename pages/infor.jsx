import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { Descriptions, Row, Col, Divider } from "antd";

export default class infor extends Component {
  static async getInitialProps({ query }) {
    let data = await axios({
      method: "GET",
      url: `https://api-with-json-server.herokuapp.com/CNTT_K17?mssv=${
        query.id
      }`
    });

    return { sv: data.data[0] };
  }
  showPointStudent = sv => {
    let hk1 = sv.HK1 ? sv.HK1 : null;
    let s = [];
    if (hk1) {
      let data = Object.entries(hk1);
      s.push(<p>Điểm học kì 1</p>);
      for (let i = 0; i < data.length; i++) {
        s.push(
          <>
            <p key={1}>
              {data[i][0]} {data[i][1]}
            </p>
          </>
        );
      }
      s.push(<Divider />);
    }

    let hk2 = sv.HK2 ? sv.HK2 : null;
    if (hk2) {
      let data = Object.entries(hk2);
      s.push(<p>Điểm học kì 2</p>);
      for (let i = 0; i < data.length; i++) {
        s.push(
          <>
            <p key={2}>
              {data[i][0]} {data[i][1]}
            </p>
          </>
        );
      }
      s.push(<Divider />);
    }

    let hk3 = sv.HK3 ? sv.HK3 : null;
    if (hk3) {
      let data = Object.entries(hk1);
      s.push(<p>Điểm học kì 3</p>);
      for (let i = 0; i < data.length; i++) {
        s.push(
          <>
            <p key={3}>
              {data[i][0]} {data[i][1]}
            </p>
          </>
        );
      }
    }
    return s;
  };
  render() {
    const { sv } = this.props;
    return (
      <MainLayout>
        <Row style={{ width: "80%", margin: "auto" }}>
          <Col style={{ margin: "10px" }}>
            <Descriptions column={1} bordered title="Chi tiết của sinh viên ">
              <Descriptions.Item label="Mã sinh viên">
                {sv.mssv}
              </Descriptions.Item>
              <Descriptions.Item label="Tình trạng">
                {sv.HK3 ? "Đang học" : "Đã nghĩ học"}
              </Descriptions.Item>
              <Descriptions.Item label="Tên">{sv.ten}</Descriptions.Item>
              <Descriptions.Item label="Lớp">{sv.lop}</Descriptions.Item>
              <Descriptions.Item label="Khoa">{sv.khoa}</Descriptions.Item>
              <Descriptions.Item label="Ngành">{sv.nganh}</Descriptions.Item>
              <Descriptions.Item label="Điểm các học kì">
                {this.showPointStudent(sv)}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
