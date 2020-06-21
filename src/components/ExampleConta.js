import React from 'react';
import {Card,Button,} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import '../assets/contacard.css'

export const ExampleCard = () => (

    <Card id='conta' style={{ width: '18rem' }}>
       <Card.Body >        
         <Card.Title>Minhas Contas</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">
          Visão geral
         </Card.Subtitle>
         <Card.Text>
           Parece que não há nada aqui...  :c
           Que tal criar uma conta?
         </Card.Text>
         <Button variant="success" > <FaPlus/> Criar Conta</Button>           
      </Card.Body>
    </Card>

)