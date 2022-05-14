import React from 'react';
import './select.css'


const SelectWhatDetect =({swt})=>{
    return (
        <div className='center ma' >
            <select onChange={swt} className='shadow-5' >
                <option value={null}>please setect what to detect</option>
                <option value={'FDM'} >face detect</option>
                <option value={'CM'}>celebrity</option>
                <option value={'GM'}>in general</option>
                <option value={'FM'}>food</option>
                <option value={'NSFW'}>NSFW</option>
            </select>
        </div>
    )
} 


export default SelectWhatDetect