import React, { Component } from "react";
import { Table, InputNumber } from "antd";
import FastSort from "fast-sort";
import { convertSVToObject, tongKetLopCuaKhoa } from "../codes/code";

const columns = [
  {
    title: "Tên sinh viên",
    dataIndex: "ten"
  },
  {
    title: "Điểm sinh viên",
    dataIndex: "diem"
  },
  {
    title: "Mã sinh viên",
    dataIndex: "mssv"
  }
];

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      top: 5
    };
  }
  render() {
    return (
      <div style={{ height: "500px", overflowY: "scroll" }}>
        <Table
          title={() => (
            <h5 style={{ textAlign: "center" }} className="h5">
              Top {this.state.top} sinh viên cao nhất khoa
              <InputNumber
                style={{ margin: "5px" }}
                value={this.state.top}
                onChange={this.handleChange}
              />{" "}
            </h5>
          )}
          pagination={false}
          bordered
          columns={columns}
          rowKey={u => u.mssv}
          dataSource={this.state.data}
        />
      </div>
    );
  }
  handleChange = e => {
    let arr = [];
    arr = convertSVToObject(this.props.data);
    FastSort(arr).desc(u => u.diem);
    this.setState({
      top: e,
      data: arr.slice(0, e)
    });
  };
  componentDidMount() {
    const { data } = this.props;
    let arr = [];
    arr = convertSVToObject(data);
    FastSort(arr).desc(u => u.diem);
    this.setState({
      data: arr.slice(0, this.state.top)
    });
    console.log(tongKetLopCuaKhoa(data));
    return arr.slice(0, this.state.top);
  }
}
