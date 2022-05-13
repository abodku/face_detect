import React from 'react';
import './FaceRecognition.css'


const FaceRecognitionFDM =({imageUrl,box})=>{
    return (
        <div className='center ma' >
            <div className='absolute mt2' >
                <img id='inputImage' src={imageUrl} alt="here i'll show the image" width='500px' height='auto' ></img>
                {
                    box.map((user,i)=>{
                        return(
                             <div key={'div1${i}'} className='boxStyle' style={{top: box[i].topRow,right: box[i].rightCol,bottom: box[i].bottomRow,left: box[i].leftCol}} ></div>
                        )
                    })
                }
            </div>
        </div>
    )
} 


export default FaceRecognitionFDM