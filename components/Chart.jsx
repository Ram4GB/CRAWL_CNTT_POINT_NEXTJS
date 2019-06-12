import React, { Component } from "react";
import { tongKetLopCuaKhoa } from "../codes/code";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      width: 0
    };
  }
  render() {
    const { data, width } = this.state;
    return (
      <>
        <h5 style={{ textAlign: "center" }} className="h5">
          Bảng tổng kết sinh viên
        </h5>
        <div style={{}}>
          <BarChart width={width} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="lop" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sl" fill="#8884d8" />
          </BarChart>
        </div>
        <h5 style={{ textAlign: "center" }} className="h5">
          Tổng cộng sinh viên là {this.props.data.length} (Sinh Viên)
        </h5>
      </>
    );
  }
  componentDidMount() {
    let data = tongKetLopCuaKhoa(this.props.data);
    this.setState({
      data,
      width: screen.width
    });
    // console.log(document.body.clientWidth);
  }
  UNSAFE_componentWillReceiveProps(next) {
    let data = tongKetLopCuaKhoa(next.data);
    this.setState({
      data
    });
  }
}
