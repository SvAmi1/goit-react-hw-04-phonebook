import styled from 'styled-components';
import { Field, Form, ErrorMessage } from "formik";

export const Phonebook = styled(Form)`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
border: 4px solid black;
border-radius: 5px;
padding: 10px;
`;

export const Input = styled(Field)`
display: flex;
flex-direction: column;
margin-bottom: 5px;
`;

export const Error = styled(ErrorMessage)`
color: red;
`;

export const Btn = styled.button`

  background: whitesmoke;
  border: 2px solid black;
  border-radius: 4px;
  
&:hover {
  background: #f2f06d;
  scale: 1.05;
}`;