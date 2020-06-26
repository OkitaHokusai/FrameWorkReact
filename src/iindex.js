import React from 'react';
import styled from 'styled-components';
import {Row, Col,Form,Jumbotron,Button} from 'react-bootstrap';

const H5 = styled.h5`
    color: grey;
    font-weight: normal;
    font-size: 15px;
    font-family: 'Exo 2', sans-serif;
`;
const H2 = styled.h5`
    font-family: 'Exo 2', sans-serif;
    font-weight: Bolder;
    font-size: 35px;
`
export const Perfil = () => (

    <>
   
    <H2>Cadastre uma conta</H2>
    <Row>
    <Jumbotron id="perfilform">
        <Form.Row id="cadform">
        <Form.Group as={Col} md="6" controlId="formBasicEmail">
        <Form.Label id="formlbl">Nome:</Form.Label>
        <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} md="6"controlId="formBasicTelephone">
        <Form.Label id="formlbl">Valor:</Form.Label>
        <Form.Control type="number" placeholder="(31)98909-3846" />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="formBasicEmail">
        <Form.Label id="formlbl">Email:</Form.Label>
        <Form.Control type="text" placeholder="exemplo@email.com" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Categorias</Form.Label>
                <Form.Control as="select">
                <option>Entrada</option>
                <option>Saida</option>
            </Form.Control>
        </Form.Group>
        <Button variant="success" type="submit" id="formlbl">
        Salvar
        </Button>
    </Form.Row>
    </Jumbotron>
    </Row>
    </>
)



