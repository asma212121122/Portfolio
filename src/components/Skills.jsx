import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'HTML', proficiency: 90 },
  { name: 'CSS', proficiency: 85 },
  { name: 'React', proficiency: 80 },
  { name: 'JavaScript', proficiency: 75 },
  { name: 'Python', proficiency: 70 },
  { name: 'Bootstrap', proficiency: 65 }
];

const Skills = () => (
  <Container id="Skills" className=" Skills my-5">
    <h2 className="title">My<span className="color">Skills</span></h2>
    <Row>
      {skills.map(({ name, proficiency }, index) => (
        <Col key={index} xs={6} md={4} className="mb-4 text-center">
          <div style={{ width: 100, height: 100, margin: '0 auto' }}>
            <CircularProgressbar
              value={proficiency}
              text={`${proficiency}%`}
              styles={buildStyles({
                textColor: '#d6d6d6',
                pathColor: 'var(--third-color)',
                trailColor: '#d6d6d6'
              })}
            />
          </div>
          <h5>{name}</h5>
        </Col>
      ))}
    </Row>
  </Container>
);



export default Skills;
