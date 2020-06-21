import React from 'react';
import {Form,
        Button,
        Col,
        InputGroup,} from 'react-bootstrap'; 
// import { FaUserCircle, FaLock, FaPhone } from 'react-icons/fa';
import './assets/CadForm.css';
    
    

export const CadForm = () =>(
    <Form.Row id="cadform">
        <Form.Group as={Col} md="6" controlId="formBasicEmail">
        <Form.Label id="formlbl">Nome:</Form.Label>
        <Form.Control type="text" placeholder="Seu nome" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="formBasicEmail">
        <Form.Label id="formlbl">Usuário:</Form.Label>
        <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control type="text" aria-describedby="inputGroupPrepend" placeholder="" />
        </InputGroup.Prepend>
        </Form.Group>

        <Form.Group as={Col} md="12"controlId="formBasicTelephone">
        <Form.Label id="formlbl">Telefone:</Form.Label>
        <Form.Control type="number" placeholder="(00)0000-0000" />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="formBasicEmail">
        <Form.Label id="formlbl">Email:</Form.Label>
        <Form.Control type="text" placeholder="exemplo@email.com" />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="formBasicEmail">
        <Form.Label id="formlbl">Cep:</Form.Label>
        <Form.Control type="text" placeholder="XXXXXXXX" maxLength="9" />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="formBasicPassword">
        <Form.Label id="formlbl">Senha:</Form.Label>
        <Form.Control type="password" placeholder="" />
        <Form.Text className="text-muted">
        Não compartilhe essa informação com mais ninguem!
        </Form.Text>
        </Form.Group>

        <Button variant="dark" type="submit" id="formlbl">
        Cadastrar
        </Button>
    </Form.Row>
    
)

