import React from 'react';
import './navigation.css';
import lg from './tttt192.png'

const Navigation =({onRouteChange,isSignIn})=>{
    if (isSignIn===true){
        return(
        <nav >
           <img alt='1' className='bcgd br2 shadow-2' src={lg} />
           <p onClick={()=>onRouteChange('Signin')} className='link dim underline pa3 pointer'>Sign Out!</p>
        </nav>
        )
    }else{
        return(
        <nav >
           <img alt='1' className='bcgd br2 shadow-2' src={lg} />
           <p onClick={()=>onRouteChange('Register')} className='link dim underline pa3 pointer'>Register</p>
           <p onClick={()=>onRouteChange('Signin')} className='link dim underline pa3 pointer'>Signin</p>

        </nav>

        )
    }

    
}

export default Navigation