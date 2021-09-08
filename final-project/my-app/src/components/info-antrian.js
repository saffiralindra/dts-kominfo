import React from "react";
import "antd/dist/antd.css";
import { Button, Layout } from "antd";
import { Row, Col } from "antd";
import Navigation from "./navigation";

const { Content } = Layout;

export default function InfoAntrian() {
   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Content className="site-layout-background">
               <Layout style={{ alignItem: "center" }}>
                  <h3 style={{ marginTop: 150 }}>Info Antrian Hari Ini</h3>
                  <Row style={{ marginLeft: 200, marginTop: 50 }}>
                     <Col span={18} push={6}>
                        Bank KCP Soreang
                     </Col>
                     <Col span={6} pull={18}>
                        Bank
                     </Col>
                  </Row>
                  <Row style={{ marginLeft: 200 }}>
                     <Col span={18} push={6}>
                        Jl. Soreang No.181 Bandung
                     </Col>
                     <Col span={6} pull={18}>
                        Alamat
                     </Col>
                  </Row>
                  <Row style={{ marginLeft: 200 }}>
                     <Col span={18} push={6}>
                        123
                     </Col>
                     <Col span={6} pull={18}>
                        Nomor Antrian Saat Ini
                     </Col>
                  </Row>

                  <Row justify="end" style={{ marginTop: 50 }}>
                     <Col span={4}>
                        {" "}
                        <Button type="primary" style={{ width: 200 }}>
                           Kembali
                        </Button>
                     </Col>
                     <Col span={4}>
                        {" "}
                        <Button style={{ width: 200 }}>Booking untuk Besok</Button>
                     </Col>
                  </Row>
               </Layout>
            </Content>
         </Layout>
      </Layout>
   );
}
