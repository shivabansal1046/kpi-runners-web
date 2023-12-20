import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ImageListItem from '@mui/material/ImageListItem';

import '../App.css';
function coresel(props)
{
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

    return (
         <div className='column'>
            
        <Carousel >
            {
                itemData.map( (item, i) => <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem> )
            }
        </Carousel>
        </div>
    )
}



export default coresel