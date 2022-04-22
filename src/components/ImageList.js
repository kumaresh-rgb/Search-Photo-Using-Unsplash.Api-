import React from 'react'
import ImageList from '@mui/material/ImageList';

const ImageListt=(props)=>{

const images =props.images.map(({urls,id,description})=>{
    return <img alt={description} key={id} src={urls.regular}></img>

});

return(
    <div className="list " >
        
        <ImageList>
        {images}
        </ImageList>
    
    <div className="n">
    
    </div>
    </div>
    
    )


}
export default ImageListt;