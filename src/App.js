import React, { useEffect } from "react";
import styled from "styled-components";
import './App.css'
import axios from 'axios'
import UserForm from "./pages/UserForm";
import MyProfile from "./pages/MyProfile";


const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
`;

const Form = styled.div`
    width: 380px;
    height: 600px;
    background: red;
    overflow: hidden;
    background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
`;


function App() {
  const [ buttonState, setButtonState ] = React.useState(false);
  const [ users, setUsers] = React.useState([]);
  const [ login, setLogin] = React.useState([]);

  
  const addUser = (values) => {
    try{
      axios.post('https://62150e00cdb9d09717abdcb6.mockapi.io/user', values);
      setUsers((prev) => [...prev, values]);
    } catch (error) {
      console.error();
    }
  }

  const addLogin = (values) => {
    axios.post('https://62150e00cdb9d09717abdcb6.mockapi.io/login', values);
    setLogin(prev => [...prev, values]);
  }

 


 

  

  return (
    <>
      <MyProfile />
        <Wrapper>
         <Form>
           <UserForm 
              buttonState={buttonState}
              addUser={addUser}
              setButtonState={setButtonState}
              addLogin={addLogin}
           /> 
          </Form>
        </Wrapper>
    </>
     
  );
}

export default App;
