import React from 'react';
import './rank.css'

const Rank =({name,entries,box})=>{
    return (
        <div>
            {box.length>0?
                <div >
                    <div className=' center white f3' >
                        {/* {`hello ${name}`} */}
                        {`did u impressed, or do u want to try another module?, if that so,`}
                    </div>
                    <div className='f4 center white' >
                        {/* {`your current entries is ${entries}`} */}
                        {`please select what do u want me to detect ...`}
                    </div>
                </div>
            :
                <div >
                    <div className=' center white f3' >
                        {/* {`hello ${name}`} */}
                        {`Hello, i'll impress u, just watch,`}
                    </div>
                    <div className='f4 center white' >
                        {/* {`your current entries is ${entries}`} */}
                        {`please select what do u want me to detect ...`}
                    </div>
                </div>
        
            }
        </div>
    )
}

export default Rank