import React from 'react';
import './FaceRecognition.css'


const FaceRecognitionCM =({imageUrl,box})=>{
    return (
        <div className='center ma flex' >
            <div className='w-60 mt2' >
                <div className='absolute w-50 frcm' key={'ddd'}>
                    <img id='inputImage' src={imageUrl} alt="here i'll show the image" width='500px' height='auto' ></img>
                    {
                        box.map((user,i)=>{
                            return(
                                <div 
                                    key={`d${i}`} 
                                    className='boxStyle' 
                                    style={{top: box[i].topRow,right: box[i].rightCol,bottom: box[i].bottomRow,left: box[i].leftCol}}
                                >
                                    <p key={`n${i}`} className='name '>{box[i].person}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {box.length>0?
                <table key={'table'} className='w-50 mt2' >
                    <thead key={'thead'} >
                        <tr key={'tr1'} >
                            <th key={'th0'}>#</th>
                            <th key={'th1'}>who did i recognize</th>
                            <th key={'th2'}>am sure for</th>
                        </tr>
                    </thead>
                    <tbody key={'tbody'}>
                        {
                            box.map((user,i)=>{
                                return(
                                    <tr key={`tr2${i}`} >
                                        <td key={'td0'}>{box[i].person}</td>
                                        <td key={`td1${i}`}>{box[i].name}</td>
                                        <td key={`td2${i}`}>{box[i].valuePer100}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    {box.length>0?
                        <tfoot key={'tfoot'}>
                            <tr key={'tr4'}>
                                <td key={'a'}>Finally</td>
                                <td key={'aa'}>hope u enjoyed</td>
                                <td key={'aaa'}>and</td>
                            </tr>
                            <tr key={'tr3'} >
                                <td key={'p'} >i was</td>
                                <td key={'ppp'}>helpful and right</td>
                                <td key={'pp'}>for sure :)</td>
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


export default FaceRecognitionCM