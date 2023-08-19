import { Card } from "react-bootstrap";
const Post1 = () => {
    return (
        <Card>
            <Card.Img 
            variant="top"
            src="data:image/png;base64,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"
            width={20}
            height={250} />
            <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                JavaScript is the world most popular
                    lightweight, interpreted compiled programming
                    language. It is also known as scripting
                    language for web pages. It is well-known for
                    the development of web pages, many non-browser
                    environments also use it. JavaScript can be
                    used for Client-side developments as well as
                    Server-side developments
                </Card.Text>
                <a href ="#" className='btn btn-primary'>Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;