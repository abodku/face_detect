import React from 'react';


const Rank =({name,entries})=>{
    return (
        <div >
            <div className=' center white f3' >
                {`hello ${name}`}
            </div>
            <div className='f2 center white' >
                {`your current entries is ${entries}`}
            </div>
        </div>
    )
}

export default Rank