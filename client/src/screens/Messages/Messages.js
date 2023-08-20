import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import { Accordion, Badge, Button, Card, useAccordionButton } from 'react-bootstrap';
import axios from "axios";

const Messages = () => {
    const [notes, setNotes] = useState([])

    const deleteHandler = (id) => {
        if(window.confirm("Are you Sure?")){

        }
    }

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
        );
      
        return (
          <div onClick={decoratedOnClick}>{children}</div>
        );
      }

      const fetchData = async () => {
            const {data} = await axios.get("/api/notes")
            setNotes(data)
      }

      useEffect(() => {
        fetchData()
      },[])
  return (
    <MainScreen title = "Welcome back Priyanka Hiremath...">
      <Link to="createNewMessage">
        <Button style={{ marginLeft:10, marginBottom: 6}} size="lg">
            Add new message
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
        <Card style={{margin: 10}}>
        <Card.Header style={{display:"flex"}}>
            <span
            style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
                <CustomToggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >{note.title}
                </CustomToggle>
                </span>
            <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button variant='danger' className='mx-2' onClick={() => {deleteHandler(note._id)}}>Delete</Button>
            </div>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
        <Card.Body>
            <h4><Badge variant="success">{note.category}</Badge></h4>
            <blockquote className='blockquote mb-0'>
                <p>{note.content}</p>
                <footer className='blockquote mb-0'>---Date</footer>
            </blockquote>
        </Card.Body>
        </Accordion.Collapse>
      </Card>
      </Accordion>
      )
      )}
      
    </MainScreen>
  )
}

export default Messages
