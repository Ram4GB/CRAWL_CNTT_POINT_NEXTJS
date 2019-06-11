import React, { Component } from "react";
import { Table, Descriptions } from "antd";
import Link from "next/link";
const columns = [
  {
    title: "Mã sinh viên",
    dataIndex: "mssv",
    key: "msv",
    sorter: (a, b) => a.mssv - b.mssv,
    align: "left"
  },
  {
    title: "Lớp",
    dataIndex: "lop",
    key: "lop",
    // sorter: (a, b) => a.lop - b.lop,
    align: "left"
  }
];
export default class TableSummary extends Component {
  render() {
    const { dataSource, khoa } = this.props;
    return (
      <Table
        rowKey={record => record.mssv}
        dataSource={dataSource}
        size={"small"}
        onChange={this.onChange}
        // rowSelection={rowSelection}
        columns={columns}
        title={() => (
          <h4 style={{ textAlign: "center" }}>
            Bảng điểm học tập của sinh viên
          </h4>
        )}
        footer={() => <h5 style={{ textAlign: "center" }} />}
        expandedRowRender={record => (
          <Descriptions bordered column={1} title="User Info">
            <Descriptions.Item label="Mã sinh viên">
              {record.mssv}
            </Descriptions.Item>
            <Descriptions.Item label="Tên">{record.ten}</Descriptions.Item>
            <Descriptions.Item label="Lớp">{record.nganh}</Descriptions.Item>
            <Descriptions.Item label="Khoa">{record.khoa}</Descriptions.Item>
            <Descriptions.Item label="Thông tin điểm">
              <Link href={`/infor?id=${record.mssv}&faculty=${khoa}`}>
                <a>Chi tiết</a>
              </Link>
            </Descriptions.Item>
          </Descriptions>
        )}
        bordered
      />
    );
  }
}
