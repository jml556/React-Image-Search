import React from 'react';

const ImageList = (props) => {
    const imageArr = props.images.map(item => {
        return (<img key={item.id}  alt={imageArr.description} src={item.urls.regular}/>)
    })

    return(
        <div>
            {imageArr}
        </div>
    )
}

export default ImageList