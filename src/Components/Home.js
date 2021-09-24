

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
            <h1 id="header-name">Jack Cornblum</h1>

            <h3 id="header-title">Software Engineer</h3>

            <h6 id="header-about">NC State University graduate with a degree in Business Administration in Information Technology. Full stack web developer with experience using Ruby, Rails, SQLite, and  Postgresql for backend development, Node, JavaScript, and React for frontend development.  My degree and time at Flatiron working on projects have strengthened my knowledge of business related information technology, and taught me how to be a rigorous problem-solver. I am passionate about learning software and technology, and look to deepen my understanding and experience through further exposure.</h6>

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