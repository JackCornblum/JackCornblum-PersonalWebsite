import {Card} from 'react-bootstrap'

function Article({title, description, image, content, link}) {


    return (
        <Card className="article-card">
            <Card.Img variant="top" src={image} />
        </Card>
    )
}

export default Article;