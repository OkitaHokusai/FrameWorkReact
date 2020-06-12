import React from 'react';
import { Nav,
    Navbar,
} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar{
        background-color: #222;
    }
    .navbar-brand, .navbar-nav, .nav-link {
        color: #bbb;

        &:hover{
            color: white;
        }
    }
`;

export const Navigationbar = () => (
    <Styles>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><b>FrameWork</b></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Conta</Nav.Link>
      <Nav.Link href="#pricing">Perfil</Nav.Link>
    </Nav>
  </Navbar>
  <br/>
    </Styles>
)