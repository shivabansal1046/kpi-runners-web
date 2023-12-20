import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom/dist';


const ListEvents = () => {

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-${month}-${date}`;
      }

    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getEvents = async () => {
		const { data } = await axios.get(`https://pi-runners-app.azurewebsites.net/api/registrations?code=qTGCdzW5D_BYhkmDuoYEl3zBibe8guaKF4z4Vl_1tkbGAzFuw3Igjw==&entity=events`);
        setIsLoading(false)
        //const { data } = await axios.get(`http://localhost:3000/users`);
        
        const sortData = [...data].filter((a) => Date.parse(a.eventDate) > Date.now()).sort((a, b) =>
        a.eventDate > b.eventDate ? 1 : -1,
        );
        setEvents(sortData);
    };
    useEffect(() => {
        getEvents();
    }, []);

    return(
    <div>
        {isLoading && <CircularProgress />}
        <div>
            <h3 style={{alignContent: 'center' }}>Events</h3>
            <div className='table-div'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight: 'bold'}}>Event Name</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Event Date</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Registation Link</TableCell>
                    </TableRow>
                </TableHead>
                {<TableBody>
                    {events.map(event => (<TableRow id={event.eventName}>
                        <TableCell >{event.eventName}</TableCell>
                        <TableCell>{event.eventDate}</TableCell>
                        
                        <Link className="App-link" to={event.regLink}>Registration Link</Link>
                    </TableRow>)
                    )}
                </TableBody>}
            </Table>
            </div>
        </div>
    </div>

)}

export default ListEvents