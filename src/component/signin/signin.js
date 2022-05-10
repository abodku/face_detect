import React, { Component } from 'react';


class Signin extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    onEmailChange=(event)=>{
        this.setState({email:event.target.value.toLowerCase()})
    }

    onPasswordChange=(event)=>{
        this.setState({password:event.target.value})
    }

    // onSubmit=()=>{
    //     fetch('http://localhost:3001/signin',{
    //         method:'post',
    //         headers:{
    //             'Content-type': 'application/json'
    //         },
    //         body:JSON.stringify({
    //             email:this.state.email,
    //             password:this.state.password
    //         })
    //     })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             if(data==='true'){
    //                 this.props.onRouteChange('Home');
    //             }
    //         })
    // }

    onSubmit=()=>{
        fetch('https://stark-crag-77731.herokuapp.com/signin',{
            method:'post',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })
            .then(res=>res.json())
            .then(user=>{
                if(user){
                    this.props.loadUser(user);
                    this.props.onRouteChange('Home');
                }
            })
            .catch(console.log)
    }

    render(){
        const {onRouteChange}=this.props;
        return (
            <article className="br3 shadow-5 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <div >
            <main  className="pa4 black-80 center">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email or name</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            autoComplete='username'
                            onChange={this.onEmailChange}
                            id="email-address"
                        ></input>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            autoComplete='current-password'
                            name="password"  
                            onChange={this.onPasswordChange}
                            id="password"
                        ></input>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                        onClick={this.onSubmit} 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in"
                    ></input>
                    </div>
                    <div className="lh-copy mt3">
                    <a onClick={()=>onRouteChange('Register')} href="#0" className="f6 link dim black db">Register</a>
    </div>
  </form>
</main>
        </div>
        </article>
    )
}
}

export default Signin