import React from 'react'
import { Link } from 'react-router-dom/dist';
import { Table, TableBody, TableCell, TableHead, TableRow, ImageList, ImageListItem } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import '../App.css';
const Gallery = () => {
  return (
    
   
                      
    <div className='column'>
      
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, p:2, width: '100ch', justifyContent: 'center' },
      }}
      noValidate
      autoComplete="off"
    >
      <ImageList sx={{ width: 1500, height: 400}} cols={2} variant="woven" rowHeight={164}>
        
          <ImageListItem >
            <img src ="https://drive.google.com/uc?export=view&id=1ggdMSftqfay07xjpLG44zax-AJhHfes1" height="100" className="home-images" alt=""></img>
            <Link to="https://photos.app.goo.gl/6E4Q846AvFDZq1Gt6"><h3>Independence Run</h3></Link>
          </ImageListItem>
          <ImageListItem sx={{width:300}}>
            <img src ="https://drive.google.com/uc?export=view&id=1lWlvpy5IkwpYj3QU-jNaAJKxi8WCf8Nc"   className="home-images" alt="AFMC"/> 
            <Link to="https://photos.app.goo.gl/GNqbDxpDqAm1Y1DF8"><h3>AFMC 6 Aug</h3></Link>
          </ImageListItem>
     
      </ImageList>
    </Box>
</div>



  )
}

export default Gallery