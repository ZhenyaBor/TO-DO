import { FaTrash } from "react-icons/fa";
import { Button, Card, Col } from "react-bootstrap";
import { TodoItemType } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { markAsCompleted, removeTodo } from "../redux/slice/todoSlice";

type Props = {
  todo: TodoItemType;
};

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Card className="mb-3 w-100" style={{ backgroundColor: "#e0dede" }}>
      <Card.Body
        className={`p-2 d-flex justify-content-between align-items-start w-100
       ${todo.completed && "bg-success"}`}>
        <Col md="8" className="d-flex flex-column" style={{ marginRight: "10px" }}>
          <label className="d-flex align-items-center" style={{ cursor: "pointer" }}>
            <input
              className="m-3"
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(markAsCompleted(todo.id))}
            />
            <strong>{todo.text}</strong>
          </label>
        </Col>

        <Col className="d-flex flex-column align-items-end" style={{ marginRight: "10px" }}>
          <Card.Text className="m-0">Date: {todo.date}</Card.Text>
          <Card.Text className="m-0">Time: {todo.time}</Card.Text>
        </Col>
        <Button
          variant="primary"
          className="align-self-center"
          size="sm"
          style={{ backgroundColor: "#ffba00", border: "0" }}
          onClick={() => dispatch(removeTodo(todo.id))}>
          <FaTrash />
        </Button>
      </Card.Body>
    </Card>
  );
};
