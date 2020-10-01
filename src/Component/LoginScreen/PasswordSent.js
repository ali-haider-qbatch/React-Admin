import React from "react";
import { Typography, Row, Col, Image, Button } from "antd";
import Logo from "../Logo";
import { Container } from "react-bootstrap";
import EmailSent from "../../Assets/Email Sent/Emailsent.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
function PasswordSent() {
  const { Title, Paragraph } = Typography;
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
        <Row align="middle" justify="center">
          <Col span={10}>
            <div class="bg-white rounded shadow-sm text-center p-4">
              <Image src={EmailSent} />
              <Paragraph className="mt-3 mb-4 passwordSentPara">
                Please check the email we have sent this instructions to change
                password
              </Paragraph>

              <Link to="/" className="Buttons_Color-Change">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-100 ButtonOfAdmin"
                >
                  Continuous LogIn
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default PasswordSent;
