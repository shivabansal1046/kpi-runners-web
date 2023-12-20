import React, { useState } from 'react'
import axios from 'axios';
import { Box, Button,  TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Send } from '@mui/icons-material';
import ListEvents from './ListEvents';

const Events = () => {
  const [eventName, setEventName] = useState();
  const [eventDate, setEventDate] = useState()
  const [regLink, setRegLink] = useState();
  const [tempVar, setTempVar] = useState(0);
  const user = {
      eventName: eventName,
      eventDate: eventDate,
      regLink: regLink
  };

  const handleSubmit = () => {
      if(eventName.length){
          
          addEvent();
          
      }
      
  }

  const addEvent = async () => {
      //const { data } = await axios.post(`http://localhost:3000/users`, user);
      //const headers = {"Accept": "application/json", 'Content-Type': 'application/json'};
      axios.post(`https://pi-runners-app.azurewebsites.net/api/registrations?code=qTGCdzW5D_BYhkmDuoYEl3zBibe8guaKF4z4Vl_1tkbGAzFuw3Igjw==&entity=events`, user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      alert("Event created successfully...")
      setTempVar(tempVar+1)
  };
  
return (
  <div>
      
      <div>

          <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="eventName" label="Event Name" variant="standard" onChange={e => setEventName(e.target.value)}/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker id="eventDate" label="Event Date" value={eventDate} onChange={e => setEventDate(e)}/>
          </LocalizationProvider>
          <TextField id="regLink" label="Registration Link" variant="standard" onChange={e => setRegLink(e.target.value)}/>
          <Button variant="contained" endIcon={<Send />} onClick={handleSubmit}>
            Send
        </Button>
        </Box>
      </div>

      <br />
      <ListEvents key={tempVar}/>
  </div>
)
}

export default Events