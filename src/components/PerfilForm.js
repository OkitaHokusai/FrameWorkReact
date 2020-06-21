import React from 'react';
import {Jumbotron,Form,Col,Button} from 'react-bootstrap'; 
import '../assets/contacard.css';

export const PerfilForm = () => (

    <Jumbotron id="perfilform">
        <Form.Row id="cadform">
        <Form.Group as={Col} md="6" controlId="formBasicEmail">
        <Form.Label id="formlbl">Nome:</Form.Label>
        <Form.Control type="text" placeholder="Okita" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6"controlId="formBasicTelephone">
        <Form.Label id="formlbl">Telefone:</Form.Label>
        <Form.Control type="number" placeholder="(31)98909-3846" />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="formBasicEmail">
        <Form.Label id="formlbl">Email:</Form.Label>
        <Form.Control type="text" placeholder="exemplo@email.com" />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="formBasicEmail">
        <Form.Label id="formlbl">Cep:</Form.Label>
        <Form.Control type="text" placeholder="31270390" maxLength="9" />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="formBasicPassword">
        <Form.Label id="formlbl">Senha:</Form.Label>
        <Form.Control type="password" placeholder="" />
        <Form.Text className="text-muted">
        Não compartilhe essa informação com mais ninguem!
        </Form.Text>
        </Form.Group>

        <Button variant="success" type="submit" id="formlbl">
        Salvar
        </Button>
    </Form.Row>
    </Jumbotron>

)