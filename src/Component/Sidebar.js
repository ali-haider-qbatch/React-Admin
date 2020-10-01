import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  BellOutlined,
  ImportOutlined,
  BoxPlotOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ListItem from "./ListItem";
import Setting from "./Setting";
import Order from "./Order";
import Strategy from "./Strategy";
import Notifications from "./Notifications";
import DetailProduct from "./DetailProduct";
import { BrowserRouter as Router, Route } from "react-router-dom";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
export class Sidebar extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <>
        <Layout>
          <Sider
            defaultCollapsed={true}
            collapsible
            className="LayoutAdmin"
            breakpoint="lg"
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{ minHeight: "100vh", paddingTop: "4rem" }}
          >
            <Menu
              theme="dark"
              mode="vertical"
              defaultSelectedKeys={["[location.pathname]"]}
            >
              <Menu.Item
                icon={<HomeOutlined />}
                className="menu-list"
                key="/Layout"
              >
                <Link className="LinkList" to="/Layout">
                  Dashboard
                </Link>
              </Menu.Item>

              <Menu.Item
                icon={<BoxPlotOutlined />}
                className="menu-list"
                key="/listItem"
              >
                <Link
                  to="/listItem"
                  className="LinkList"
                  activeClassName="active"
                >
                  Items Listed
                </Link>
              </Menu.Item>
              <Menu.Item
                icon={<UnorderedListOutlined />}
                className="menu-list"
                key="/strategy"
              >
                <Link
                  to="/strategy"
                  className="LinkList"
                  activeClassName="active"
                >
                  Strategy
                </Link>
              </Menu.Item>
              <Menu.Item
                icon={<ShoppingCartOutlined />}
                className="menu-list"
                key="/order"
              >
                <Link to="/order" className="LinkList" activeClassName="active">
                  Orders
                </Link>
              </Menu.Item>
              <Menu.Item
                icon={<BellOutlined />}
                className="menu-list"
                key="/notifications"
              >
                <Link
                  to="/notifications"
                  className="LinkList"
                  activeClassName="active"
                >
                  Notifications
                </Link>
              </Menu.Item>
              <Menu.Item
                icon={<SettingOutlined />}
                className="menu-list"
                key="/setting"
              >
                <Link
                  to="/setting"
                  className="LinkList"
                  activeClassName="active"
                >
                  Setting
                </Link>
              </Menu.Item>
              <Menu.Item
                icon={<ImportOutlined />}
                className="menu-list"
                key="/"
              >
                <Link
                  className="LinkList"
                  to="/"
                  className="LinkList"
                  activeClassName="active"
                >
                  Logout
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content>
              <Route exact path="/Layout" component={Dashboard} />
              <Route path="/listItem" component={ListItem} />
              <Route path="/strategy" component={Strategy} />
              <Route path="/order" component={Order} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/setting" component={Setting} />
              <Route path="/detail-product" component={DetailProduct} />
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default Sidebar;
