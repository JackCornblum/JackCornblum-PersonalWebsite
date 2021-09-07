import { Col, Row } from 'react-bootstrap'

function About({projectRef, blogRef, aboutRef}) {

    function handleProject() {
        projectRef.current.scrollIntoView()
    }

    function handleBlog() {
        blogRef.current.scrollIntoView()
    }

    function handleAbout() {
        aboutRef.current.scrollIntoView()
    }


    return (
        <Row ref={blogRef} id="blog-section">
        <Col id="blogs-right">
        <div id="blog-header">
            <h2 id="blog">Blogs</h2>
            </div>

            <div id="div_top_hypers3">
                <ul id="ul_top_hypers">
                    <li onClick={handleAbout}><a href="#about-section" class="a_top_hypers">   About   </a></li>
                    <li onClick={handleProject} className="before"><a href="#project-section" class="a_top_hypers">   Projects   </a></li>
                    <li onClick={handleBlog} className="before"><a href="#blog-section" class="a_top_hypers">   Blogs   </a></li>
                </ul>
            </div>
           
        </Col>
        <Col id="blogs">
            <h1>here they are</h1>
        </Col>
    </Row>
    )
}

export default About