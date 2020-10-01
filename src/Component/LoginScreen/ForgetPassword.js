import React, { useState } from "react";
import Logo from "../../Component/Logo";
import { Container } from "react-bootstrap";
import { Typography, Form, Input, Button, Row, Col } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
function ForgetPassword() {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <React.Fragment>
      <div className="bg-white shadow-sm Upper-header"></div>
      <div className="text-center">
        <Logo />
      </div>
      <div className="text-center mt-4 mb-4">
        <Title level={2}>Resetting Password</Title>
      </div>
      <Container>
        <Row align="center" justify="center">
          <Col span={10}>
            <div className="bg-white rounded shadow-sm p-4">
              <Title level={5} className="text-center">
                Please Enter the Email address to reset the password
              </Title>
              <Form
                form={form}
                layout="vertical"
                initialValues={{
                  requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <Form.Item
                  label="Email"
                  name={["user", "Email"]}
                  required
                  rules={[
                    {
                      type: "Email",
                    },
                  ]}
                >
                  <Input placeholder="john@gmail.com" />
                </Form.Item>
                <Form.Item>
                  <Link to="/password-send" className="Buttons_Color-Change">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-100 ButtonOfAdmin"
                    >
                      send
                    </Button>
                  </Link>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ForgetPassword;
