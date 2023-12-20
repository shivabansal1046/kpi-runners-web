import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import '../App.css';
const HomePlay = () => {


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
          <ImageList sx={{ width: 1500, height: 450}} cols={3} variant="woven" rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
    </div>
    
    
  );
}

const itemData = [
  {
    img: 'https://drive.google.com/uc?export=view&id=1lWlvpy5IkwpYj3QU-jNaAJKxi8WCf8Nc',
    title: 'AFMC',
  },
  {
   
    img: 'https://drive.google.com/uc?export=view&id=19eK7fYBBsanPSl8YM1f8l4K9G95w4Kb0',
    title: 'cricket',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1tTOtRZjfg8TJCmIPyEtxiMQQ4jPO5KZz',
    title: 'FM',
  },
  {
  
    img: 'https://drive.google.com/uc?export=view&id=1zhjDvojBKMf3O5jFrqMh7ISn04XkmtOy',
    title: 'Runner family',
  },
  {
    
    img: 'https://drive.google.com/uc?export=view&id=1Lb35wtNdkPn_e8NmyGbeNUA0a_Ujkofm',
    title: 'Hats',
  },
  
];


export default HomePlay