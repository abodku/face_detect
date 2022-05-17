import React from 'react';
import './FaceRecognition.css'


const ImageRecognitionNSFW =({imageUrl,box})=>{
    return (
        <div className='center ma flex' key={'generalDiv'}>
            <div key={'divImage'} className=' mt2 w-60' >
                <img id='inputImage' src={imageUrl} alt="here i'll show the image" width='500px' height='auto' ></img>
            </div>
            {box.length>0?
                <div className=" w-40 mt2">
                    {box[0].nsfw===0?
                        <div className='green' style={{width:box[0].sfw}}>
                            <p>SFW for {box[0].sfw}</p>
                        </div>
                    :
                        <div>
                            <div className="w3-container red" style={{width:box[0].nsfw}}>
                                <p>NSFW for {box[0].nsfw}</p>
                            </div>
                            <div className='green' style={{width:box[0].sfw}}>
                                <p>SFW for {box[0].sfw}</p>
                            </div>
                        </div>
                    }
                </div>
            :
                    <p className='mt2 w-40' >i didn't recognize anything yet :(</p>
            }
        </div>
    )
} 


export default ImageRecognitionNSFW