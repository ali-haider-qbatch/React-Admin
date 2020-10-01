import React, { useState } from "react";
import { Row, Col, Typography, Input, Form, Button } from "antd";
import Guideline from "./DefultScreen/Guideline";
function Notifications() {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };
  const [password, setPassword] = useState({});
  return (
    <div className="Layout">
      <Title level={2} className="mt-4">
        Update Password
      </Title>

      <Row>
        <Col lg={16} md={12} sm={24} className="pr-3 ">
          <div className="bg-white rounded shadow-sm p-4">
            <Form
              form={form}
              layout="vertical"
              initialValues={{ requiredMark }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark}
            >
              <Form.Item
                label="Enter Old Password"
                name="password"
                required
                value={password.oldPass}
                onChange={(e) =>
                  setPassword({ ...password, oldPass: e.target.value })
                }
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="input placeholder" />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="New-password"
                required
                value={password.newPass}
                onChange={(e) =>
                  setPassword({ ...password, newPass: e.target.value })
                }
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="input placeholder" />
              </Form.Item>
              <Form.Item
                required
                name="confirm"
                label="Confirm Password"
                dependencies={["New-password"]}
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("New-password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Password Does not match!");
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="input placeholder" />
              </Form.Item>
            </Form>
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
        <Col lg={8} md={12} sm={24}>
          <Guideline />
        </Col>
      </Row>
    </div>
  );
}

export default Notifications;
