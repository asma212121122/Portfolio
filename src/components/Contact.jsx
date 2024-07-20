import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container id="Contact" className="my-5">
      <Row>
      <h2 className="title">Contact <span className="color">Me</span></h2>
        <Col className='Contact '>
          <div className="content">
            <p>Have a question or want to work together? Send me a message!</p>
            <p>
              <FaEnvelope /> email@example.com
            </p>
            <p>
              <FaPhoneAlt /> +1 234 567 890
            </p>
          </div>
          
          <Form>
            <Form.Group controlId="formName">
              
              <Form.Control type="text" placeholder="your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="your email" required />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={5} placeholder="your message" required />
            </Form.Group>

            <Button className='btn primary' type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
