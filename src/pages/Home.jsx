import React from "react";
import "./assets/style/home.css";
import profileImage from "./assets/img/profile pict 2.png";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import projectImg1 from "./assets/img/pankaj-patel-Ylk5n_nd9dA-unsplash.jpg";
import projectImg2 from "./assets/img/ilya-pavlov-OqtafYT5kTw-unsplash (1).jpg";
import projectImg3 from "./assets/img/markus-spiske-AaEQmoufHLk-unsplash.jpg";
import projectImg4 from "./assets/img/markus-spiske-jG8nlwLRZTM-unsplash.jpg";

const Home = () => {
  return (
    <div>
      <div className="jumbotron text-center section">
        <Image src={profileImage} alt="profile-pict" width="150" className="rounded-circle img-thumbnail" />
        <h1 className="display-4">Rizky Darisman Fauzi</h1>
        <p className="lead">Full Stack Developer | UI/UX Designer</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,320L0,160L480,160L480,64L960,64L960,128L1440,128L1440,320L960,320L960,320L480,320L480,320L0,320L0,320Z"></path>
        </svg>
      </div>
      <div className="section" id="about">
        <Container>
          <Row className="text-center mb-6">
            <Col>
              <h2>About Me</h2>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col></Col>
          </Row>
          <Row className="row justify-content-center fs-5 text-center">
            <Col className="md-4">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ut reiciendis delectus itaque commodi iste dolorum explicabo magni doloribus culpa!</p>
            </Col>
            <Col className="md-4">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ut reiciendis delectus itaque commodi iste dolorum explicabo magni doloribus culpa!</p>
            </Col>
            <Col className="md-4">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ut reiciendis delectus itaque commodi iste dolorum explicabo magni doloribus culpa!</p>
            </Col>
          </Row>
        </Container>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e2edff" fillOpacity="1" d="M0,96L0,64L288,64L288,224L576,224L576,64L864,64L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
        </svg>
      </div>
      <div className="projects section" id="project">
        <Container>
          <Row className="text-center mb-3">
            <Col>
              <h2>My Projects</h2>
            </Col>
          </Row>
          <Row className="m-2 p-3 justify-content-center">
            <Col className="md-4 mb-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={projectImg1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="md-4 mb-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={projectImg2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="md-4 mb-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={projectImg3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="md-4 mb-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={projectImg4} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L0,96L288,96L288,224L576,224L576,256L864,256L864,256L1152,256L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
