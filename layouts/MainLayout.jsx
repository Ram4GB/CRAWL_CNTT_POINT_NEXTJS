import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import { BackTop, Anchor, Drawer } from "antd";
import { Affix, Button, Menu, Icon } from "antd";
import uuid from "uuid";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();
const { Link } = Anchor;
export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false
    };
  }
  render() {
    console.log("Hổng có hack được đâu");
    console.log("Liu liu");
    console.error("Ninh quá đẹp trai");
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="/static/antd.css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
        <Header />
        {this.props.children}
        <Footer />
        <BackTop visibilityHeight={100} />
        <div
          style={{
            position: "fixed",
            bottom: "40px",
            left: "40px"
          }}
        >
          <button
            id="buttonTab"
            onClick={this.handleClose}
            className="btn btn-primary"
            style={{
              display: "none",
              width: "40px",
              height: "40px",
              borderRadius: "40px"
            }}
          >
            <Icon style={{ fontSize: "1.em" }} type="unordered-list" />
          </button>
          <Drawer onClose={this.handleClose} visible={this.state.close}>
            {this.showAside(this.props.aside)}
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
  handleClose = () => {
    this.setState({
      close: !this.state.close
    });
  };
  showAside = items => {
    if (items.length != 0) {
      return items.map(item => {
        return (
          <a key={uuid.v4()} href={`#${item.id}`}>
            <p>{item.title}</p>
          </a>
        );
      });
    } else {
      return <p>Xin chào bạn </p>;
    }
  };
}
