import React from 'react'
import shiva from '../assets/images/admins/bansal_shiva.jfif'
import sachin from '../assets/images/admins/Sachin.jpg'
import reshma from '../assets/images/admins/Reshma.jpg'
import saggy from '../assets/images/admins/Saggy.jpg'
import yatin from '../assets/images/admins/yatin.jpg'
import mannu from '../assets/images/admins/mannu.jpg'
import { Table, TableBody, TableCell, TableHead } from '@mui/material'
import '../App.css';
const Stories = () => {
  return (
    <>
    <h1>About</h1>
    <div className='centerWithoutBorderAdmin'>
            <Table className='Table-Center-admins'>
                <TableHead>
                </TableHead>
                <TableBody>
                    
                        <TableCell ><b>Shiva Bansal</b> is passionate runner aspiring to become professional triathlete.I transformed my self from 93kg to 68kg and from being diabetic (HbA1c 9.6) to non-diabetic (HbA1c 5.5).</TableCell>
                        <TableCell><img src={shiva} className="additional-logo" alt="logo" /></TableCell>
                  
                        <TableCell ><b>Yatin Ghanwat</b> is an entrepreneur and philanthropist. Yatin has been guiding light of the group since begining. He is very passionate triathlete and great motivator.</TableCell>
                        <TableCell><img src={yatin} className="additional-logo" alt="logo" /></TableCell>
                    
                </TableBody>
                <TableBody>               
                        <TableCell ><b>Sachin Goel</b> Started running with motive to reduce weight though realized that Strength Training, Running and clean eating is the mantra for weight loss (myself reduced 78Kg to 62KG). Currently, I am trying to balance the running passion & motivate other runners along with family commitments.</TableCell>
                        <TableCell><img src={sachin} className="additional-logo" alt="logo" /></TableCell>
                              
                        <TableCell ><b>Reshma a proud working mother,</b> My running Journey started to get some relief from severe migraine conditions in 2021. But it got converted to a hobby in 2022. I did my first HM in December 2022 and first FM in March 2023.</TableCell>
                        <TableCell><img src={reshma} className="additional-logo" alt="logo" /></TableCell>
                </TableBody>
                <TableBody>               
                        <TableCell ><b>Sagar Magdum</b>Running since July 2022. In last one year I have reached from running 1KM to Half Marathon (21KM). Aspiring for full Marathon Runner by end of 2024.I occasionally do cycling and swimming.</TableCell>
                        <TableCell><img src={saggy} className="additional-logo" alt="logo" /></TableCell>
                              
                        <TableCell ><b>Manmohan Namdeo</b> started running during lockdown. I never thought to run more then 2-3 km.I Love trekking and badminton. Being part of PIrunners group, I gained a lot personally and professionally.</TableCell>
                        <TableCell><img src={mannu} className="additional-logo" alt="logo" /></TableCell>
                </TableBody>
            </Table>
        </div>
    
    </>
  )
}

export default Stories