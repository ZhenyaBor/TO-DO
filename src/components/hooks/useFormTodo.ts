import * as yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/slice/todoSlice";
import { InitialType } from "../../types";

const validationSchema = yup.object({
  text: yup
    .string()
    .required("Input cannot be empty.")
    .min(3, "Minimum of 3 characters")
    .test("is-numeric", "No integer values in the input", (value) => {
      return isNaN(Number(value));
    }),
});

const initialValues: InitialType = {
  text: "",
};

export const useFormTodo = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: InitialType, { resetForm }: any) => {
    dispatch(addTodo(values.text));
    resetForm();
  };

  const formik = useFormik<InitialType>({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return formik;
};
