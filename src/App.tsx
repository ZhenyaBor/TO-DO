import { Col, Container } from "react-bootstrap";
import { TodoForm, TodoList } from "./components";
import { FormikProvider } from "formik";
import { useFormTodo } from "./components/hooks";

function App() {
  const formik = useFormTodo();

  return (
    <Container
      className="mt-3 d-flex justify-content-center align-items-center"
      style={{ maxWidth: "800px" }}>
      <Col>
        <FormikProvider value={formik}>
          <TodoForm title="Todo List" />
        </FormikProvider>
        <TodoList />
      </Col>
    </Container>
  );
}

export default App;
