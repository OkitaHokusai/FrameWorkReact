import React from 'react';
import styled from 'styled-components';
import {Jumbotron,Row,CardDeck} from 'react-bootstrap';
import {EntradasCard,
        SaidasCard,
        AjudaCard,
        SituaCard} from './components/ContaCard';
import './assets/contacard.css';



export const Principal = () => (
    <>
    <Row>
       <Jumbotron id="menu">
           <CardDeck>
                <EntradasCard/>
                <SaidasCard/>
                <AjudaCard/>
            </CardDeck>
       </Jumbotron>
    </Row>
    <Row>
        <Jumbotron id="menu">
            <CardDeck>
                <SituaCard/>  
            </CardDeck>
        </Jumbotron> 
    </Row>
    <Row>
        <Jumbotron id="menu">Espaço para o grafico</Jumbotron>
    </Row>
    </>
)