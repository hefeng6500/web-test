import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as server from "../api/login";
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
  Badge,
  Radio,
  Button,
  Input,
  Row,
  Col,
  Carousel,
  Dropdown,
  message,
  Divider,
  Card

} from "antd";

import "./index.css";

class Index extends Component {
  test() {
    server.test().then(res => { });
  }
  handleClick = e => {
    console.log('click ', e);
  }
  handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  render() {
    const { Header, Content, Footer } = Layout;
    const Search = Input.Search;
    const { SubMenu } = Menu;

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Icon type="user" />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo"> 博客Logo摆放 </div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "50px", float: 'left' }}
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">
                团队
                <Badge className="has-team-news" status="processing" />
              </Menu.Item>
              <Menu.Item key="3"> 标签 </Menu.Item>
            </Menu>
            <Radio.Group className="user-box" value={'small'} onChange={this.handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">
                <Icon type="user" />
              </Radio.Button>
            </Radio.Group>
            <Search
              className="search-box"
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </Header>
          <Content style={{ padding: "10px 20px 50px" }}>
            <Row type="flex">
              <Col span={4}>
                <Menu
                  onClick={this.handleClick}
                  style={{ width: "100%" }}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="mail" />
                        <span>Navigation One</span>
                      </span>
                    }
                  >
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="appstore" />
                        <span>Navigation Two</span>
                      </span>
                    }
                  >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title={
                      <span>
                        <Icon type="setting" />
                        <span>Navigation Three</span>
                      </span>
                    }
                  >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Col>
              <Col span={14} style={{ padding: "0 15px" }}>
                <Carousel autoplay>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
                <div className="top-switch">
                  <Dropdown overlay={menu}>
                    <Button>
                      Button <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <div className="top-switch-2">
                    <a href="#">热门</a>
                    <Divider type="vertical" />
                    <a href="#" style={{ color: "gray" }}>最新</a>
                  </div>
                </div>
                <Divider type="horizontal" style={{ margin: "10px 0" }} />
                <Card style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={6}>col-12</Col>
            </Row>
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
