import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormButton, FormLabel } from './PhonebookForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const Schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .required('required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'too short')
    .max(10, 'too long'),
});

export const PhonebookForm = ({ onAdd }) => (
  <>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={Schema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
        console.log(values);
      }}
    >
      <Form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Field
          id="name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="div" />

        <FormLabel htmlFor="phone">Number</FormLabel>
        <Field
          id="phone"
          name="number"
          type="tel"
          /* pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" */
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="div" />
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  </>
);
