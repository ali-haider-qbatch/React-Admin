import React, { Component } from "react";
import moment from "moment";
import { DatePicker, Select, Row, Col, Button, Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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

export class Order extends Component {
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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

        <Row>
          <Col lg={24} md={24} sm={24} className="pr-2 mt-3">
            <Input
              prefix={<SearchOutlined />}
              size="medium"
              placeholder="Search"
            />
          </Col>
        </Row>
        <div>
          <Table
            className="mt-4 bg-white ListItem  table-responsive"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}

export default Order;
