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
                    <iframe className="project-thumbnail" src="https://www.loom.com/embed/31585020ad8a4864ae6b40472b4da683" frameBorder="0" webkitallowfullscreen="allowfullscreen" mozallowfullscreen="allowfullscreen" allowFullScreen="allowfullscreen" ></iframe>
                    <p className="white-font">Escape from Tarkov is a first-person shooter video game that focuses on achieving a high level of realism when it comes to weapon mechanics and customization. One problem that many new players of the game have is not only finding certain weapon parts to buy for a gun, but also finding which parts offer the best statistical advantages for various guns. To solve this issue, I designed Tarkov Helper. The app can take any gun, assuming there are parts offered for that gun, and generate a list of parts for the user to purchase in game and lets the user know where to find the part. For more information about weapons and weapon mechanics in the game, you can check out: <a href="https://escapefromtarkov.fandom.com/wiki/Weapons">https://escapefromtarkov.fandom.com/wiki/Weapons</a></p>


                    <h3 className="project-title"><a href="http://secret-bayou-38884.herokuapp.com/login" target="_blank" class="a_top_hypers">Game Tracker</a></h3>
                    <iframe className="project-thumbnail" src="https://www.loom.com/embed/170bcb121cf24364bee51c9d5e88ad2b" frameBorder="0" webkitallowfullscreen="allowfullscreen" mozallowfullscreen="allowfullscreen" allowFullScreen="allowfullscreen"></iframe>
                    <p className="white-font">Game Tracker is an app designed to allow users to keep a catalogue of the games they are either interested in, currently playing, or have played before. Users can also see whether a game that is in their interested-in section is on sale anywhere. The inspiration for this app came from a conversation between friends; we wanted to be able to go to one place to see all of the games we own, regardless of platform. Each platform (PC, Xbox, Playstation, etc.) can only keep track of the games that are owned on that specific platform, so Game Tracker is a solution to that by allowing users to add any game, regardless of where they played it.</p>

                    <h3 className="project-title"><a href="" target="_blank" class="a_top_hypers">My Meals</a></h3>
                    <iframe className="project-thumbnail" src="https://www.loom.com/embed/f6ea4e8d2920439caa32c33fecc1642c" frameBorder="0" webkitallowfullscreen="allowfullscreen" mozallowfullscreen="allowfullscreen" allowFullScreen="allowfullscreen"></iframe>
                    <p className="white-font">My Meals was created as a way to plan out what meals a user wants to eat over the course of the week for each of morning, afternoon, and evening. Users can add meals from Spoonacular and their database of recipes, then check their shopping list in the app to see all of the ingredients and groceries they need to buy for those meals. I know that meal prep and planning has become very popular lately, so I wanted to make an app that makes it easy to check out new meals and easily see the ingredients needed. Each meal also has a link to the website that the recipe is from with instructions on how to prepare it.</p>

                </div>
            </Col>
        </Row>
    )
}

export default Projects