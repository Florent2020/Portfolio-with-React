import React from "react";
import { Form, Button } from "react-bootstrap";

function Forms() {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Full name*" id="name" />
          <Form.Text className="text-muted form-error" id="nameError">
            Please enter your name!
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control type="text" placeholder="Email*" />
          <Form.Text className="text-muted form-error" id="invalidEmailError">
            Please enter a valid email address!
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control as="textarea" placeholder="Message*" rows={6} />
          <Form.Text className="text-muted form-error" id="messageError">
            Plesae write your message here!
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" id="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
