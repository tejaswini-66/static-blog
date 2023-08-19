import { Card }  from 'react-bootstrap';
const Post2 = () => {
    return ( 
        <Card>
            <Card.Img
            variant='top'
            src='data:image/jpeg;base64,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'
            width ={20}
            height={250}
            />
            <Card.Body>
                <Card.Title>Data Structure</Card.Title>
                <Card.Text>
                The word Algorithm means “a process
                    or set of rules to be followed in calculations
                    or other problem-solving operations”. Therefore
                    Algorithm refers to a set of rules/instructions
                    that step-by-step define how a work is to be
                    executed upon in order to get the expected
                    results.
                </Card.Text>
                <a href="#" className='btn btn-primary'>Read More</a>
            </Card.Body>
            </Card>
    )
}
export default Post2;