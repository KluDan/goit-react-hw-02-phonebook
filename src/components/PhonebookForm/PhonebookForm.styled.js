import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
`;
export const StyledField = styled(Field)`
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
`;

export const ErrorStyled = styled(ErrorMessage)`
color: red;
margin-top: 2px;
margin-bottom: 5px;
`;
export const FormLabel = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
  margin-top: 10px;
  display: block;
`;
