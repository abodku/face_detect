import React from 'react';
import './FaceRecognition.css'


const ImageRecognitionGM =({imageUrl,box})=>{
    return (
        <div className='center ma flex' key={'generalDiv'}>
            <div key={'divImage'} className=' mt2 w-60' >
                <img id='inputImage' src={imageUrl} alt="here i'll show the image" width='500px' height='auto' ></img>
            </div>
            {box.length>0?
                <table key={'table'} className='w-40 mt2' >
                    <thead key={'thead'} >
                        <tr key={'tr1'} >
                            <th key={'th1'}>what did i recognize</th>
                            <th key={'th2'}>am sure for</th>
                        </tr>
                    </thead>
                    <tbody key={'tbody'}>
                        {
                            box.map((user,i)=>{
                                return(
                                    <tr key={`tr2${i}`} >
                                        <td key={`td1${i}`}>{box[i].name}</td>
                                        <td key={`td2${i}`}>{box[i].valuePer100}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    {box.length>0?
                        <tfoot key={'tfoot'}>
                            <tr key={'tr3'} >
                                <td key={'p'} >hope u enjoyed, and i was helpful</td>
                                <td key={'pp'}>and right for sure :)</td>
                            </tr>
                        </tfoot>
                    :
                    <tfoot key={'tfoot'}>
                            <tr key={'tr3'} >
                            </tr>
                        </tfoot>
                    }
                </table>
            :
                    <p className='mt2 w-40' >i didn't recognize anything yet :(</p>
            }
        </div>
    )
} 


export default ImageRecognitionGM