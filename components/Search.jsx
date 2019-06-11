import React, { Component } from "react";
import { AutoComplete, Alert } from "antd";
import Link from "next/link";
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
  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : ["311741", "311751"]
    });
  };
  handleChange = value => {
    this.setState({
      value
    });
  };
  clickSearch = () => {
    let { value } = this.state;
    let { data } = this.props;
    let index = data.findIndex(u => u.mssv === value);
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
      <form action="" style={{ margin: "20px" }}>
        <div class="form-group">
          <label for="exampleInputEmail1">Tra cứu hạng</label>
          <AutoComplete
            dataSource={this.state.dataSource}
            onSelect={onSelect}
            onSearch={this.handleSearch}
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
              <Link>
                <a href={`/infor?id=${result.mssv}`}>Chi tiết</a>
              </Link>
            </>
          }
          type="info"
          showIcon
          closable
        />
      );
    else {
      return (
        <Alert
          message="Thông tin có vấn đề"
          description="Không có thành viên này trong khoa"
          type="error"
          showIcon
          closable
        />
      );
    }
  };
}
