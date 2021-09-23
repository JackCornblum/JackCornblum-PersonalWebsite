import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js'
import { useRef } from 'react';

function App() {
  const projectRef = useRef(null)
  const blogRef = useRef(null)
  const aboutRef = useRef(null)

  return (
    <div className="App">
      <Container fluid>
        <Row id="top-about">
          <Home aboutRef={aboutRef} projectRef={projectRef} blogRef={blogRef} />
        </Row>
      </Container>
      <Container fluid>
          <Projects aboutRef={aboutRef} projectRef={projectRef} blogRef={blogRef} />
      </Container>
      <Container fluid>
          <About aboutRef={aboutRef} projectRef={projectRef} blogRef={blogRef} />
      </Container>
    </div>
  );
}

export default App;
