import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Guideline from "./DefultScreen/Guideline";
import { Row, Col, Typography, Form, Input, Select, Button, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
function Strategy() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };
  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  const { Title } = Typography;
  const { Option } = Select;
  const [value, setValue] = useState(1);
  const onPress = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  return (
    <div className="Layout">
      <Title level={2} className="mt-4">
        Set Strategy
      </Title>
      <Row>
        <Col lg={16} md={24} className="pr-3">
          <div className="bg-white rounded shadow-sm p-4 pb-4">
            <Row>
              <Col lg={12} md={12} sm={24}>
                <Form
                  form={form}
                  layout="vertical"
                  initialValues={{
                    requiredMark,
                  }}
                >
                  <Form.Item label="Strategy Name" name="Email">
                    <Input placeholder="New Year" />
                  </Form.Item>
                  <Form.Item label="Set Total Items">
                    <Select
                      showSearch
                      className="w-100 "
                      placeholder="100"
                      optionFilterProp="children"
                      onChange={onChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                  <small>Lists</small>
                  <Row>
                    <Col lg={8} md={12} sm={12}>
                      <Form.Item className="mr-2" name="Year1">
                        <Input placeholder="New Year" />
                      </Form.Item>
                    </Col>
                    <Col lg={16} md={12} sm={12}>
                      <Select
                        showSearch
                        className="w-100 "
                        placeholder="100"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                      <Form.Item className="mr-2" name="Year2">
                        <Input placeholder="New Year" />
                      </Form.Item>
                    </Col>
                    <Col lg={16} md={12} sm={12}>
                      <Select
                        showSearch
                        className="w-100 "
                        placeholder="100"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                      <Form.Item className="mr-2" name="Year3">
                        <Input placeholder="New Year" />
                      </Form.Item>
                    </Col>
                    <Col lg={16} md={12} sm={12}>
                      <Select
                        showSearch
                        className="w-100 "
                        placeholder="100"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>
                    </Col>
                  </Row>
                  <span className="Dashed_Button">
                    <Button className="w-100" type="dashed">
                      <PlusOutlined /> Add Button
                    </Button>
                  </span>
                </Form>
              </Col>
              <Col lg={12} md={12} sm={24}>
                <div className="p-4">
                  <Radio.Group onChange={onPress} value={value}>
                    <Radio style={radioStyle} value={1}>
                      Every 1 Hour
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                      Every 2 Hour
                    </Radio>
                    <Radio style={radioStyle} value={3}>
                      Set Custom...
                      {value === 3 ? (
                        <Input style={{ width: 100, marginLeft: 10 }} />
                      ) : null}
                    </Radio>
                  </Radio.Group>
                </div>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-end ">
            <div className="Buttons_Color-Change mt-3 mb-3">
              <Button type="primary" className="mr-3 Cancel_Button">
                Cancel
              </Button>
              <Button type="primary" className="ButtonOfAdmin">
                Send
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={8} md={24}>
          <Guideline />
        </Col>
      </Row>
    </div>
  );
}

export default Strategy;
