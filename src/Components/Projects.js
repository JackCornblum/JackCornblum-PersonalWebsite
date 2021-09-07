import { Col, Row } from 'react-bootstrap'


function Projects({projectRef, blogRef}) {

    function handleProject() {
        projectRef.current.scrollIntoView()
    }

    function handleBlog() {
        blogRef.current.scrollIntoView()
    }


    return (
        
        <Row ref={projectRef} id="project-session">
            <Col id="project-left">
                <div id="project-header">
                    <h2 className="header">Projects</h2>
                </div>

                <div id="div_top_hypers2">
                    <ul id="ul_top_hypers2">
                        <li><a href="" class="a_top_hypers2">   About   </a></li>
                        <li onClick={handleProject} className="before"><a href="#project-section" class="a_top_hypers2">   Projects   </a></li>
                        <li onClick={handleBlog} className="before"><a href="#blog-section" class="a_top_hypers2">   Blogs   </a></li>
                    </ul>
                </div>
            </Col>
            <Col id="projects">
                <h1>here they are</h1>
            </Col>
        </Row>
    )
}

export default Projects