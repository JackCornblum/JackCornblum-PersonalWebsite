import {Card} from 'react-bootstrap'

function Article({title, description, image, content, link}) {
    console.log(description)


    return (
        <Card className="article-card">
            <Card.Img variant="top" src={image} />
            <Card.Title>{title}</Card.Title>
            <Card.Body href={link} target="_blank"><a href={link} target="_blank">Read the full thing here!</a></Card.Body>
        </Card>
      
    )
}

export default Article;