import React, { useState } from 'react'
import axios from 'axios';
import { Box, Button,  TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Label, Send } from '@mui/icons-material';
import ListEvents from './ListEvents';
import ListMonthlyStats from './ListMonthlyStats';
import Login from './Login'

const MonthlyStats = (props) => {
  

  
    const [statsDate, setstatsDate] = useState();
    const [atheleteName, setAthleteName] = useState()
    const [run, setRun] = useState();
    const [cycle, setCycle] = useState();
    const [swimming, setSwimming] = useState();
    const [workout, setWorkout] = useState();
    const [walk, setWalk] = useState();
    const [tempVar, setTempVar] = useState(0);
    const monthlyStats = {
        statsDate: statsDate,
        atheleteName: atheleteName,
        run: run,
        cycle: cycle,
        swimming: swimming,
        workout: workout,
        walk: walk
    };
  if (props.isAuth){
    const handleSubmit = () => {
        if(atheleteName.length){
            
          addStat();
            
        }
        
    }

    const addStat = async () => {
        //const { data } = await axios.post(`http://localhost:3000/users`, user);
        //const headers = {"Accept": "application/json", 'Content-Type': 'application/json'};
        axios.post(`https://pi-runners-app.azurewebsites.net/api/registrations?code=qTGCdzW5D_BYhkmDuoYEl3zBibe8guaKF4z4Vl_1tkbGAzFuw3Igjw==&entity=monthly_stats`, monthlyStats)
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
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker id="statsDate" label="Month Date" value={statsDate} onChange={e => setstatsDate(e)}/>
            </LocalizationProvider>

            <TextField id="atheleteName" label="Athlete Name" variant="standard" onChange={e => setAthleteName(e.target.value)}/>
            <TextField id="run" label="Run(km)" variant="standard" onChange={e => setRun(e.target.value)}/>
            <TextField id="cycle" label="Cycle(km)" variant="standard" onChange={e => setCycle(e.target.value)}/>
            <TextField id="swimming" label="swimming(mtrs)" variant="standard" onChange={e => setSwimming(e.target.value)}/>
            <TextField id="workout" label="Workout(Minutes)" variant="standard" onChange={e => setWorkout(e.target.value)}/>
            <TextField id="walk" label="Walk(km)" variant="standard" onChange={e => setWalk(e.target.value)}/>
            <Button variant="contained" endIcon={<Send />} onClick={handleSubmit}>
              Send
          </Button>
          
          </Box>
          Stats i.e. run:XXX,cycle:XXX,walk:XXX,swim:XXX
        </div>

        <br />
        <ListMonthlyStats key={tempVar}/>
    </div>
  )
}else{
  return(<Login isAuth={props.isAuth} setIsAuth={props.setIsAuth}/>)
}
}

export default MonthlyStats