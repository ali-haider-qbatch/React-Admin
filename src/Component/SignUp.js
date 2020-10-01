import React, { useState } from "react";
import { Row, Col } from "antd";
import { Container } from "react-bootstrap";
import Logo from "../Component/Logo";
import { Form, Input, Button, Typography } from "antd";
import { BrowserRouter, Link } from "react-router-dom";
function SignUp() {
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
  return (
    <React.Fragment>
      <div className="bg-white shadow-sm Upper-header w-100 position-fixed  "></div>
      <div className="text-center">
        <Logo />
      </div>
      <div className="text-center mt-4 mb-4">
        <Title level={2}>Sign In BWD</Title>
      </div>
      <Container>
        <Row align="middle" justify="center">
          <Col lg={10} md={12} sm={16}>
            <div className="bg-white shadow-sm p-4 rounded">
              <Title level={5} className="text-center">
                Please login to your account
              </Title>
              <Form
                form={form}
                layout="vertical"
                initialValues={{
                  requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
              >
                <Form.Item
                  label="Email Address"
                  name={["email"]}
                  required
                  rules={[
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="john@gmail.com" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  required
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="*******" />
                </Form.Item>
                <Link to="/forget-password">
                  <small className="d-flex justify-content-end mb-3 text-muted text-decoration-none">
                    ForgetPassword?
                  </small>
                </Link>
                <Form.Item>
                  <Link to="/dashboard" className="Buttons_Color-Change">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-100 ButtonOfAdmin"
                    >
                      Login
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

export default SignUp;
