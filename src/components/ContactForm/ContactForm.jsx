import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import InputMask from "react-input-mask";

export default function ContactForm({ onAdd }) {
  const UserSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(3, "Minimum 3 letters")
      .max(50, "Maximum 50 letters")
      .required("This field is required"),
    phone: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "The phone number must be in format XXX-XX-XX"
      )
      .required("This field is required"),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.phone,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        phone: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.Form}>
        <div className={css.div}>
          <label>Name</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="span" />
        </div>
        <div className={css.div}>
          <label>Number</label>
          <Field name="phone">
            {({ field }) => (
              <InputMask {...field} mask="999-99-99" placeholder="XXX-XX-XX" />
            )}
          </Field>
          <ErrorMessage name="phone" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
