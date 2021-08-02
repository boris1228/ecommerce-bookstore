import {Link} from 'react-router-dom'

import {Card} from 'react-bootstrap';

export default function SmallingCard ({movie}) {


    return (
        <Card className="mt-4" as={Link} to={`/product/${movie.id}`} >
            <Card.Img variant="top" src={`${movie.thumbnailUrl}`} />                                    
        </Card>
    )
}