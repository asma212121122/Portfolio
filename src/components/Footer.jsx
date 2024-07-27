import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id='Footer' className=" text-white mt-5 p-4 text-center Footer">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} My Portfolio</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/asma.chohra.50?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              
              <a href="https://www.linkedin.com/in/asma-chohra-53003124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/asma212121122" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
