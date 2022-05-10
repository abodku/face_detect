import React, { Component } from 'react';


class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            name:''
        }
    }

    onEmailChange=(event)=>{
        this.setState({email:event.target.value.toLowerCase()})
    }

    onPasswordChange=(event)=>{
        this.setState({password:event.target.value})
    }

    onNameChange=(event)=>{
        this.setState({name:event.target.value})
    }

    onSubmit=()=>{
        fetch('https://stark-crag-77731.herokuapp.com/register',{
            method:'post',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                name:this.state.name
            })
        })
            .then(res=>res.json())
            .then(data=>{
                if(data){
                    this.props.loadUser(data)
                    this.props.onRouteChange('Signin')
                }
            })
    }


    render(){
        return (
            <article className="br3 shadow-5 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <div >
            <main className="pa4 black-80 center">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}
                            autoComplete='username'
                        ></input>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.onPasswordChange}
                            autoComplete='password'
                        ></input>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Name</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="password"  
                            id="password"
                            onChange={this.onNameChange}
                            autoComplete='name'
                        ></input>
                    </div>
                    </fieldset>
                    <div className="">
                    <input onClick={this.onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"></input>
                    </div>
                    <div className="lh-copy mt3">
                    
    </div>
  </form>
</main>
        </div>
        </article>
    )
}
}

export default Register