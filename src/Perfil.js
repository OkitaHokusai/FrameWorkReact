import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import {PerfilForm} from './components/PerfilForm'

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
   
    <H2>Bem vindo, Okita!</H2>
    <H5>Aqui você pode alterar suas informações</H5>
    <Row>
        <PerfilForm/>
    </Row>
    </>
)



