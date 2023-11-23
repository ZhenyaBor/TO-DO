import { useFormikContext } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import { InitialType } from "../types";

type Props = {
  title: string;
};

export const TodoForm = ({ title }: Props) => {
  const formik = useFormikContext<InitialType>();
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = formik;

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <h1 className="text-center mt-6"> {title}</h1>
      <Row>
        <Form.Group as={Col} md="8" controlId="validationCustom02">
          <Form.Control
            type="text"
            name="text"
            value={values.text}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="New task"
            isValid={touched.text && !errors.text}
            isInvalid={touched.text && !!errors.text}
          />
          <Form.Control.Feedback type="invalid">{errors.text}</Form.Control.Feedback>
        </Form.Group>
        <Col md="4">
          <Button
            type="submit"
            variant="primary"
            className="d-flex justify-content-center align-items-center w-100 mt-3 mt-md-0 "
            style={{ backgroundColor: "#ffba00", border: "0" }}>
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
