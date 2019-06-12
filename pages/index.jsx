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
      khoa: constant.CNTT_K17,
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
    this.setState({
      isLoading: false
    });
  };
  render() {
    const { selectedRowKeys, dataSource, khoa, isLoading } = this.state;
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
            <TableSummary
              isLoading={isLoading}
              khoa={khoa}
              dataSource={dataSource}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={24} lg={24}>
            <Summary isLoading={isLoading} data={dataSource} />
          </Col>
          <Col sm={24} lg={24}>
            <Chart data={dataSource} />
          </Col>
        </Row>
        <Row>
          <Col sm={24} lg={24}>
            <Search khoa={khoa} data={dataSource} />
          </Col>
        </Row>
        <Row>
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
