import './App.css';
import FilmCard from './Components/FilmCard';
import listFilms from './Components/ListesFilms';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [description, setDescription] = useState();
  const [note, setNote] = useState();

  const [search, seatSearch] = useState();


  const handalTitle = (event) => {
    
    setTitle(event.target.value);
  }

  const handalUrl = (event) => {
   
    setUrl(event.target.value);
  }

  const handalDescription = (event) => {

    setDescription(event.target.value);
  }

  const handalNote = (event) => {

    setNote(event.target.value);
  }

  const handalSearch = (event) => {

    seatSearch(event.target.value);
  }

  const [movies, setMovies] = useState(listFilms);

  const handalAdd = () => {

    const  newmovies = listFilms.push(
      {
        
        title: title,
        descrition: description,
        urlMovies: url,
        note: note

    })
    setMovies([...movies, newmovies]);
    handleClose();
  }

  const handalFind = () => {   
    const filteredMovies = listFilms.filter((list) => list.note.toString() === search || list.title.toString() === search)
    console.log(filteredMovies)
    
  }
 
  return (
    <div>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">SEN-Films</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>

               <Button variant="primary" onClick={handleShow}>
                   Ajouter
              </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add a Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control
                      onChange={handalTitle}
                      type="text"
                      placeholder="titre du film"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Url </Form.Label>
                    <Form.Control
                      onChange={handalUrl}
                      type="text"
                      placeholder="Url de l'image"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handalDescription} as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Note </Form.Label>
                    <Form.Control

                      onChange={handalNote}
                      type="number"
                      placeholder="saisir la note"
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handalAdd}>
                  Valider
                </Button>
              </Modal.Footer>
            </Modal>
              
            <Form className="manage d-flex">
            <Form.Control
            onChange={handalSearch}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handalFind} variant="outline-success">Search</Button>
          </Form>
              
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className='contain'>
        {

          movies.map((movie) => {
            return <div className='carde'>
                <FilmCard title={movie.title} description={movie.descrition} url={movie.urlMovies} note={movie.note}/>
              </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
