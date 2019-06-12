import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import { Alert } from "antd";
import Link from "next/link";
const aside = [];
export default class _error extends Component {
  render() {
    return (
      <MainLayout aside={aside}>
        <div
          style={{ margin: "30px auto", width: "80%" }}
          className="container"
        >
          <Alert
            message="Chào mừng bạn đến với trang web"
            description={
              <React.Fragment>
                <p>Chuyển hướng đến trang chủ nhé</p>
                <Link href="/">
                  <a>Chuyển hướng</a>
                </Link>
              </React.Fragment>
            }
            type="success"
            showIcon
          />
        </div>
      </MainLayout>
    );
  }
}
