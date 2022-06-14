import React from 'react'
import { SingUpForm  } from "../components/SingUpForm";
import { LoginForm  } from "../components/LoginForm";


const UserForm = ({ setButtonState, buttonState, addUser, addLogin, }) => {


const handleButtonState = () => {
    setButtonState(!buttonState);
  }

  return (
    <div>
         <SingUpForm 
            buttonState={buttonState}
            addUser={addUser}
          />
          <LoginForm 
            handleButtonState={handleButtonState}
            buttonState={buttonState}
            addLogin={addLogin}
          />
    </div>
  )
}

export default UserForm;
