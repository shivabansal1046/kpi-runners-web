import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';
import { Link } from 'react-router-dom/dist';

const ListUsers = () => {

    const [users, setUsers] = useState([]);
    const getUsers = async () => {
		const { data } = await axios.get(`https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==&name=shiva`);
        //const { data } = await axios.get(`http://localhost:3000/users`);
        console.log(data)
        setUsers(data['users']);
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