import React, {useEffect} from 'react';
import { Nav,
    Navbar,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaSignOutAlt } from 'react-icons/fa';


const Styles = styled.div`
    .navbar{
        background-color: #3f3e40;
    }
    .navbar-brand,.navbar-nav {
        color: white;
        transition: 1s ;
        &:hover{
            color: #a259d9;
        }
    }
    .navlink{
        color: black;
    }
    .division{
        height:15px;
        background-color: #a259d9;
        box-shadow: 0px 7px 48px -20px rgba(0,0,0,0.75);
    }

`;


export const Navigationbar = () => {
    
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem('session') == null){      
            history.push('/');
        }
    },[]);

    function handleOnClickLink(event){
        event.preventDefault();
        history.push(event.target.name);
    }
    function handleOnClickLogout(event){
        event.preventDefault();
        localStorage.removeItem('session');
        history.push(event.target.name);
    }
    
    

    return(
    <Styles>
        <Navbar>
    <Navbar.Brand ><b>FrameWork</b></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link id="navlink" onClick={handleOnClickLink} name="/Principal">Home</Nav.Link>
      <Nav.Link id="navlink" onClick={handleOnClickLink} name="/Contas">Contas</Nav.Link>
      <Nav.Link id="navlink" onClick={handleOnClickLink} name="/Categorias">Categorias</Nav.Link>
      <Nav.Link id="navlink" onClick={handleOnClickLink} name="/Perfil">Perfil</Nav.Link>
      <Nav.Link id="navlink" onClick={handleOnClickLogout} name="/">Logout <FaSignOutAlt/> </Nav.Link>
    </Nav>
  </Navbar>
  <div className="division"></div>

  <br/>
    </Styles>
)}