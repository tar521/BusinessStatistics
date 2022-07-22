import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {ButtonGroup, Button, Container, Table, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const DeptFetch = () => {

    // const [depts, setDepts] = useState([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    
    //     fetch('http://localhost:8080/api/dept')
    //       .then(response => response.json())
    //       .then(data => {
    //         setDepts(data);
    //         setLoading(false);
    //       })
    //   }, []);

    //   const remove = async (id) => {
    //     await fetch(`/api/dept/${id}`, {
    //       method: 'DELETE',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       }
    //     }).then(() => {
    //       let updatedDept = [...depts].filter(i => i.id !== id);
    //       setDepts(updatedDept);
    //     });
    //   }

    //   if (loading) {
    //     return <p>Loading...</p>;
    //   }

    //   const deptList = depts.map(dept => {
    //     const productName = `${dept.productName || ''} `;
    //     return <tr key={dept.id}>
    //         <td style={{whiteSpace: 'nowrap'}}>{dept.name}</td>
    //         <td>{productName}</td>
    //         <td>
    //         <ButtonGroup>
    //             <Button size="sm" color="primary" tag={Link} to={"/dept/" + dept.id}>Edit</Button>
    //             <Button size="sm" color="danger" onClick={() => remove(dept.id)}>Delete</Button>
    //         </ButtonGroup>
    //         </td>

    //     </tr>
    //   });


    
	return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <h3>Department Table</h3>
                <Table className="mt-4">
                <thead>
                <tr>
                    <th width="20%">Name</th>
                    <th width="20%">ProductName</th>
                    <th width="10%">Actions</th>
                </tr>
                </thead>
                {/* {<tbody>
                {deptList}
                </tbody>} */}
                </Table>
            </Container>
        </div>
    )
    
}
       export default DeptFetch;


 /*      
  const initialFormState = {
    name: '',
    ProductName: '',
  };
  const [dept, setDept] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'new') {
      fetch(`http://localhost:8080/dept/${id}`)
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

    await fetch('http://localhost:8080/' + (dept.id ? '/' + dept.id : ''), {
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

  const title = <h2>{dept.id ? 'Edit Dept' : 'Add Dept'}</h2>;

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
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address" value={dept.ProductName || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/groups">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )
};
*/
