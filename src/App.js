import React,{ Component} from 'react';
import './App.css';
import Navigation from './component/navigation/Navigation';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import Rank from './component/Rank/Rank';
// import Particless from './component/particles/Particles.js';
import FaceRecognition from './component/FaceRecognition/FaceRecognition';
import Register from './component/register/register';
import Signin from './component/signin/signin';





 const initialstate={
  input:'',
  imageUrl:'',
  box:{},
  route:'Signin',
  isSignIn:false,
  user:{
    id:'',
    name:'',
    password:'',
    email:'',
    entries:0,
    joined:''
  }
};

class App extends Component {
constructor(){
  super()
  this.state=initialstate;
}

loadUser=(data)=>{
  this.setState({user:{
    id:data.id,
    name:data.name,
    email:data.email,
    entries:data.entries,
    joined:data.joined
  }})
}

onInputChange=(event)=>{
  this.setState({input:event.target.value})
}

onSubmit=()=>{
  this.setState({imageUrl:this.state.input})
    fetch('https://stark-crag-77731.herokuapp.com/imageURL',{
              method:'post',
              headers:{
                  'Content-type': 'application/json'
              },
              body:JSON.stringify({
                  input:this.state.input
              })
          })
          .then(response=>response.json())
          .then(response=>{
            if (response){
              fetch('https://stark-crag-77731.herokuapp.com/image',{
                  method:'put',
                  headers:{
                      'Content-type': 'application/json'
                  },
                  body:JSON.stringify({
                      id:this.state.user.id
                  })
              })
                  .then(res=>res.json())
                  .then(data=>{
                      this.setState(Object.assign(this.state.user, {entries:data}))
                  })
                  .catch(console.log)
            }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(e=>console.log(e))

    console.log(this.state.user.entries)
}


calculateFaceLocation=(data)=>{
  const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box
  const image=document.getElementById('inputImage');
  const width=image.width;
  const height=image.height;
  return {
    leftCol: clarifaiFace.left_col*width,
    topRow: clarifaiFace.top_row*height,
    rightCol:width-(clarifaiFace.right_col*width),
    bottomRow:height-(clarifaiFace.bottom_row*height)
  }
}

displayFaceBox=(box)=>{
  this.setState({box:box})
}

onRouteChange=(route)=>{
  if (route==='Home'){
    this.setState({isSignIn:true})
  }else{
    this.setState(initialstate)
  }

  this.setState({route:route})
}
render(){
  return(
    <div>
      {/* <Particless className='party' /> */}
      <Navigation isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange} />

      {this.state.route==='Home'?
      <div>
        <Rank name={this.state.user.name} entries={this.state.user.entries} />
        <ImageLinkForm onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
      :
      (
        this.state.route==='Signin'?
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          :
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
      )
      }
    </div>
  )
}
}

export default App;
