import { Form, Input, Button, Checkbox, Row, Col, Layout } from "antd";
import { useHistory } from "react-router";

const LoginScreen = () => {
   const history = useHistory();

   const onFinish = (values) => {
      console.log("Success:", values);
      history.push("/home");
   };

   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   return (
      <Layout>
         <Layout.Header className="header">
            <div className="logo"></div>
         </Layout.Header>
         <Layout.Content>
            <div style={{ paddingTop: 30 }}>
               <Row>
                  <Col span={6}></Col>
                  <Col span={10}>
                     <Form
                        name="basic"
                        labelCol={{
                           span: 8,
                        }}
                        wrapperCol={{
                           span: 16,
                        }}
                        initialValues={{
                           remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        style={{ padding: 30 }}
                     >
                        <Form.Item
                           label="Username"
                           name="username"
                           rules={[
                              {
                                 required: true,
                                 message: "Please input your username!",
                              },
                           ]}
                        >
                           <Input />
                        </Form.Item>

                        <Form.Item
                           label="Password"
                           name="password"
                           rules={[
                              {
                                 required: true,
                                 message: "Please input your password!",
                              },
                           ]}
                        >
                           <Input.Password />
                        </Form.Item>

                        <Form.Item
                           name="remember"
                           valuePropName="checked"
                           wrapperCol={{
                              offset: 8,
                              span: 16,
                           }}
                        >
                           <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                           wrapperCol={{
                              offset: 8,
                              span: 16,
                           }}
                        >
                           <Button type="primary" htmlType="submit">
                              Submit
                           </Button>
                        </Form.Item>
                     </Form>
                  </Col>
                  <Col span={6}></Col>
               </Row>
            </div>
         </Layout.Content>
      </Layout>
   );
};

export default LoginScreen;
