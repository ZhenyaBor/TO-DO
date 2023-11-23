import { AnimatePresence, motion } from "framer-motion";
import { TodoItem } from "./TodoItem";
import { useAppSelector } from "../redux/hooks";

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todo);

  return (
    <AnimatePresence>
      {todos.length ? (
        todos.map((todo) => (
          <motion.div
            layout
            key={todo.id}
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}>
            <TodoItem todo={todo} />
          </motion.div>
        ))
      ) : (
        <b>You can add TODO</b>
      )}
    </AnimatePresence>
  );
};
