import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



import 'bootstrap/dist/css/bootstrap.min.css';

export default function FilmCard({title, url, description, note}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="secondary">Note: {note}</Button>
      </Card.Body>
    </Card>
  )
}
