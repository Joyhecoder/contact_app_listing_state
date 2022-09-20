import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';

const AddNewContact = ({addContactProp}) => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState('Texas')
    const [zip, setZip] = useState('')
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")

const handleSubmit = (e) => { 
    e.preventDefault();
    let newContact = {
        id: uuidv4(),
        name,
        address,
        city,
        state,
        zip,
        number,
        email
    }
    addContactProp(newContact)
 }



  return (
    <>
        <div className="container">
            <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label >Name</Form.Label>
                    <Form.Control placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label >Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" value={address} onChange={e => setAddress(e.target.value)} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={city} onChange={e => setCity(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Texas" value={state} onChange={e => setState(e.target.value)}>
                        <option>Texas</option>
                        <option>Washington</option>
                        <option>Oregon</option>
                        <option>California</option>
                        <option>New Mexico</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control value={zip} onChange={e => setZip(e.target.value)} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" value={number} onChange={e => setNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Favorite this contact" />
                </Form.Group>

                <div className="buttonPair">
                    <Button variant="primary" type="submit" className="submitButton" onClick={handleSubmit} >
                        Submit
                    </Button>
                    <Button type="submit" className="cancelButton">
                        Cancel
                    </Button>
                </div>
               
            </Form>
        </div>
    
    </>
  )
}

export default AddNewContact