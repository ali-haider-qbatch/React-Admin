import React, { useState } from "react";
import {
  Dropdown,
  Row,
  Col,
  Button,
  Input,
  Menu,
  message,
  Modal,
  Table,
  Radio,
} from "antd";
import {
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  EditOutlined,
  CloseCircleOutlined,
  WarningOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
function ListItem() {
  const [visible, setVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<Radio />}>
        Set Offline
      </Menu.Item>
      <Menu.Item key="2" icon={<Radio />}>
        Set Inline
      </Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: "Product Name",
      dataIndex: "Product",
    },
    {
      title: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Remaining",
      dataIndex: "Remaining",
    },
    {
      title: "Price",
      dataIndex: "Price",
    },
    {
      title: "Discount",
      dataIndex: "Discount",
    },
    {
      title: "Bin Location",
      dataIndex: "Location",
    },
    {
      title: "Product ID",
      dataIndex: "ProductID",
    },
    {
      title: "Status",
      dataIndex: "Status",
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      Product: `Pack Bag`,
      quantity: 20,
      Remaining: `15`,
      Price: `$200`,
      Discount: `20%`,
      Location: `F217`,
      Status: `Live`,
      ProductID: `BS2563BS`,
    });
  }

  return (
    <div className="Layout">
      <Row>
        <Col lg={8} className="pr-2">
          <Input
            prefix={<SearchOutlined />}
            size="medium"
            placeholder="Search"
          />
        </Col>
        <Col lg={4} className="pr-2">
          <Dropdown overlay={menu}>
            <Button>
              Update status
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col lg={4} className="Buttons_Color-Change pr-2">
          <Button type="primary" className="ButtonOfAdmin">
            <EditOutlined />
            Update Item
          </Button>
        </Col>
        <Col lg={4} className="Buttons_Color-Change pr-2">
          <Button type="danger" onClick={showModal} className="DangerButton">
            <CloseCircleOutlined />
            Delete Product
          </Button>
        </Col>
        <Col lg={4} className="Buttons_Color-Change pr-2">
          <Button type="primary" className="AddButton">
            <Link to="/detail-product" className="no-underline">
              <PlusCircleOutlined className="mr-1" />
              Add Product
            </Link>
          </Button>
        </Col>
        <Col lg={24} md={24}>
          <Table
            className="mt-4 bg-white ListItem table-responsive"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
      <Modal centered visible={visible} className="Delete_modal" width={400}>
        <div className="d-flex">
          <WarningOutlined />
          <div className="modal-para">
            Are you sure to want to delete this "Grasser" item?
          </div>
        </div>
        <div className="d-flex justify-content-end Buttons_Color-Change ">
          <Button className="Cancel_Button mr-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="danger" className="DangerButton ">
            Yes, Delete it
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default ListItem;
