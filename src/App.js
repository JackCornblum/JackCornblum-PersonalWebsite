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

  return (
    <div className="App">
      <Container>
        <Row>
          <Home projectRef={projectRef} blogRef={blogRef} />
        </Row>
      </Container>
      <Container>
          <Projects projectRef={projectRef} blogRef={blogRef} />
      </Container>
      <Container>
        <Row>
          <About projectRef={projectRef} blogRef={blogRef} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
