import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm =({onInputChange,onSubmit})=>{
    return (
        <div>
            <p className='center f3' >{'Give it a try'} </p>
            <div className='center '>
                <div className='center patt pa4 br3 shadow-5 form' >
                <input onChange={onInputChange} className='f4 pa2 w-70 center' type='text'></input>
                <button onClick={onSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple ' >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm