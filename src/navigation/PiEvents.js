import React from 'react'
import { Link } from "react-router-dom";
import {Button} from '@mui/material';
import { Send } from '@mui/icons-material';
const eventTitle = <h1>KPI Independence Day Run</h1>
const eventDesc = <ol>
<li> Family relay run of 15km. Entire family will run total of 25 rounds=15km of A Phase circle. </li>
<li>All family members can run together, their total run should complete 25 rounds of A phase circle.</li>
<li>Event will be from 5:45 AM to 7:30 AM.</li>
<li>Participants will be provided on ground support and nutrition needed for run.</li>
<li>Family will get one finisher medal.</li>
<li>Participation fee will be from 100 per family of 3 members 25rs additional for members more than 3. **Gpay on 9049150162.**</li>
<li> Families are advised to wear t-shirts depicting Indian flag like each member can wear Saffron, white or Green color t-shirt.</li>

</ol>

//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1A1L9V6JiqKbACQ9Aacuc0wWt1DYI49k-Awu6o6wJ6bXiOw/viewform?embedded=true" width="640" height="1461" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
const PiEvents = () => {
  return (
    <box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        
        <Link to="https://forms.gle/TdLQTTDXHXXRKuBo7" className="nav-item">
        <Button variant="contained" endIcon={<Send />}> Register </Button>
      </Link> 

    </box>
  )
}

  export default PiEvents