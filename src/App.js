import React,{ Component} from 'react';
import './App.css';
import Navigation from './component/navigation/Navigation';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import Rank from './component/Rank/Rank';
// import Clarifai from 'clarifai'
// import Particless from './component/particles/Particles.js';
import FaceRecognitionFDM from './component/FaceRecognition/FaceRecognitionFDM';
import Register from './component/register/register';
import Signin from './component/signin/signin';
import SelectWhatDetect from './component/SelectWhatDetect/SelectWhatDetect';
import FaceRecognitionCM from './component/FaceRecognition/FaceRecognitionCM';
import ImageRecognitionGM from './component/FaceRecognition/ImageRecognitionGm';





 const initialstate={
  input:'',
  imageUrl:'',
  box:[],
  route:'Home',
  isSignIn:true,
  user:{
    id:'',
    name:'',
    password:'',
    email:'',
    entries:0,
    joined:''
  },
  swtd:''
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
  this.setState({input:event.target.value,box:[]})
}

onSubmitFDM=()=>{
  this.setState({imageUrl:this.state.input})
    fetch('https://stark-crag-77731.herokuapp.com/imageURLFDM',{
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
      this.displayFaceBox(this.calculateFaceLocationFDM(response))
    })
    .catch(e=>console.log(e))

    console.log(this.state.user.entries)
}


calculateFaceLocationFDM=(data)=>{
  const image=document.getElementById('inputImage');
  const width=image.width;
  const height=image.height;
  let ans=[];
  for (let i=0;i<data.outputs[0].data.regions.length;i++){
    let clarifaiFace=data.outputs[0].data.regions[i].region_info.bounding_box;
    let ans2={
      leftCol: clarifaiFace.left_col*width,
      topRow: clarifaiFace.top_row*height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row*height)
    }
    ans.push(ans2)
  }
  return ans
}


onSubmitCM=()=>{
  this.setState({imageUrl:this.state.input})
    fetch('https://stark-crag-77731.herokuapp.com/imageURLCM',{
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
      this.displayFaceBox(this.calculateFaceLocationCM(response))
    })
    .catch(e=>console.log(e))

    console.log(this.state.user.entries)
}


calculateFaceLocationCM=(data)=>{
  const image=document.getElementById('inputImage');
  const width=image.width;
  const height=image.height;
  let ans=[];
  for (let i=0;i<data.outputs[0].data.regions.length;i++){
    let clarifaiFace=data.outputs[0].data.regions[i].region_info.bounding_box;
    let valuePer100i=Math.floor(data.outputs[0].data.regions[i].data.concepts[0].value*100);
    let ans2;
    {valuePer100i<50?
      ans2={
        leftCol: clarifaiFace.left_col*width,
        topRow: clarifaiFace.top_row*height,
        rightCol:width-(clarifaiFace.right_col*width),
        bottomRow:height-(clarifaiFace.bottom_row*height),
        name:`i think this is not a celebrity, but if she/he is, her/his name is ${data.outputs[0].data.regions[i].data.concepts[0].name}`,
        valuePer100: `${valuePer100i}%`,
        person:i+1
      }
    :
      ans2={
        leftCol: clarifaiFace.left_col*width,
        topRow: clarifaiFace.top_row*height,
        rightCol:width-(clarifaiFace.right_col*width),
        bottomRow:height-(clarifaiFace.bottom_row*height),
        name:data.outputs[0].data.regions[i].data.concepts[0].name,
        valuePer100: `${valuePer100i}%`,
        person:i+1
      }}
    ans.push(ans2)
  }
  return ans
}

onSubmitGM=()=>{
  this.setState({imageUrl:this.state.input})
    fetch('https://stark-crag-77731.herokuapp.com/imageURLGM',{
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
      this.displayFaceBox(this.calculateFaceLocationGM(response))
    })
    .catch(e=>console.log(e))

    console.log(this.state.user.entries)
}


calculateFaceLocationGM=(data)=>{
  let ans=[];
  const arr=data.outputs[0].data.concepts;
  for (let i=0;i<arr.length;i++){
    let valuePer100i=Math.floor(arr[i].value*100);
    if (valuePer100i>20){
      let ans2={
        name:arr[i].name,
        valuePer100:`${valuePer100i}%`
      }
      ans.push(ans2)
    }
  }
  return ans
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

swt=(event)=>{
  this.setState({swtd:event.target.value,box:[]})
}

render(){
  return(
    <div>
      {/* <Particless className='party' /> */}
      <Navigation isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange} />

      {this.state.route==='Home'?
      <div>
        <Rank name={this.state.user.name} entries={this.state.user.entries} />
        <SelectWhatDetect swt={this.swt} />
        {this.state.swtd==='FDM'?
          <div>
            <ImageLinkForm onSubmit={this.onSubmitFDM} onInputChange={this.onInputChange} />
            <FaceRecognitionFDM box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
        : this.state.swtd==='CM'?
          <div>
            <ImageLinkForm onSubmit={this.onSubmitCM} onInputChange={this.onInputChange} />
            <FaceRecognitionCM box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
        : this.state.swtd==='GM'?
          <div>
            <ImageLinkForm onSubmit={this.onSubmitGM} onInputChange={this.onInputChange} />
            <ImageRecognitionGM box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
        :<p className='center'>please select</p>
        }
        
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
