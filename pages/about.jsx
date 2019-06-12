import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import { Col, Row, Card, Carousel, Rate, Descriptions, Icon } from "antd";
import CardAbout from "../components/CardAbout";
import axios from "axios";

const { Meta } = Card;

const team = [
  {
    img:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/12376634_710832735724954_4776568366230666517_n.jpg?_nc_cat=100&_nc_eui2=AeGDWO5hWecrjAAEkK3CdWBdPhkFfBhkIDuAPfkrLQQZ2ecnGHCJHgkI4fy4U7vV7qH7plNi-qpPaNxhuHXcFBp5M8sW0nyixuQSCbsQ63ogsg&_nc_oc=AQnu8IdTRC851FR8MVcNGzFKqQ0M0h8AC7D12LLMl8x7Pw5rUtfNETbTUn237qAR8DQ&_nc_ht=scontent.fsgn5-5.fna&oh=67afc3561ad15f0f383aec56c4573e7b&oe=5D98B17C",
    name: "Lê Minh Cường",
    facebook: "https://www.facebook.com/le.minhcuong.9638",
    nickname: "Ram4GB"
  },
  {
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
    name: "Nguyễn An Ninh",
    facebook: "https://www.facebook.com/ninhnguyen375",
    nickname: ""
  }
];

export default class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      rateTool: 0,
      rateContent: 0,
      rateBeauty: 0
    };
  }
  render() {
    return (
      <MainLayout>
        <div className="container">
          <section id="team" className="pb-5">
            <div className="container">
              <h5 style={{ textAlign: "center" }} className="section-title h1">
                Về chúng tôi
              </h5>
              <div className="row">{this.showCartAbout(team)}</div>
            </div>
          </section>
          <section>
            <div style={{ textAlign: "center" }} className="h2">
              Đánh giá cho trang web
            </div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 style={{ textAlign: "center" }} className="display-4">
                  Đây là bảng đánh giá
                </h1>
              </div>
            </div>
            <Descriptions bordered column={1}>
              <Descriptions.Item
                label={
                  <p style={{ fontSize: "1.5em" }}>Chức năng của trang web: </p>
                }
              >
                <Rate
                  style={{ color: "blue" }}
                  character={<Icon type="like" />}
                  onChange={this.rateTool}
                />
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <p style={{ fontSize: "1.5em" }}>Nội dung của trang web: </p>
                }
              >
                <Rate onChange={this.rateContent} />
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <p style={{ fontSize: "1.5em" }}>Trang web có đẹp không: </p>
                }
              >
                <Rate
                  onChange={this.rateBeauty}
                  style={{ color: "red" }}
                  character={<Icon type="heart" />}
                />
              </Descriptions.Item>
            </Descriptions>
            <form style={{ marginTop: "1em" }}>
              <div className="form-group">
                <label style={{ fontSize: "1.2em", marginBottom: "10px" }}>
                  Điền email của bạn cho chúng tôi
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  style={{ fontSize: "1.2em", marginBottom: "10px" }}
                  onChange={this.handleTyping}
                />
                <small
                  style={{ fontSize: "1.2em", marginBottom: "10px" }}
                  id="emailHelp"
                  className="form-text text-muted"
                >
                  Chúng tôi sẽ không chia sẻ email của các bạn
                </small>
              </div>
              <button
                type="button"
                onClick={this.handleSubmit}
                style={{ display: "block", width: "100%" }}
                className="btn btn-primary"
              >
                Gửi
              </button>
            </form>
          </section>
        </div>
      </MainLayout>
    );
  }
  showCartAbout = team => {
    return team.map((t, index) => {
      return <CardAbout key={index} member={t} />;
    });
  };
  rateBeauty = value => {
    this.setState({
      rateBeauty: value
    });
  };
  rateContent = value => {
    this.setState({
      rateContent: value
    });
  };
  rateTool = value => {
    this.setState({
      rateTool: value
    });
  };
  handleTyping = () => {
    this.setState({
      email: document.getElementById("exampleInputEmail1").value
    });
  };
  handleSubmit = async () => {
    console.log(this.state);

    let data = await axios({
      url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/rate",
      method: "POST",
      data: this.state
    }).catch(e => console.log(e));
    console.log(data);
  };
}
