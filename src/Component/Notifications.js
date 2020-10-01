import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  Typography,
  Row,
  Col,
  Form,
  Input,
  Button,
  Modal,
  Radio,
  DatePicker,
  TimePicker,
} from "antd";
import Guideline from "./DefultScreen/Guideline";
import moment from "moment";
function Notifications() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const { Title } = Typography;
  const { RangePicker } = DatePicker;
  function onPress(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }
  function onClick(time, timeString) {
    console.log(time, timeString);
  }
  return (
    <div className="Layout">
      <Title level={2} className="mt-4">
        Add Notification
      </Title>
      <Row>
        <Col lg={16} md={15} sm={24} className="pr-4">
          <div className="p-4 bg-white rounded">
            <Form
              form={form}
              layout="vertical"
              initialValues={{ requiredMark }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark}
            >
              <Form.Item label="Title" required>
                <Input placeholder="Notification Title" />
              </Form.Item>
              <Form.Item label="Description" required>
                <Input.TextArea autoSize={{ minRows: 4 }} />
              </Form.Item>
            </Form>
          </div>
          <div className="d-flex justify-content-between">
            <div className="Schedule-Modal">
              <Button onClick={showModal} className="schedule-send mt-3">
                Schedule Send
              </Button>
            </div>
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
        <Col lg={8} md={9} sm={24}>
          <Guideline />
        </Col>
      </Row>

      <Modal
        visible={visible}
        className="Delete_modal schedule-send"
        width={400}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio style={radioStyle} value={1}>
            in 1 hour
          </Radio>
          <Radio style={radioStyle} value={2}>
            in 2 hour
          </Radio>
          <Radio style={radioStyle} value={3}>
            Tomorrow Morning (8am)
          </Radio>
          <Radio style={radioStyle} value={4}>
            Tomorrow Afternoon (1pm)
          </Radio>
          <Radio style={radioStyle} value={5}>
            Custom
            {value === 5 ? (
              <Input style={{ width: 100, marginLeft: 10 }} />
            ) : null}
          </Radio>
        </Radio.Group>
        <div className="d-flex mt-3">
          <DatePicker onChange={onPress} onOk={onOk} className="mr-2 w-50" />
          <TimePicker
            className="w-50"
            onChange={onClick}
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
        </div>
        <div className="d-flex justify-content-end mt-3 Buttons_Color-Change">
          <Button className="Cancel_Button mr-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" className="ButtonOfAdmin">
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Notifications;
