import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import FormExample from "../components/FormExample";
import SuatuKomponen from "../components/SuatuKomponen";
import { Route, Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function DashboardScreen() {
   return (
      <Layout>
         <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
               <Menu.Item key="1">nav 1</Menu.Item>
               <Menu.Item key="2">nav 2</Menu.Item>
               <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
         </Header>
         <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
               <Breadcrumb.Item>Home</Breadcrumb.Item>
               <Breadcrumb.Item>List</Breadcrumb.Item>
               <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
               <Sider className="site-layout-background" width={200}>
                  <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%" }}>
                     <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="1">
                           <Link to="/home/form-example">Form Example</Link>
                        </Menu.Item>

                        <Menu.Item key="2">
                           <Link to="/home/suatu-komponen">Suatu Komponen</Link>
                        </Menu.Item>
                     </SubMenu>
                  </Menu>
               </Sider>
               <Content style={{ padding: "0 24px", minHeight: 280 }}>
                  <Route path="/home/form-example">
                     <FormExample />
                  </Route>
                  <Route path="/home/suatu-komponen">
                     <SuatuKomponen />
                  </Route>
               </Content>
            </Layout>
         </Content>
         <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
   );
}
