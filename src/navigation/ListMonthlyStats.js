import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom/dist';


const ListMonthlyStats = () => {

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-${month}-${date}`;
      }

    const [stats, setStats] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getStats = async () => {
		const { data } = await axios.get(`https://pi-runners-app.azurewebsites.net/api/registrations?code=qTGCdzW5D_BYhkmDuoYEl3zBibe8guaKF4z4Vl_1tkbGAzFuw3Igjw==&entity=monthly_stats`);
        setIsLoading(false)
        //const { data } = await axios.get(`http://localhost:3000/users`);
        const dt = new Date()
        console.log(dt.getDate()-1)
        const sortData = [...data].filter((a) => Date.parse(a.statsDate) > dt.getTime()-(30*24*3600*1000)).sort((a, b) =>
        //const sortData = [...data].sort((a, b) =>
        a.statsDate > b.statsDate ? 1 : -1,
        );
        setStats(sortData);
    };
    useEffect(() => {
        getStats();
    }, []);

    return(
    <div>
        {isLoading && <CircularProgress />}
        <div>
            <h3 style={{alignContent: 'center' }}>Monthly Stats</h3>
            <div className='table-div'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight: 'bold'}}>Month Date</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Athlete Name</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>stats</TableCell>
                    </TableRow>
                </TableHead>
                {<TableBody>
                    {stats.map(stats => (<TableRow id={stats.statsDate}>
                        <TableCell >{stats.statsDate}</TableCell>
                        <TableCell >{stats.atheleteName}</TableCell>
                        <TableCell>{stats.stats}</TableCell>
                    </TableRow>)
                    )}
                </TableBody>}
            </Table>
            </div>
        </div>
    </div>

)}

export default ListMonthlyStats