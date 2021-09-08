import React from "react";
import { Form, Input, Button, Layout } from "antd";
import Navigation from "./navigation";
const { Content } = Layout;

export default function FormRegister() {
   const RegistrationForm = () => {
      const [form] = Form.useForm();

      const onFinish = (values) => {
         console.log("Received values of form: ", values);
      };

      return (
         <Layout style={{ minHeight: "100vh" }}>
            <Navigation />
            <Layout className="site-layout">
               <Content className="site-layout-background">
                  <div>
                     <Form>
                        <Form.Item
                           name="email"
                           rules={[
                              {
                                 type: "email",
                                 message: "The input is not valid E-mail / Username",
                              },
                              {
                                 required: true,
                                 message: "Please input your E-mail / Username",
                              },
                           ]}
                        >
                           <Input placeholder="E-mail / Username" />
                        </Form.Item>

                        <Form.Item
                           name="password"
                           rules={[
                              {
                                 required: true,
                                 message: "Please input your password!",
                              },
                           ]}
                           hasFeedback
                        >
                           <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                           name="confirm"
                           dependencies={["password"]}
                           hasFeedback
                           rules={[
                              {
                                 required: true,
                                 message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                 validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                       return Promise.resolve();
                                    }

                                    return Promise.reject(new Error("The two passwords that you entered do not match!"));
                                 },
                              }),
                           ]}
                        >
                           <Input.Password placeholder="Confrim Password" />
                        </Form.Item>

                        <Form.Item>
                           <Button type="primary" htmlType="submit">
                              Register
                           </Button>
                        </Form.Item>
                     </Form>
                  </div>
               </Content>
            </Layout>
         </Layout>
      );
   };
}
