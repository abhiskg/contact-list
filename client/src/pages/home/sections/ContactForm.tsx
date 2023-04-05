import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContact } from "../../../hooks/useContactsData";

const ContactSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email(),
  phoneNo: z.string().min(1, { message: "Please enter your number" }),
  address: z.string().min(1, { message: "Please enter your address" }),
});

type ContactSchemaType = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const { mutate, isLoading } = useCreateContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  });

  const { ref: nameRef, ...registerName } = register("name");
  const { ref: emailRef, ...registerEmail } = register("email");
  const { ref: phoneRef, ...registerPhoneNo } = register("phoneNo");
  const { ref: addressRef, ...registerAddress } = register("address");

  const handleContact: SubmitHandler<ContactSchemaType> = (data) => {
    mutate(data);
    reset();
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <Form onSubmit={handleSubmit(handleContact)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                id='name'
                placeholder='Enter your name'
                type='text'
                innerRef={nameRef}
                {...registerName}
              />
              {errors.name?.message && <p>{errors.name?.message}</p>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                id='email'
                innerRef={emailRef}
                {...registerEmail}
                placeholder='Enter your Email'
                type='email'
              />
              {errors.email?.message && <p>{errors.email?.message}</p>}
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for='phoneNo'>Phone No</Label>
          <Input
            id='phoneNo'
            innerRef={phoneRef}
            {...registerPhoneNo}
            placeholder='Enter your phone no'
            type='number'
          />
          {errors.phoneNo?.message && <p>{errors.phoneNo?.message}</p>}
        </FormGroup>

        <FormGroup>
          <Label for='address'>Address</Label>
          <Input
            id='address'
            innerRef={addressRef}
            {...registerAddress}
            placeholder='Enter your address'
          />
          {errors.address?.message && <p>{errors.address?.message}</p>}
        </FormGroup>

        <Button color='primary'>Submit</Button>
      </Form>
    </div>
  );
}
