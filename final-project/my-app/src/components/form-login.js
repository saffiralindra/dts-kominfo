//import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { useHistory } from "react-router-dom";

const { Header, Footer, Content } = Layout;

export default function FormLogin() {
   const onFinish = (values) => {
      console.log("Received values of form: ", values);
   };
   let history = useHistory();
   function handleClick() {
      history.push("/beranda");
   }

   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Content style={{ paddingTop: "250px" }}>
            <div>
               {/* Login */}
               <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                     remember: true,
                  }}
                  onFinish={onFinish}
               >
                  <Form.Item
                     name="username"
                     rules={[
                        {
                           required: true,
                           message: "Please input your Username / E-mail!",
                        },
                     ]}
                  >
                     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username / E-mail" />
                  </Form.Item>
                  <Form.Item
                     name="password"
                     rules={[
                        {
                           required: true,
                           message: "Please input your Password!",
                        },
                     ]}
                  >
                     <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                  </Form.Item>
                  <Form.Item>
                     <a className="login-form-forgot" href="https://reactjs.org">
                        Forgot password
                     </a>
                  </Form.Item>
                  <Form.Item>
                     <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleClick}>
                        Log in
                     </Button>
                     <div className="regis">
                        Or <a href="/form-register">Register now!</a>
                     </div>
                  </Form.Item>
                  ;
               </Form>
               {/* Akhir Login */}
            </div>
         </Content>
      </Layout>
   );
}
