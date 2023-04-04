import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

export default function ContactForm() {
  return (
    <div>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                id='name'
                name='name'
                placeholder='Enter your name'
                type='text'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                id='email'
                name='email'
                placeholder='Enter your Email'
                type='email'
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for='phoneNo'>Phone No</Label>
          <Input
            id='phoneNo'
            name='phoneNo'
            placeholder='Enter your phone no'
            type='number'
          />
        </FormGroup>

        <FormGroup>
          <Label for='address'>Address</Label>
          <Input id='address' name='address' placeholder='Enter your address' />
        </FormGroup>
      </Form>
    </div>
  );
}
