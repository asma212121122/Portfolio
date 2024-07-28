import React from 'react';
import maktabiImg from "../images/maktabi-img.jpg";
import medicImg from "../images/medic-img.jpg";
import todolistImg from "../images/todolist-img.png";
import niesslyImg from "../images/niessly-img.png";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'Maktabi',
      description: 'an vertual workspace coded with htmland css',
      link: maktabiImg,
      githublink : 'https://github.com/asma212121122/Maktabi/'
    },
    {
      title: 'medic',
      description: 'a teleconsultation website coded with htmland css',
      link: medicImg,
      githublink : 'https://github.com/asma212121122/Medic/'
    },
    {
      title: 'To Do List',
      description: 'To Do List coded with html,css and React Js',
      link: todolistImg,
      githublink : 'https://github.com/asma212121122/To-Do-List-App/'
    },
    {
      title: 'Niessly',
      description: 'online store website coded with html and css',
      link: niesslyImg,
      githublink : 'https://github.com/asma212121122/Niessly/'
    }
  ];

  return (
    <Container id="Projects" className="Projects">
      <Row>
        <Col>
          <h2 className="title">My<span className="color">Projects</span></h2>
        </Col>
      </Row>
      <Row className='card-row'>
        {projects.map((project, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src={project.link} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.githublink}><Button variant="primary" className='btn primary'>View project</Button></a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
