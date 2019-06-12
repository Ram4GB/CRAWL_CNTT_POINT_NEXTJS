import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
const { Content, Sider } = Layout;
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import uuid from "uuid";

//dang bi loi nang ne

export default class ResponsiveLayout extends Component {
  render() {
    const { aside } = this.props;
    return (
      <React.Fragment>
        <Layout>
          <Head>
            <link rel="stylesheet" href="/static/antd.css" />
            <script
              src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
              integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
              crossOrigin="anonymous"
            />
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
              integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
              crossOrigin="anonymous"
            />
            <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
              integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
              crossOrigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
              integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
              crossOrigin="anonymous"
            />
            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossorigin="anonymous"
            />
            <link rel="stylesheet" href="/static/nprogress.css" />
            <link rel="stylesheet" href="/static/style.css" />
          </Head>
          <Sider
            style={{ zIndex: 100000, position: "fixed" }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            {/* <div className="logo">1s</div> */}
            <Menu
              style={{
                height: "100%",
                overflowY: "scroll",
                position: "fixed",
                width: "300px"
              }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
            >
              {this.showAside(aside)}
            </Menu>
          </Sider>
          <Layout>
            <div style={{ width: "100%", paddingLeft: "300px" }}>
              <Header />
              <Content>
                <div style={{ background: "#fff", minHeight: 360 }}>
                  {this.props.children}
                </div>
              </Content>
            </div>
            <Footer />
          </Layout>
        </Layout>
        {/* <style jsx>
          {`
            #components-layout-demo-responsive .logo {
              height: 32px;
              background: rgba(255, 255, 255, 0.2);
              margin: 16px;
            }
          `}
        </style> */}
      </React.Fragment>
    );
  }
  showAside = items => {
    return items.map(item => {
      return (
        <Menu.Item key={uuid.v4()}>
          <a href={`#${item.id}`}>
            <Icon type="user" />
            <span style={{ fontSize: "1em" }} className="nav-text">
              {item.title}
            </span>
          </a>
        </Menu.Item>
      );
    });
  };
}
