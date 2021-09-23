import { Col, Row } from 'react-bootstrap'


function Projects({projectRef, blogRef, aboutRef}) {

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
        
        <Row ref={projectRef} id="project-session">
            <Col id="project-left">
                <div id="project-header">
                    <h1 className="header">Projects</h1>
                </div>

                <div id="div_top_hypers2">
                    <ul id="ul_top_hypers2">
                        <li onClick={handleAbout}><a href="#about-section" class="a_top_hypers2">   About   </a></li>
                        <li onClick={handleProject} className="before"><a href="#project-section" class="a_top_hypers2">   Projects   </a></li>
                        <li onClick={handleBlog} className="before"><a href="#blog-section" class="a_top_hypers2">   Blogs   </a></li>
                    </ul>
                </div>
            </Col>
            <Col id="projects">
                
                <div className="project-block">
                    <h3 className="project-title"><a href="http://secret-bayou-38884.herokuapp.com/login" target="_blank" class="a_top_hypers">Tarkov Helper</a></h3>
                    <iframe className="project-thumbnail" src="https://www.loom.com/embed/31585020ad8a4864ae6b40472b4da683" frameborder="0" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen allowfullscreen="allowfullscreen" ></iframe>
                    <p className="white-font">Escape from Tarkov is a first-person shooter video game that focuses on achieving a high level of realism when it comes to weapon mechanics and customization. One problem that many new players of the game have is not only finding certain weapon parts to buy for a gun, but also finding which parts offer the best statistical advantages for various guns. To solve this issue, I designed Tarkov Helper. The app can take any gun, assuming there are parts offered for that gun, and generate a list of parts for the user to purchase in game and lets the user know where to find the part.</p>


                    <h3 className="project-title"><a href="http://secret-bayou-38884.herokuapp.com/login" target="_blank" class="a_top_hypers">Tarkov Helper</a></h3>
                    <iframe className="project-thumbnail" src="https://www.loom.com/embed/31585020ad8a4864ae6b40472b4da683" frameborder="0" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen allowfullscreen="allowfullscreen" ></iframe>
                    <p className="white-font">Escape from Tarkov is a first-person shooter video game that focuses on achieving a high level of realism when it comes to weapon mechanics and customization. One problem that many new players of the game have is not only finding certain weapon parts to buy for a gun, but also finding which parts offer the best statistical advantages for various guns. To solve this issue, I designed Tarkov Helper. The app can take any gun, assuming there are parts offered for that gun, and generate a list of parts for the user to purchase in game and lets the user know where to find the part.</p>
                </div>
            </Col>
        </Row>
    )
}

export default Projects