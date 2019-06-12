import React, { Component } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line
} from "recharts";
import { timSinhVienCaoNhatTheoLop } from "../codes/code";
export default class SummaryPointsByClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      width: 0
    };
  }
  render() {
    return (
      <div style={{ overflowX: "scroll" }}>
        <h3 style={{ textAlign: "center" }} className="h3">
          Điểm Cao nhất theo lớp
        </h3>
        <LineChart width={this.state.width} height={250} data={this.state.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lop" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="max" fill="#8884d8" />
        </LineChart>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      data: timSinhVienCaoNhatTheoLop(this.props.data),
      width: screen.width
    });
  }
  UNSAFE_componentWillReceiveProps(next) {
    let data = timSinhVienCaoNhatTheoLop(next.data);
    this.setState({
      data
    });
  }
}
