import React, { Component } from "react";
import moment from "moment";
import {
  DatePicker,
  Select,
  Row,
  Col,
  Button,
  Input,
  Modal,
  Table,
  Image,
} from "antd";
import {
  SearchOutlined,
  CloseCircleOutlined,
  CheckOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import Basket from "../Assets/Dashboard/shopping_basket.svg";
import Dollar from "../Assets/Dashboard/Dollar.svg";
import Cross from "../Assets/Dashboard/Cross.svg";
import Background from "../Assets/Modal/PickListTop.svg";
const { Option } = Select;
const columns = [
  {
    title: "Reservation Id",
    dataIndex: "Reservation",
  },
  {
    title: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "Customer Name",
    dataIndex: "Customer",
  },
  {
    title: "Customer Email",
    dataIndex: "Email",
  },
  {
    title: "Bin Location",
    dataIndex: "Location",
  },
  {
    title: "Expire Date/Time",
    dataIndex: "Expire",
  },
  {
    title: "Total",
    dataIndex: "Total",
  },
];

const data = [];
for (let i = 0; i < 30; i++) {
  data.push({
    key: i,
    Reservation: `BS2563BS`,
    quantity: 5,
    Customer: `John Doe`,
    Email: `johndoe@gmail.com`,
    Location: `F217`,
    Expire: `6/04/2017, 10:30`,
    Total: `$200`,
  });
}
function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
function disabledDate(current) {
  return current && current < moment().endOf("day");
}
function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}
function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onSearch(val) {
  console.log("search:", val);
}

export class Dashboard extends Component {
  state = { visible: false };

  VisibleModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  state = {
    selectedRowKeys: [],
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <>
        <div className="Layout">
          <Row className="mt-4">
            <Col lg={5} md={5} sm={8} className="mr-2 mb-2">
              <DatePicker
                className="w-100"
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={disabledDate}
                disabledTime={disabledDateTime}
              />
            </Col>
            <Col lg={5} md={5} sm={8} className="mr-2 mb-2">
              <Select
                className="w-100"
                showSearch
                placeholder="Filter By Product"
                optionFilterProp="children"
                onChange={onChange}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col lg={5} md={5} sm={8} className="mr-2 mb-2">
              <Select
                showSearch
                className="w-100"
                placeholder="Filter by Customer Email"
                optionFilterProp="children"
                onChange={onChange}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col lg={5} md={5} sm={8} className="mr-2 mb-2">
              <Select
                showSearch
                className="w-100"
                placeholder="Filter By Customer Name"
                optionFilterProp="children"
                onChange={onChange}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col lg={3} md={3} sm={8} className="Buttons_Color-Change">
              <Button className="ButtonOfAdmin" type="primary">
                Filter Now
              </Button>
            </Col>
          </Row>
          <div className="bg-white shadow-sm rounded mt-4 mb-4 p-4 ">
            <Row align="middle" justify="center">
              <Col
                span={8}
                className="d-flex justify-content-center border-right "
              >
                <div className="Inner-Detail text-center  ">
                  <span className="inner-svg">
                    <Image src={Basket} className="Dashboard-icon" />
                  </span>
                  <h1 className="mt-1 font-weight-bold">10</h1>
                  <small className="Caption">TODAY PICKUP</small>
                </div>
              </Col>
              <Col
                span={8}
                className="d-flex justify-content-center border-right"
              >
                <div className="Inner-Detail text-center ">
                  <span className="inner-svg">
                    <Image src={Dollar} className="Dashboard-icon" />
                  </span>
                  <h1 className="mt-1 font-weight-bold">50</h1>
                  <small className="Caption">EARNED TODAY</small>
                </div>
              </Col>
              <Col span={8} className="d-flex justify-content-center">
                <div className="Inner-Detail text-center ">
                  <span className="inner-svg">
                    <Image src={Cross} className="Dashboard-icon" />
                  </span>
                  <h1 className="mt-1 font-weight-bold">3000</h1>
                  <small className="Caption">CANCELLED TODAY </small>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={14} md={14} className="pr-2 gutter-row">
              <Input
                prefix={<SearchOutlined />}
                size="medium"
                placeholder="Search"
              />
            </Col>
            <Col lg={5} md={5} className="pr-2 Buttons_Color-Change">
              <Button type="danger" className="w-100 DangerButton ">
                <CloseCircleOutlined /> Delete Reserve
              </Button>
            </Col>
            <Col lg={5} md={5} className="Buttons_Color-Change">
              <Button
                type="primary"
                className="w-100"
                onClick={this.VisibleModal}
                className="ButtonOfAdmin"
              >
                <CheckOutlined /> Create Order
              </Button>
            </Col>
          </Row>
          <div>
            <Row>
              <Col lg={24} md={24}>
                <Table
                  className="mt-4 bg-white ListItem table-responsive"
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={data}
                />
              </Col>
            </Row>
          </div>
          <Modal visible={this.state.visible} className="Create-button-modal">
            <Image src={Background} className="w-100" />
            <div className="Inner-Body">
              <div className="text-center">
                <h4 className="m-0 mt-1">Details of Items Pickup</h4>
                <small className="OrderId">Order ID #1499C56</small>
              </div>
              <div className="Amount_Detail d-flex flex-row">
                <div className="Amount d-flex flex-column">
                  <small className="OrderId">amount to be paid</small>
                  <small>$800</small>
                </div>
                <div className="Amount  d-flex flex-column">
                  <small className="OrderId">Date of Pickup</small>
                  <small>Aug, 14, 2020</small>
                </div>
              </div>
              <div className="summary mt-4">
                <small className="OrderId">SUMMARY</small>
                <div className="Inner_Summary rounded">
                  <div className="d-flex justify-content-between">
                    <div>
                      <small className="item">Grasser</small>
                      <small>2</small>
                    </div>
                    <div>
                      <small>$600</small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <small className="item">Grasser</small>
                      <small>2</small>
                    </div>
                    <div>
                      <small>$200</small>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <small className="font-weight-bold">Amount Paid</small>
                    <small className="font-weight-bold">$800</small>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3 Buttons_Color-Change">
                <Button className="Cancel_Button mr-2" onClick={this.hideModal}>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  className="Print_Button AddButton"
                  onClick={() => window.print()}
                >
                  <PrinterOutlined className="mr-1" />
                  Print Pick List
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default Dashboard;
