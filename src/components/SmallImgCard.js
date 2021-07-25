import {Link} from 'react-router-dom'

import {Card} from 'react-bootstrap';

export default function SmallingCard ({books}) {


    return (
        <Card className="mt-4" as={Link} to={`/product/${books.isbn}`} >
            <Card.Img variant="top" src={`${books.thumbnailUrl}`} />                                    
        </Card>
    )
}