import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined, FileOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";
import { NavLink, useHistory } from "react-router-dom";
import React from "react";
const { Sider } = Layout;

class Navigation extends React.Component {
   state = {
      collapsed: false,
   };

   onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
   };

   render() {
      const { collapsed } = this.state;
      return (
         <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys="key[]" mode="inline">
               <Menu.Item key="1" icon={<PieChartOutlined />}>
                  <NavLink to="/beranda">Beranda</NavLink>
               </Menu.Item>

               <Menu.Item key="2" icon={<DesktopOutlined />}>
                  <NavLink to="/booking">Book Nomor Antrian</NavLink>
               </Menu.Item>

               <Menu.Item key="3" icon={<FileOutlined />}>
                  <NavLink to="/daftar-bank">Daftar Bank</NavLink>
               </Menu.Item>

               <Menu.Item key="4" icon={<TeamOutlined />}>
                  <NavLink to="/info-antrian">Info Antrian</NavLink>
               </Menu.Item>

               <Menu.Item key="5" icon={<UserOutlined /*onClick={history.push("/login")}*/ />}>
                  Sign Out
               </Menu.Item>
            </Menu>
         </Sider>
      );
   }
}

export default Navigation;
