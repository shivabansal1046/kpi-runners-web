import React, { useState } from "react";
import { Box, Button, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setIsAuth = props.setIsAuth;

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = () => {
    if (validateForm()){

        setIsAuth(true);
        alert("successfull signed in !!")
    }else{
        alert("Enter valid username and password !!")
    }

    
    
    }
  
  return (
    <div>
        
        <div className='centerWithoutBorder'>

        <Box component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField id="email" label="User Email" variant="outlined" onChange={e => setEmail(e.target.value)}/>
            <TextField id="password" type="password" label="Password" variant="outlined" onChange={e => setPassword(e.target.value)} />
            
            <Button variant="contained" endIcon={<Send />} onClick={handleSubmit}>
                Send
            </Button>
        </Box>
        
      </div>
      </div>
  );
}