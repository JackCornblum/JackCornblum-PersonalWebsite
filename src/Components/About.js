import { Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'


function About({projectRef, blogRef, aboutRef, articles}) {

   

    function handleProject() {
        projectRef.current.scrollIntoView()
    }

    function handleBlog() {
        blogRef.current.scrollIntoView()
    }

    function handleAbout() {
        aboutRef.current.scrollIntoView()
    }


    console.log(articles)
 





    return (
        <Row ref={blogRef} id="blog-section">
        <Col id="blogs-right">
            <div id="blog-header">
                <h1 id="blog">Blogs</h1>
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
            <div id="article-block">
                {articles}
            </div>
            
        </Col>
    </Row>
    )
}

export default About