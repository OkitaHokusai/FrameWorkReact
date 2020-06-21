import React from 'react';
import {Card,Button,Badge} from 'react-bootstrap';
import { FaTrash,
         FaSearchPlus,
         FaArrowUp,
         FaArrowDown,
         FaEnvelope, } from 'react-icons/fa';
import '../assets/contacard.css';



export const ContaCard = () => (

    <Card id='conta' style={{ width: '18rem' }}>
       <Card.Body >        
         <Card.Title>(Insira um nome aqui)</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">
          (Id da conta)
         </Card.Subtitle>
         <Card.Text>
           (Tipo da conta)
         </Card.Text>
            <Card.Link href="./Contas/ContaDetalhe"><Button variant="outline-info"><FaSearchPlus/> Vizualizar</Button></Card.Link>
            <Card.Link><Button variant="danger" ><FaTrash/>Excluir</Button></Card.Link> 
      </Card.Body>
    </Card>

)

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

export const CategoriaBadge = () => (
   <h5>
       Carros
       <Button variant="danger" size="sm" id="excluir">
        X
       </Button>
   </h5>
  
)

export const Historicoentrada = () => (
    <p><b>24/05/2020</b> Depositado R$100,00 <FaArrowUp/> </p>
)

export const Historicosaida = () => (
    <p><b>24/05/2020</b> Sacado R$100,00 em Comercio <FaArrowDown/> </p>
)