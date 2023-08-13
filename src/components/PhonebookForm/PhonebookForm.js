import { Formik } from 'formik';
import {
  FormButton,
  FormLabel,
  StyledField,
  StyledForm,
  ErrorStyled,
} from './PhonebookForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const phoneRegExp =
  /^(?:\+?\d{1,4}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('It is required field!')
    .matches(nameRegExp, 'Name is not valid'),
  number: Yup.string()
    .required('It is required field!')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'Too short')
    .max(10, 'Too long'),
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
      <StyledForm>
        <FormLabel htmlFor="name">Name</FormLabel>
        <StyledField
          id="name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorStyled name="name" component="div" />

        <FormLabel htmlFor="phone">Number</FormLabel>
        <StyledField
          id="phone"
          name="number"
          type="tel"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorStyled name="number" component="div" />
        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
    </Formik>
  </>
);
