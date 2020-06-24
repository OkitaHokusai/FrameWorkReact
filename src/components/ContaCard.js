import React, {useEffect, useState} from 'react';
import Categoria from '../classes/Categorias'
import Conta from '../classes/Contas'
import {Card,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import { FaTrash,
         FaSearchPlus,
         FaArrowUp,
         FaArrowDown,
         FaEnvelope, } from 'react-icons/fa';
import '../assets/contacard.css';


export const ContaCard = (props) => {
    const history = useHistory();

    const objConta = new Conta();

    function handleClickDelete(){
        const message = objConta.delete(props.id);
        alert(message);
        history.go("/Contas");
    }

    return(

    <Card id='conta' style={{ width: '18rem' }}>
       <Card.Body >        
         <Card.Title>{props.nome}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">
          {props.tipo}
         </Card.Subtitle>
         <Card.Text>
           {props.categoria}
         </Card.Text>
            <Card.Link href="./Contas/ContaDetalhe"><Button variant="outline-info"><FaSearchPlus/> Vizualizar</Button></Card.Link>
            <Card.Link><Button variant="danger" onClick={handleClickDelete}><FaTrash/>Excluir</Button></Card.Link> 
      </Card.Body>
    </Card>

)}

export const EntradasCard = () => (
    
    <Card className=" text-white" style={{ width: '18rem' }}>
        <Card.Header className="bg-success"><Card.Title>Entradas <FaArrowUp/></Card.Title></Card.Header>
        <Card.Body id="cardbody">
        <Card.Text>
            12
        </Card.Text>
        </Card.Body>
    </Card>
)

export const SaidasCard = () => (
    
    <Card className=" text-white" style={{ width: '18rem' }}>
        <Card.Header className="bg-warning"><Card.Title>Saidas <FaArrowDown/></Card.Title></Card.Header>
        <Card.Body id="cardbody">
        <Card.Text >
                4
        </Card.Text>
        </Card.Body>
    </Card>
)

export const AjudaCard = () => (
    
    <Card id="helpcard" className="bg-light text-black" style={{ width: '18rem' }}>
        <Card.Header id="cardhelp"><Card.Title>Precisa de ajuda? </Card.Title></Card.Header>
        <Card.Body>
            <Button id="helpbtn"><FaEnvelope size="18px" /></Button>
            <br/>
      
        </Card.Body>
    </Card>
)

export const SituaCard = () => (
    
    <Card  className=" text-black text-center" style={{}}>
        <Card.Header className="bg-info"><Card.Title>Situação </Card.Title></Card.Header>
        <Card.Body>
            Pelo visto você sabe bem cuidar do seu dinheiro! :)
        </Card.Body>
    </Card>
)

export const CategoriaBadge = (props) => {
    const objCat = new Categoria();

    function handleClickDelete(){
        const message = objCat.delete(props.id);
        alert(message);
        history.go('/');
    }
    const history = useHistory();
    return(
   <h5 style={props.style}>
       {props.categoria}
       <Button variant="danger" size="sm" id="excluir" onClick={handleClickDelete}>
        X
       </Button>
   </h5>
  
)}

export const Historicoentrada = () => (
    <p><b>24/05/2020</b> Depositado R$100,00 <FaArrowUp/> </p>
)

export const Historicosaida = () => (
    <p><b>24/05/2020</b> Sacado R$100,00 em Comercio <FaArrowDown/> </p>
)