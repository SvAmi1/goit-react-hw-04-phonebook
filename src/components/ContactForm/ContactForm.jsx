import { Formik } from "formik";
import * as Yup from 'yup';
import { Btn, Error, Input, Phonebook } from "./ContactForm.styled";
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string().matches(
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    'Wrong name format'
  ).min(2, 'Too Short!').required('Required'),
  number: Yup.string()
  .matches(
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    'Wrong number format'
  )
    .min(7, 'Not enough numbers!')
    .required('Required'),
  
});

export const ContactForm = ({ onAddContact}) => {
    
    return (
        <Formik

        initialValues={{ 
          name: "", 
          number: "" 
        }}

        validationSchema={schema}
        onSubmit={(values, actions) => {
          onAddContact({ id: nanoid(), ...values });
          actions.resetForm();
        }}
      >
        <Phonebook>
          <label>Name
          <Input name="name" type="text" />
          <Error component="div" name="name" />
          </label>
          <label>Number
          <Input name="number" type="tel" />
          <Error component="div" name="number" />
          </label>
          <Btn type="submit">Add number</Btn>
        </Phonebook>
      </Formik>
    )
}