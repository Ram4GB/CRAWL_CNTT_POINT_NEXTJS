import React, { Component } from "react";
import { AutoComplete, Alert } from "antd";
import Link from "next/link";
import { findNameStudent } from "../codes/code.js";
function onSelect(value) {
  console.log("onSelect", value);
}
export default class Search extends Component {
  state = {
    dataSource: [],
    value: "",
    result: null,
    flag: null,
    rank: 0
  };
  handleChange = value => {
    this.setState({
      value
    });
  };
  clickSearch = e => {
    e.preventDefault();
    let { value } = this.state;
    let { data } = this.props;
    let index = data.findIndex(u => u.mssv === value);
    if (index == -1) {
      let temp = findNameStudent(value, data);
    }
    console.log(data[index]);
    if (index !== -1) {
      this.setState({
        result: data[index],
        flag: true,
        rank: index + 1
      });
    } else {
      this.setState({
        result: "nothing",
        flag: false
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.clickSearch} action="" style={{ margin: "20px" }}>
        <div className="form-group">
          <label style={{ fontSize: "1.2em" }}>Tra cứu hạng của bạn</label>
          <AutoComplete
            onSelect={onSelect}
            placeholder="Tìm kiếm đây"
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.clickSearch}
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Tìm kiếm
          </button>
        </div>
        <div className="result">
          {this.state.result !== null ? this.showResult() : ""}
        </div>
      </form>
    );
  }
  showResult = () => {
    const { result, flag, rank } = this.state;
    const { khoa } = this.props;
    if (flag == true)
      return (
        <Alert
          message="Tìm thấy sinh viên"
          description={
            <>
              <p>
                Bạn hạng {rank} trong tổng số {this.props.data.length} của khoa
              </p>
              <p>{`${result.mssv} : ${result.ten} : ${result.ngaySinh}`}</p>
              <Link href={`/infor?id=${result.mssv}&faculty=${khoa}`}>
                <a>Chi tiết</a>
              </Link>
            </>
          }
          type="info"
          showIcon
        />
      );
    else {
      return (
        <Alert
          message="Thông tin có vấn đề"
          description="Không có thành viên này trong khoa"
          type="error"
          showIcon
        />
      );
    }
  };
}
