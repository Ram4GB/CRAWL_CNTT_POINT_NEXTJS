import React, { Component } from "react";
import { Table, InputNumber } from "antd";
import FastSort from "fast-sort";

const columns = [
  {
    title: "Tên sinh viên",
    dataIndex: "ten"
  },
  {
    title: "Điểm sinh viên",
    dataIndex: "diemHe4TichLuy"
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
    // console.log(this.props.data);
    console.log(this.state.data);
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
          dataSource={this.getDataSource()}
        />
      </div>
    );
  }
  handleChange = e => {
    this.setState({
      top: e
    });
  };
  componentDidMount() {
    let { data } = this.props;
    FastSort(data).desc(u => parseFloat(u.diemHe4TichLuy));
  }
  getDataSource = () => {
    let arr = this.props.data;
    let top = this.state.top;
    FastSort(arr).desc(u => parseFloat(u.diemHe4TichLuy));
    arr = arr.slice(0, top);
    return arr;
  };
}
