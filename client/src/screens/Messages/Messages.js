import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Accordion, Badge, Button, Card, useAccordionButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessageAction, listMessage } from '../../actions/messageActions';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import moment from "moment";


const Messages = () => {
    const dispatch = useDispatch();

  const messageList = useSelector((state) => state.messageList);
  const { loading, error, message } = messageList;

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin

  const messageCreate = useSelector((state) => state.messageCreate);
  const { success: successCreate } = messageCreate;

  const messageUpdate = useSelector((state) => state.messageUpdate);
  const { success: successUpdate } = messageUpdate;

  const messageDelete = useSelector((state) => state.messageDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = messageDelete;

    const deleteHandler = (id) => {
        if(window.confirm("Are you Sure?")){
          dispatch(deleteMessageAction(id));
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

      const navigate = useNavigate();

      useEffect(() => {
       dispatch(listMessage())
       if(!userInfo){
        navigate("/")
       }
      },[dispatch,successDelete,
        successCreate,
        successUpdate,,navigate,userInfo])

        const admin = (userInfo.email === "CPM@gmail.com")? true : false;

  return (
    <MainScreen title = {`Welcome Back ${userInfo.name}`}>
      <Link to="/createNewMessage">
       { !admin && <Button style={{ marginLeft:10, marginBottom: 6}} size="lg">
            Add new message
        </Button>} 
      </Link>
      {error && <ErrorMessage variant = "danger">{error}</ErrorMessage>}
      {loading && <Loading/>}
      {message?.reverse().map((note) => (
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
            {!admin && <div>
                <Button href={`/message/${note._id}`}>Edit</Button>
                <Button variant='danger' className='mx-2' onClick={() => {deleteHandler(note._id)}}>Delete</Button>
            </div>}
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
        <Card.Body>
            <h4><Badge variant="success">{note.title}</Badge></h4>
            <blockquote className='blockquote mb-0'>
                <p>{note.content}</p>
                <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                        {moment(new Date(note.createdAt)).format('DD-MM-YYYY HH:mm:ss') }
                        </cite>
                      </footer>
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
