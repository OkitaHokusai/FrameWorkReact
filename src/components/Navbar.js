import React from 'react';
import { Nav,
    Navbar,
} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar{
        background-color: #60107a;
        box-shadow: 0px 7px 48px -20px rgba(0,0,0,0.75);
    }
    .navbar-brand,.navbar-nav {
        color: white;

        &:hover{
            color: grey;
        }
    }
    .navlink{
        color: black;
    }
`;


export const Navigationbar = () => (
    <Styles>
        <Navbar>
    <Navbar.Brand href="/"><b>FrameWork</b></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link id="navlink" href="./Principal">Home</Nav.Link>
      <Nav.Link id="navlink" href="./Contas">Contas</Nav.Link>
      <Nav.Link id="navlink" href="./Categorias">Categorias</Nav.Link>
      <Nav.Link id="navlink" href="./Perfil">Perfil</Nav.Link>
    </Nav>
  </Navbar>
  <br/>
    </Styles>
)