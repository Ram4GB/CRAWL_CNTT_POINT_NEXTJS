import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();
export default class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="/static/antd.css" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/static/nprogress.css" />
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}
