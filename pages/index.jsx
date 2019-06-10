import React, { Component } from "react";
import { Table, Row, Col, Descriptions } from "antd";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
const columns = [
  {
    title: "Mã sinh viên",
    dataIndex: "mssv",
    key: "msv",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.mssv - b.mssv,
    align: "center"
  },
  {
    title: "Lớp",
    dataIndex: "lop",
    key: "lop",
    defaultSortOrder: "descend",
    // sorter: (a, b) => a.lop - b.lop,
    align: "center"
  }
];
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: []
    };
  }
  static async getInitialProps() {
    let data = await axios({
      method: "GET",
      url: "https://api-with-json-server.herokuapp.com/CNTT_K17"
    })
      .catch(e => console.log(e))
      .then(data);
    return { dataSource: data.data };
  }
  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  onChange = () => {};
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    return (
      <MainLayout>
        <Row>
          <Col sm={24}>
            <Table
              rowKey={record => record.mssv}
              dataSource={this.props.dataSource}
              size={"small"}
              onChange={this.onChange}
              rowSelection={rowSelection}
              columns={columns}
              title={() => (
                <h4 style={{ textAlign: "center" }}>
                  Bảng điểm học tập của sinh viên
                </h4>
              )}
              footer={() => (
                <h5 style={{ textAlign: "center" }}>Ram4gb && Ninh</h5>
              )}
              expandedRowRender={record => (
                <Descriptions bordered column={1} title="User Info">
                  <Descriptions.Item label="Mã sinh viên">
                    {record.mssv}
                  </Descriptions.Item>
                  <Descriptions.Item label="Tên">
                    {record.ten}
                  </Descriptions.Item>
                  <Descriptions.Item label="Lớp">
                    {record.nganh}
                  </Descriptions.Item>
                  <Descriptions.Item label="Khoa">
                    {record.khoa}
                  </Descriptions.Item>
                  <Descriptions.Item label="Thông tin điểm">
                    <Link href={`/infor?id=${record.mssv}`}>
                      <a>Chi tiết</a>
                    </Link>
                  </Descriptions.Item>
                </Descriptions>
              )}
              bordered
            />
          </Col>
        </Row>
        <style jsx>
          {`
            /* width */
            ::-webkit-scrollbar {
              width: 8px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: #f1f1f1;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: tomato;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
          `}
        </style>
      </MainLayout>
    );
  }
}
