import React from 'react';
import './imageList.css'
import ImageCard from './ImageCard'


const ImageList = (props) => {
    const imageArr = props.images.map(item => {
        return (<ImageCard key={item.id} image={item}/>)
    })

    return(
        <div className="image-list">
            {imageArr}
        </div>
    )
}

export default ImageList