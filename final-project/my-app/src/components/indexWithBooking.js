import React from "react";
import "../css/style-nav.css";
import { Table } from "antd";
import { Layout } from "antd";
import Navigation from "./navigation";
const { Content } = Layout;

export default function WithBooking() {
   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Content className="site-layout-background">
               <div className="container mt-4 my-container2">
                  <h4>Daftar Booking</h4>
                  <div>
                     <Table primary-text columns={columns} dataSource={data} onChange={onChange} />,
                  </div>
               </div>
            </Content>
         </Layout>
      </Layout>
   );
}

const columns = [
   {
      title: "Nomer",
      dataIndex: "nomer",
   },
   {
      title: "Bank Tujuan",
      dataIndex: "bank",
   },
   {
      title: "Keperluan Layanan",
      dataIndex: "keperluan",
   },
   {
      title: "Tanggal Booking",
      dataIndex: "tanggal",
   },
];

const data = [
   {
      key: "1",
      nomer: "1",
      bank: "BRI Kebayoran",
      keperluan: "Menabung",
      tanggal: "08-09-2021",
   },
   {
      key: "2",
      nomer: "2",
      bank: "BRI Kebayoran",
      keperluan: "Menabung",
      tanggal: "08-09-2021",
   },
   {
      key: "3",
      nomer: "3",
      bank: "BRI Kebayoran",
      keperluan: "Menabung",
      tanggal: "08-09-2021",
   },
   {
      key: "4",
      nomer: "4",
      bank: "BRI Kebayoran",
      keperluan: "Menabung",
      tanggal: "08-09-2021",
   },
];

function onChange(pagination, filters, sorter, extra) {
   console.log("params", pagination, filters, sorter, extra);
}
