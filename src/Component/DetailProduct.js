import React, { useState } from "react";
import {
  Typography,
  Row,
  Col,
  Form,
  Input,
  Button,
  Modal,
  InputNumber,
  Upload,
  Dropdown,
  Image,
  Select,
} from "antd";
import Arrow from "../Assets/Dashboard/arrow.svg";
import { useHistory } from "react-router-dom";
import ImgCrop from "antd-img-crop";
function DetailProduct() {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };
  const { Option } = Select;
  let history = useHistory();
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  function onClick(value) {
    console.log(`selected ${value}`);
  }
  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div className="Layout">
      <div onClick={() => history.goBack()} className="GoBack">
        <div className="Back-arrow mr-2 mt-4 mb-4">
          <Image className="bg-white rounded-circle " src={Arrow} />
        </div>
        <lg className="font-weight-bold back-product">Back to Product</lg>
      </div>
      <div className="d-flex justify-content-between">
        <Title level={2}>Add Product</Title>
        <div className="Buttons_Color-Change">
          <Button type="primary mr-2 Cancel_Button">Cancel</Button>
          <Button type="primary" className="ButtonOfAdmin">
            Save
          </Button>
        </div>
      </div>
      <Row>
        <Col lg={12} md={12} sm={24} className="pr-3 ">
          <div className="bg-white rounded shadow-sm p-4 Product-detail">
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
        </Col>
        <Col lg={12} md={12} sm={24}>
          <div className="bg-white rounded shadow-sm p-4 Product-detail">
            <Title level={5}>Images</Title>
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </ImgCrop>

            <small>Drop Your Photo in this Box</small>
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} className="mt-3 pr-3">
          <div className="bg-white rounded shadow-sm p-4 Product-detail">
            <Form
              form={form}
              layout="vertical"
              initialValues={{ requiredMark }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark}
            >
              <Form.Item label="Price" required>
                <InputNumber placeholder="$" className="w-100" />
              </Form.Item>
              <Form.Item label="Discount Percentage" required>
                <InputNumber
                  placeholder="%"
                  className="w-100"
                  min={1}
                  max={100}
                />
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} className="mt-3">
          <div className="bg-white rounded shadow-sm p-4 Product-detail">
            <Form form={form} layout="vertical">
              <Form.Item label="Quantity">
                <InputNumber placeholder="$" className="w-100" />
              </Form.Item>
              <Form.Item label="Bin Location">
                <Select
                  showSearch
                  className="w-100"
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={onClick}
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
              <Form.Item label="Select List">
                <Select
                  showSearch
                  className="w-100"
                  placeholder="Featured Products"
                  optionFilterProp="children"
                  onChange={onClick}
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
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DetailProduct;
