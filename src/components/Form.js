import React from 'react';
import {Form,
        FormControl,
        Button,
        Row,
        Col,
        InputGroup,} from 'react-bootstrap'; 
import { FaUserCircle } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/Form.css'

export const LoginForm = () =>(
    <Form>
 <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><FaUserCircle/></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Usuário ou Email"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><FaLock/></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Senha"
      aria-label="Password"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <Row>
    <Col xs={11}>
    <Link to="/Cadastrar" id="formlink">Não tem uma conta?</Link>
    </Col>
    <Col xs={1}>
    <Button variant="dark" type="submit">
      Entrar
    </Button>
    </Col>
  </Row>
</Form>
)