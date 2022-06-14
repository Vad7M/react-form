import { Formik, Form } from 'formik';
import React from 'react'
import styled from 'styled-components'
import { useSchema, loginSchema} from '../Validations/UserValidations'


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

const ButtonLogin = styled.button`
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
    color: #573b8a;
	  transform: scale(.6);
`;

const LoginForma = styled.div`
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-170px);
    transition: .8s ease-in-out;
`;

const Input = styled.input`
    width: 75%;
    height: 30px;
    background: #e0dede;
    display: flex;
    justify-content: center;
    margin: 30px auto;
    padding: 20px;
    border: none;
    outline: none;
    border-radius: 5px;
`;

const Error = styled.p`
    position: absolute;
    color: #ee3a1f;
    font-size: 14px;
    margin-left: 60px;
    margin-top: -27px;
`;


export const LoginForm = ({ buttonState, handleButtonState, addLogin,}) => {


  return (
      <LoginForma
            style={ { transform: buttonState ? "translateY(-410px)" : " translateY(0px)" } }
          >
            <Formik
               initialValues={{
                email: '',
                password: '',
              }}
              validateOnBlur
              validationSchema={loginSchema}
              onSubmit={(values) => console.log(values)}
              onSubmit={(values) => addLogin(values)}
            >
              {({ values, errors, touched, handleChange, handleBlur,  handleSubmit, isSubmitting, dirty}) => (
                <Form>
                  <ButtonLogin onClick={handleButtonState} type={`submit`}> Login </ButtonLogin>
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
                  <Button
                    disabled={isSubmitting}
                    onSubmit={(values) => addLogin(values)}
                    type={`submit`}
                  >Login</Button>
                </Form>
              )}
            </Formik>
      </LoginForma>
  )
}
