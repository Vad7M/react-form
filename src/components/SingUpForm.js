import React from 'react';
import styled from 'styled-components';
import { Form, Formik, } from 'formik';
import { useSchema } from '../Validations/UserValidations';





const SignUpForm = styled.div`
    position: relative;
    width:100%;
    height: 100%;
`;

const Input = styled.input`
    width: 75%;
    height: 30px;
    background: #e0dede;
    display: flex;
    justify-content: center;
    margin: 20px auto;
    padding: 20px;
    border: none;
    outline: none;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 70%;
    height: 50px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;

    &:hover{
      background: #6d44b8;
    }
`;

const ButtonSignUp = styled.button`
    background: transparent;
    outline: none;   
    border: none;
    color: #fff;
    font-size: 2.3em;
    display: flex;
    justify-content: center;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
    margin: 60px auto;
`;

const Error = styled.p`
    position: absolute;
    color: #ee3a1f;
    font-size: 14px;
    margin-left: 60px;
    margin-top: -21px;
`;


export const SingUpForm = ({ buttonState,  addUser }) => {


  return (
    <SignUpForm>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        validationSchema={useSchema}
        onSubmit={(values) => addUser(values)}
        onSubmit={values => console.log(values)}
        useSchema={useSchema}
        
      >
        {({ values, errors, touched, handleChange, handleBlur,  handleSubmit, isSubmitting, dirty}) => (
          <Form>
            <ButtonSignUp
              style={ { transform: buttonState ? "scale(.6)" : " scale(1)" } }
              type={`submit`}
            >
            Sign Up
            </ButtonSignUp>
            <Input
              type={`text`}
              placeholder="User name"
              name={`name`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && <Error>{errors.name}</Error>}
            <Input
              type={`text`}
              placeholder="Email"
              name={`email`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            { touched.email && errors.email && <Error>{errors.email}</Error>}
            <Input
              type={`password`}
              placeholder="Password"
              name={`password`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            { touched.password && errors.password && <Error>{errors.password}</Error>}
            <Input
              type={`password`}
              placeholder="Confirm Password"
              name={`confirmPassword`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            { touched.confirmPassword && errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
            <Button
              disabled={isSubmitting} 
              onClick={handleSubmit}
              onSubmit={handleSubmit}
              type={`submit`}
            > Sign Up </Button>
        </Form>
        )}
      </Formik>
    </SignUpForm>
  )
}
