import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


export default function CardPizza (props){
    return(
        <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><p class= "text-center">Ingredientes: </p><br></br>🍕{props.ingredients.join(', ')}</ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush text-center">
          <ListGroup.Item>Precio: ${props.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="d-flex justify-content-between">
        <Button variant="light">Ver más</Button>
        <Button variant="dark">añadir al carrito</Button>
        </Card.Body>
      </Card>
    )
}


