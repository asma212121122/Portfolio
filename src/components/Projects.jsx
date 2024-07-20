import React from 'react';
import { Container, Row, Col, Card ,Button} from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for project 1',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      link: '#'
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        link: '#'
      },
      {
        title: 'Project 2',
        description: 'Description for project 2',
        link: '#'
      }
  ];

  return (
    <Container id="Projects" className="Projects  ">
      <Row>
        <Col>
          <h2 className="title">My<span className="color">Projects</span></h2>
        </Col>
      </Row>
      <Row className='card-row'>
        {projects.map((project, index) => (
          <Card  style={{ width: '12rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button className='btn primary'>View project</Button>
          </Card.Body>
        </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
