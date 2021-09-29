
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js'
import { useRef, useState, useEffect } from 'react';
import Article from './Components/Article.js';

function App() {
  const projectRef = useRef(null)
  const blogRef = useRef(null)
  const aboutRef = useRef(null)

  const [articles, setArticles] = useState('')

  useEffect(() => {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jcornblum")
      .then(res => res.json())
      .then(data => {
        let renderArticles = data.items.map(a => {
          return <Article title={a.title} description={a.description} content={a.content} image={a.thumbnail} link={a.link} key={a.title} />
      })
      setArticles(renderArticles)
      })
  }, [])

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
          <About articles={articles} aboutRef={aboutRef} projectRef={projectRef} blogRef={blogRef} />
      </Container>
    </div>
  );
}

export default App;
