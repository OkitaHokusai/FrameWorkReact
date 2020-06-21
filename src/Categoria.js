import React from 'react';
import {Row,Form,Col, Button,Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import {CategoriaBadge} from './components/ContaCard';
import './assets/contacard.css';

const H2 = styled.h5`
    font-family: 'Exo 2', sans-serif;
    font-weight: Bolder;
    font-size: 35px;
`

export const Categorias = () => (
    <>
    <Row>
        <Form as={Col}>
            <Form.Label><H2>Crie suas Categorias:</H2></Form.Label>
            <Form.Control type="text" placeholder="Carros" />
            <Form.Text className="text-muted">
             Não repita o nome exato de uma categoria ja existente! 
            </Form.Text>
            <br/>
            <Button variant="dark" type="submit">
                <b>Salvar</b>
            </Button>
        </Form>
    </Row>
    <br/>
    <Row>
        <Jumbo id="categorias">
                <CategoriaBadge/>
        </Jumbo>
    </Row>
    </>
)