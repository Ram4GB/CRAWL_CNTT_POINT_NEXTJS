import React, { Component } from "react";
import { Row, Col, Select } from "antd";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import Summary from "../components/Summary";
import Chart from "../components/Chart";
import Search from "../components/Search";
import SummaryPointsByClass from "../components/SummaryPointsByClass";
import constant from "../constants/constants";
import TableSummary from "../components/TableSummary";

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
      khoa: "cntt"
    };
  }
  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  onChange = () => {};
  handleChange = async value => {
    let data;
    switch (value) {
      case constant.CNTT_K17:
        data = await axios({
          method: "GET",
          url: "https://api-with-json-server.herokuapp.com/CNTT_K17"
        }).catch(e => console.log(e));
        this.setState({
          dataSource: data.data,
          khoa: value
        });
        break;
      case constant.CNTT_K18:
        data = await axios({
          method: "GET",
          url: "https://api-with-json-server.herokuapp.com/CNTT_K18"
        }).catch(e => console.log(e));
        this.setState({
          dataSource: data.data,
          khoa: value
        });
        break;
      case constant.QTKD_K17:
        data = await axios({
          method: "GET",
          url: "https://api-with-json-server.herokuapp.com/qtkd_k17"
        }).catch(e => console.log(e));
        this.setState({
          dataSource: data.data,
          khoa: value
        });
        break;
      case constant.QTKD_K18:
        data = await axios({
          method: "GET",
          url: "https://api-with-json-server.herokuapp.com/QTKD_K18"
        }).catch(e => console.log(e));
        this.setState({
          dataSource: data.data,
          khoa: value
        });
        break;
    }
  };
  render() {
    const { selectedRowKeys, dataSource, khoa } = this.state;
    return (
      <MainLayout>
        <Row>
          <Col sm={24} lg={24}>
            <Select
              onChange={this.handleChange}
              defaultValue={`Khoa CNTT K17`}
              style={{ width: 150 }}
            >
              <Option value={constant.CNTT_K17}>Khoa CNTT K17</Option>
              <Option value={constant.CNTT_K18}>Khoa CNTT K18</Option>
              <Option value={constant.QTKD_K17}>Khoa QTKD K17</Option>
              <Option value={constant.QTKD_K18}>Khoa QTKD K18</Option>
            </Select>
          </Col>
        </Row>
        <Row>
          <Col sm={24}>
            <TableSummary khoa={khoa} dataSource={dataSource} />
          </Col>
        </Row>
        <Row>
          <Col sm={24} lg={12}>
            <Summary data={dataSource} />
          </Col>
          <Col sm={24} lg={12}>
            <Chart data={dataSource} />
          </Col>
        </Row>
        <Row>
          <Col sm={24} lg={12}>
            <Search data={dataSource} />
          </Col>
        </Row>
        <Row>
          <Col sm={24} lg={24}>
            <SummaryPointsByClass data={dataSource} />
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
