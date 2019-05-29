import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as server from "../api/login";
import { Layout, Menu, Breadcrumb, Badge, Radio, Button } from "antd";

import "./index.css";

class Index extends Component {
  test() {
    server.test().then(res => {});
  }
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo"> 博客Logo摆放 </div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "50px" }}
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">
                团队
                <Badge className="has-team-news" status="processing" />
              </Menu.Item>
              <Menu.Item key="3"> 标签 </Menu.Item>
            </Menu>
            <Radio.Group value={'small'} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item> Home </Breadcrumb.Item>
              <Breadcrumb.Item> List </Breadcrumb.Item>
              <Breadcrumb.Item> App </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              Content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design© 2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Index);
