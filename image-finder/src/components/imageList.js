import React from 'react';

const ImageList = (props) => {
    const imageArr = props.images.map(item => {
        return (<img src={item.urls.regular}/>)
    })
    console.log(imageArr)
    return(
        <div>
            {imageArr}
        </div>
    )
}

export default ImageList