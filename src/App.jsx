import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Generate from "./components/Generate.jsx"
import GenerateUserVoice from './components/GenerateUserVoice.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import UploadVoice from './components/UploadVoice';


function App() {

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="home">Tacotron Voice Cloner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">
              Home
            </Nav.Link>
            <Nav.Link href="generate">
              Generate
            </Nav.Link>
            <Nav.Link href="uploadvoice">
              Upload Voice
            </Nav.Link>
            <Nav.Link href="submitvoice">
              Submit Voice
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link className="ml-auto">Credits: 100 coins</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="ml-auto" onClick={() => loginWithRedirect()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <BrowserRouter>
      <Routes>
        <Route path="home" element={<>A</>} />
        <Route path="generate" element={<Generate/>} />
        <Route path="generate/:id" element={<GenerateUserVoice />} />
        <Route path="uploadvoice" element={<UploadVoice />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
