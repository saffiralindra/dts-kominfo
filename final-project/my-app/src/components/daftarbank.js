import React from "react";
import { Table, Layout, Input, Space, Button } from "antd";
import reqwest from "reqwest";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import Navigation from "./navigation";
const { Content } = Layout;

const { Search } = Input;
const onSearch = (value) => console.log(value);

const getRandomuserParams = (params) => ({
   results: params.pagination.pageSize,
   page: params.pagination.current,
   ...params,
});

class DaftarBank extends React.Component {
   state = {
      searchText: "",
      searchedColumn: "",
      data: [
         {
            key: "1",
            num: "1.",
            name: "Bank KCP Soreang",
            address: "Jl. Soreang 181 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "2",
            num: "2.",
            name: "Bank KCP Banjaran",
            address: "Jl. Banjaran 182 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "3",
            num: "3.",
            name: "Bank KCP Kamasan",
            address: "Jl. Kamasan 184 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "4",
            num: "4.",
            name: "Bank KCP Waru",
            address: "Jl. Waru 190 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "5",
            num: "5.",
            name: "Bank KCP Eoreang",
            address: "Jl. Eoreang 185 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "6.",
            num: "6.",
            name: "Bank KCP Foreang",
            address: "Jl. Foreang 186 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "7",
            num: "7.",
            name: "Bank KCP Goreang",
            address: "Jl. Goreang 187 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "8",
            num: "8.",
            name: "Bank KCP Horeang",
            address: "Jl. Horeang 188 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "9",
            num: "9.",
            name: "Bank KCP Ioreang",
            address: "Jl. Ioreang 189 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "10.",
            num: "10.",
            name: "Bank KCP Joreang",
            address: "Jl. Joreang 190 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "11",
            num: "11.",
            name: "Bank KCP Koreang",
            address: "Jl. Koreang 191 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "12",
            num: "12.",
            name: "Bank KCP Loreang",
            address: "Jl. Loreang 192 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "13",
            num: "13.",
            name: "Bank KCP Moreang",
            address: "Jl. Moreang 193 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "14",
            num: "14.",
            name: "Bank KCP Noreang",
            address: "Jl. Noreang 194 Bandung",
            lda: "Lihat Details",
         },
         {
            key: "15",
            num: "15.",
            name: "Bank KCP Toreang",
            address: "Jl. Toreang 196 Bandung",
            lda: "Lihat Details",
         },
      ],
      filteredInfo: null,
      sortedInfo: null,
      pagination: {
         current: 1,
         pageSize: 10,
      },
      loading: false,
   };

   getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
         <div style={{ padding: 8 }}>
            <Input
               ref={(node) => {
                  this.searchInput = node;
               }}
               placeholder={`Search ${dataIndex}`}
               value={selectedKeys[0]}
               onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
               onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
               style={{ marginBottom: 8, display: "block" }}
            />
            <Space>
               <Button type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
                  Search
               </Button>
               <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                  Reset
               </Button>
            </Space>
         </div>
      ),
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
      onFilter: (value, record) => (record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ""),
      onFilterDropdownVisibleChange: (visible) => {
         if (visible) {
            setTimeout(() => this.searchInput.select(), 100);
         }
      },
      render: (text) =>
         this.state.searchedColumn === dataIndex ? (
            <Highlighter highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }} searchWords={[this.state.searchText]} autoEscape textToHighlight={text ? text.toString() : ""} />
         ) : (
            text
         ),
   });

   handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({
         searchText: selectedKeys[0],
         searchedColumn: "name",
      });
   };

   handleReset = (clearFilters) => {
      clearFilters();
      this.setState({ searchText: "" });
   };

   componentDidMount() {
      const { pagination } = this.state;
      this.fetch({ pagination });
   }

   handleTableChange = (pagination, filters, sorter) => {
      this.fetch({
         sortField: sorter.field,
         sortOrder: sorter.order,
         pagination,
         ...filters,
      });
      this.setState({
         filteredInfo: filters,
         sortedInfo: sorter,
      });
   };

   fetch = (params = {}) => {
      this.setState({ loading: true });
      reqwest({
         data: getRandomuserParams(params),
      }).then((data) => {
         console.log(data);
         this.setState({
            loading: false,
            pagination: {
               ...params.pagination,
               total: 200,
            },
         });
      });
   };

   clearFilters = () => {
      this.setState({ filteredInfo: null });
   };

   clearAll = () => {
      this.setState({
         filteredInfo: null,
         sortedInfo: null,
      });
   };

   setBankSort = () => {
      this.setState({
         sortedInfo: {
            order: "descend",
            columnKey: "name",
         },
      });
   };

   render() {
      let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};

      const columns = [
         {
            title: "No.",
            dataIndex: "num",
            key: "num",
            width: 50,
         },
         {
            title: "Bank",
            dataIndex: "name",
            key: "name",
            width: 200,
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
            ellipsis: true,
            ...this.getColumnSearchProps("name"),
         },
         {
            title: "Alamat",
            dataIndex: "address",
            key: "address",
            width: 200,
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
            ellipsis: true,
         },
         {
            title: "Lihat Details Antrian",
            dataIndex: "lda",
            key: "lda",
            width: 150,
            render: (lda) => {
               return <a href="https://reactjs.org">{lda}</a>;
            },
         },
      ];
      const { data, pagination } = this.state;
      return (
         <Layout style={{ minHeight: "100vh" }}>
            <Navigation />
            <Layout className="site-layout">
               <Content className="site-layout-background">
                  <div className="my-container2 pt-5">
                     <h1 style={{ marginBottom: 50, marginLeft: 150 }}>Daftar Bank</h1>
                     <Space direction="vertical">
                        <Search placeholder="input search text" allowClear enterButton="Search" size="large" onSearch={onSearch} style={{ width: 400, marginLeft: 150, marginBottom: 50 }} />
                     </Space>
                     <Table style={{ width: 950, marginLeft: 150 }} dataSource={data} columns={columns} pagination={pagination} onChange={this.handleTableChange} scroll={{ x: 950, y: 600 }} />
                  </div>
               </Content>
            </Layout>
         </Layout>
      );
   }
}

export default DaftarBank;
