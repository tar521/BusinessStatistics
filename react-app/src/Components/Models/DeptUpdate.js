import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const DeptUpdate = () => {
  const initialFormState = {
    name: '',
    productName: '',
  };
  const [dept, setDept] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'new') {
      fetch(`/api/dept/${id}`)
        .then(response => response.json())
        .then(data => setDept(data));
    }
  }, [id, setDept]);

  const handleChange = (event) => {
    const { name, value } = event.target

    setDept({ ...dept, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('/api/dept' + (dept.id ? '/' + dept.id : ''), {
      method: (dept.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dept)
    });
    setDept(initialFormState);
    navigate('/dept');
  }

  const title = <h2>{dept.id ? 'Edit Group' : 'Add Group'}</h2>;

  return (<div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={dept.name || ''}
                   onChange={handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="productName">ProductName</Label>
            <Input type="text" name="productName" id="productName" value={dept.productName || ''}
                   onChange={handleChange} autoComplete="productName"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/dept">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )
};

export default DeptUpdate;