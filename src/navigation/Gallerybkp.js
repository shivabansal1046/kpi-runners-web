import React from 'react'
import { Link } from 'react-router-dom/dist';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
const Gallery = () => {
  return (
    
    <div className='column'>
      <Table>
        <TableBody>
                      <TableRow>
                          <TableCell align="center">
                            <Card sx={{ maxWidth: 400, justifyContent:'center'}}>
                            
                              <CardContent>
                                <img src ="https://drive.google.com/uc?export=view&id=1ggdMSftqfay07xjpLG44zax-AJhHfes1" width="400" className="home-images" alt=""></img>
                              </CardContent>
                              <CardActions sx={{justifyContent:'center'}}>
                                <Link to="https://photos.app.goo.gl/6E4Q846AvFDZq1Gt6"><h3>Independence Run</h3></Link>
                              </CardActions>
                              
                            </Card>                              
                          </TableCell>

                          <TableCell align="center">
                          <Card sx={{ maxWidth: 400, justifyContent:'center'}}>
                              <CardContent sx={{alignItems:'center'}}>
                                <img src ="https://drive.google.com/uc?export=view&id=1lWlvpy5IkwpYj3QU-jNaAJKxi8WCf8Nc"  className="home-images" alt="AFMC"/> 
                              </CardContent>
                              <CardActions sx={{justifyContent:'center'}}>
                                <Link to="https://photos.app.goo.gl/GNqbDxpDqAm1Y1DF8"><h3>AFMC 6 Aug</h3></Link>
                              </CardActions>
                          </Card>
                          </TableCell>
                      </TableRow>
                      
        </TableBody>
      </Table>
      
    </div>



  )
}

export default Gallery