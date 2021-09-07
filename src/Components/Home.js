import { Col, Row } from 'react-bootstrap'

function Home({projectRef, blogRef, aboutRef}) {

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
        <div ref={aboutRef} id="about-section" class="top">
            <h2 id="header-name">Jack Cornblum</h2>

            <h4 id="header-title">Software Engineer</h4>

            <h6 id="header-about">I am a recent graduate from NC State university with a bachelors in Business Administration in Information Technology transitioning into Software Engineering</h6>

            <div id="div_top_hypers">
                <ul id="ul_top_hypers">
                    <li onClick={handleAbout}><a href="#about-section" class="a_top_hypers">   About   </a></li>
                    <li onClick={handleProject} className="before"><a href="#project-section" class="a_top_hypers">   Projects   </a></li>
                    <li onClick={handleBlog} className="before"><a href="#blog-section" class="a_top_hypers">   Blogs   </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home