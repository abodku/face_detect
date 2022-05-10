import React from 'react';
import './FaceRecognition.css'


const FaceRecognition =({imageUrl,box})=>{
    return (
        <div className='center ma' >
            <div className='absolute mt2' >
                <img id='inputImage' src={imageUrl} alt='her we"ll show the images' width='500px' height='auto' ></img>
               <div className='boxStyle' style={{top: box.topRow,right: box.rightCol,bottom: box.bottomRow,left: box.leftCol}} > </div>
            </div>
        </div>
    )
} 


export default FaceRecognition