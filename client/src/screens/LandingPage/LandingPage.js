import React, {useEffect} from 'react'
import { Button, Container, Row } from 'react-bootstrap'

import './LandingPage.css';

const LandingPage = ({history}) => {

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if(userInfo){
  //     history.push("/message")
  //   }
  // },[history])

  return (
    <div className="main">
      <Container>
        <Row>
            <div className='intro-text'>
                <div>
                    <h1 className='title'>Welcome to View Messanger</h1>
                    <p className='subtitle'>Convey your Opinion to the ADMIN</p>
                    <div className='buttonContainer'>
                        <a href="/login">
                            <Button size='lg' className="landingbutton">
                                Login
                            </Button>
                        </a>
                        <a href="/register">
                            <Button variant="outline-primary"size="lg" className="landingbutton">
                                Sign up
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
