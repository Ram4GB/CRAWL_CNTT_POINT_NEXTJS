import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { Descriptions, Row, Col, Divider, Alert } from "antd";
import uuid from "uuid";

const aside = [];

export default class infor extends Component {
  static async getInitialProps({ query }) {
    console.log(
      `https://api-with-json-server.herokuapp.com/${query.faculty}?mssv=${
        query.id
      }`
    );
    let data = await axios({
      method: "GET",
      url: `https://api-with-json-server.herokuapp.com/${query.faculty}?mssv=${
        query.id
      }`
      //https://api-with-json-server.herokuapp.com/CNTT_K17?mssv=3117410027
    });

    return { sv: data.data[0] };
  }
  showPointStudent = sv => {
    let s = [];
    let x;
    let temp = [];
    let i = 0;
    for (x of sv.diem) {
      i++;
      for (let [key, value] of Object.entries(x)) {
        temp.push(
          <p key={uuid.v4()} className="h6">
            {key} {value}
          </p>
        );
      }
    }
    let alert = (
      <Alert
        key={i}
        message="Thông tin điểm thi"
        description={temp}
        type="info"
        showIcon
      />
    );
    s.push(alert);
    return s;
  };
  render() {
    const { sv } = this.props;
    return (
      <MainLayout aside={aside}>
        <Row style={{ width: "90%", margin: "auto" }}>
          <Col style={{ margin: "10px" }}>
            <Descriptions column={1} bordered title="Chi tiết của sinh viên ">
              <Descriptions.Item label="Mã sinh viên">
                {sv.mssv}
              </Descriptions.Item>
              <Descriptions.Item label="Tên">{sv.ten}</Descriptions.Item>
              <Descriptions.Item label="Lớp">{sv.lop}</Descriptions.Item>
              <Descriptions.Item label="Khoa">{sv.khoa}</Descriptions.Item>
              <Descriptions.Item label="Ngành">{sv.nganh}</Descriptions.Item>
            </Descriptions>
            {this.showPointStudent(sv)}
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
