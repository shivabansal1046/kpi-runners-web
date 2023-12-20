import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/dist';

const ListUsers = () => {

    const [users, setUsers] = useState([]);
    const getUsers = async () => {
		const { data } = await axios.get(`https://pi-runners-app.azurewebsites.net/api/registrations?code=qTGCdzW5D_BYhkmDuoYEl3zBibe8guaKF4z4Vl_1tkbGAzFuw3Igjw==&entity=users`);
        //const { data } = await axios.get(`http://localhost:3000/users`);
        
        setUsers(data);
    };
    useEffect(() => {
        getUsers();
    }, []);

    return(
    <div>
        
        <div className='center'>
            <h3 style={{alignContent: 'center' }}>UserList</h3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight: 'bold'}}>User Id</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>User Name</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Email</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Role</TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                {<TableBody>
                    {users.map(user => (<TableRow id={user.id}>
                        <TableCell >{user.id}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell><Link className="App-link" to={"/editUser/" + user.id}>Edit User</Link></TableCell>
                    </TableRow>)
                    )}
                </TableBody>}
            </Table>
        </div>
    </div>
)};

export default ListUsers