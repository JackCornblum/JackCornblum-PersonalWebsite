import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Home />
        </Row>
      </Container>
      <Container>
        <Row>
          <About />
        </Row>
      </Container>
      <Container>
        <Row>
          <Projects />
        </Row>
      </Container>
    </div>
  );
}

export default App;
