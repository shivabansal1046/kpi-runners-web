import React, { useCallback, useState } from 'react'
import axios from 'axios';
import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

const Register = () => {

    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [role, setRole] = useState();

    const user = {
        id: userId,
        username: userName,
        email: email,
        role: role
    };

    const handleSubmit = () => {
        if(userName.length && email.length){
            addUsers();
            
        }
        window.location.replace("/");
    }

    const addUsers = async () => {
        //const { data } = await axios.post(`http://localhost:3000/users`, user);
        const { data } = await axios.post(`http://localhost:5000/addUser`, user);
        alert("user created successfully..."+data)
    };
    
  return (
    <div>
        
        <div className='centerWithoutBorder'>
        <h2 style={{alignContent: 'center' }}>AddUser</h2>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="userId" label="User Id" variant="outlined" onChange={e => setUserId(e.target.value)}/>
      <TextField id="userName" label="User Name" variant="outlined" onChange={e => setUserName(e.target.value)}/>
      <TextField id="email" label="User Email" variant="outlined" onChange={e => setEmail(e.target.value)}/>
      {/* <TextField id="role" label="Role" variant="outlined" onChange={e => setRole(e.target.value)}/> */}
      <InputLabel id="role">Select Role</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="role"
            label="Age"
            onChange={e => setRole(e.target.value)}
        >
            <MenuItem value="USER">USER</MenuItem>
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="READ_ONLY">READ ONLY</MenuItem>
        </Select>
      <Button variant="contained" endIcon={<Send />} onClick={handleSubmit}>
        Send
    </Button>
    </Box>

    
        </div>

        {/* <Link className="App-link" to="/">Go to Home</Link> */}
        <br />
    </div>
  )
}

export default Register