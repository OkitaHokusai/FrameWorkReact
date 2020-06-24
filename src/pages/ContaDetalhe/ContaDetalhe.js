import React from 'react';
import {Row,Form,Col, Button,Jumbotron as Jumbo, Spinner} from 'react-bootstrap';
import {Historicoentrada,Historicosaida } from '../../components/ContaCard';
import styled from 'styled-components';
import '../../assets/contacard.css';
import {Navigationbar} from '../../components/Navbar';
import {Layout} from '../../components/Layout';

const H2 = styled.h5`
    font-family: 'Exo 2', sans-serif;
    font-weight: Bolder;
    font-size: 35px;
`

export const ContaDetalhe = () => (
    
    <>
    <Navigationbar/>
    <Layout>
     <Row>
        <H2>Visão Geral:</H2>
        <Jumbo id="categorias-3">
            <p><b>Saldo Total:</b> R$504,00 </p>
        </Jumbo>
    </Row>
    <Row>
        <H2>Fazer Lançamento:</H2>
        <Jumbo id="categorias-2">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="email" placeholder="100,01" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" placeholder="30/01/2002" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control as="select">
                                <option>Lazer</option>
                                <option>Alimentação</option>
                                <option>Contas</option>
                                <option>Educação</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as="select">
                                <option>Entrada</option>
                                <option>Saida</option>
                            </Form.Control>
                        </Form.Group>
                </Form.Row>
                <Button variant="success" type="submit">
                    <b>Registrar</b>
                </Button>
            </Form>
        </Jumbo>
    </Row>
    <Row>
        <H2>Histórico de Lançamentos:</H2>
        <Jumbo id="categorias">
            <Historicoentrada/>
            <Historicoentrada/>
            <Historicoentrada/>
            <Historicoentrada/>
            <Historicoentrada/>
            <Historicoentrada/>
            <Historicoentrada/>
            <Historicosaida/>
        </Jumbo>
    </Row>
    </Layout>
    </>
) 