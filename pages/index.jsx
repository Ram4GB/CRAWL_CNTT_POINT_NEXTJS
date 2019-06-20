import React, { Component } from "react";
import { Row, Col, Select } from "antd";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import Summary from "../components/Summary";
import Chart from "../components/Chart";
import Search from "../components/Search";
import SummaryPointsByClass from "../components/SummaryPointsByClass";
import constant from "../constants/constants";
import TableSummary from "../components/TableSummary";

const aside = [
  {
    title: "Bảng điểm sinh viên",
    id: "bangdiemsinhvien"
  },
  {
    title: "Top 5 sinh viên cao nhất",
    id: "top5sinhvien"
  },
  {
    title: "Bảng tổng kết sinh viên",
    id: "bangtongketsinhvien"
  },
  {
    title: "Tìm kiếm sinh viên",
    id: "timkiemsinhvien"
  },
  {
    title: "Điểm cao nhất theo lớp",
    id: "diemcaonhattheolop"
  }
];

const { Option } = Select;
export default class index extends Component {
  static async getInitialProps() {
    let data = await axios({
      method: "GET",
      url: "https://api-with-json-server.herokuapp.com/CNTT_K17"
    })
      .catch(e => console.log(e))
      .then(data);
    return { dataSource: data.data };
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      dataSource: [],
      khoa: constant.khoa[0].value, // khoa nao o day
      isLoading: false
    };
  }
  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  onChange = () => {};
  handleChange = async value => {
    let data;
    this.setState({
      isLoading: true
    });
    data = await axios({
      method: "GET",
      url: `https://api-with-json-server.herokuapp.com/${value}`
    }).catch(e => console.log(e));
    this.setState({
      dataSource: data.data,
      khoa: value
    });
    this.setState({
      isLoading: false
    });
  };
  showFacultyOption = facultys => {
    return facultys.map((faculty, index) => {
      return (
        <Option key={index} value={faculty.value}>
          {faculty.name}
        </Option>
      );
    });
  };
  render() {
    const { selectedRowKeys, dataSource, khoa, isLoading } = this.state;
    return (
      <MainLayout aside={aside}>
        <Row>
          <Col sm={24} lg={24}>
            <p style={{ textAlign: "center", margin: "5px" }} className="h4">
              Chọn khoa
            </p>
            <Select
              onChange={this.handleChange}
              defaultValue={`Khoa CNTT K17`}
              style={{ width: "100%" }}
            >
              {this.showFacultyOption(constant.khoa)}
            </Select>
          </Col>
        </Row>
        <Row id="timkiemsinhvien">
          <Col sm={24} lg={24}>
            <Search khoa={khoa} data={dataSource} />
          </Col>
        </Row>
        <Row id="bangdiemsinhvien">
          <Col sm={24}>
            <TableSummary
              isLoading={isLoading}
              khoa={khoa}
              dataSource={dataSource}
            />
          </Col>
        </Row>
        <Row id="top5sinhvien">
          <Col sm={24} lg={24}>
            <Summary isLoading={isLoading} data={dataSource} />
          </Col>
        </Row>
        <Row id="bangtongketsinhvien">
          <Col sm={24} lg={24}>
            <Chart data={dataSource} />
          </Col>
        </Row>
        <Row id="diemcaonhattheolop">
          <Col sm={24} lg={24}>
            <SummaryPointsByClass isLoading={isLoading} data={dataSource} />
          </Col>
        </Row>
      </MainLayout>
    );
  }
  componentWillMount() {
    let { dataSource } = this.props;
    this.setState({
      dataSource
    });
  }
}
