import React from 'react'
import ListUsers from './ListUsers'
import shiva from '../assets/images/bansal_shiva.jfif'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import '../App.css';
const About = () => {
  return (
    <>
    <h1>About</h1>
    <div>
            <Table className='Table-Center'>
                <TableHead>
                </TableHead>
                <TableBody>
                    
                        <TableCell >Shiva Bansal</TableCell>
                        <TableCell><img src={shiva} className="additional-logo" alt="logo" /></TableCell>
                    
                </TableBody>
            </Table>
        </div>
    <ListUsers />
    </>
  )
}

export default About