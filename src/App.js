import React, { Component } from 'react';
import './App.css';
import Youtuber from './youtuber.js';
import videos from './video.js';
import YoutubePopUp from './youtubePopUp.js';
import { withStyles } from '@material-ui/core/styles';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const styles = theme =>({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit*3,
    overFlowX:"auto"
  },
  table:{
  },
  progress:{
    margin: theme.spacing.unit*2
  }
})

function NaverMapAPI(i) {
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '90%',
        height: '100%',
        margin: 'auto',
        border: '1px solid black',
        position: 'sticky',
        top: '4px',
        zIndex : 2

      }}
      center={{lat : videos[i+1].locationX , lng:videos[i+1].locationY  }}
      defaultZoom={13}
    >
      {
      videos.map(v=>{
        return(
          <div>
            {<YoutubePopUp
              id = {v.id}
              title ={v.title}
              href = {v.href}
              restaurantInfo = {v.restaurantInfo}
              locationX = {v.locationX}
              locationY = {v.locationY}
            />}
          </div>
        )
      })
      }
    </NaverMap>
  );
}

class App extends Component {
  componentDidMount(){
    this.timer = setInterval(this.progress, 20)
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err=>console.log(err));
  }

  callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  constructor(props){
    super(props);
    this.state={
      i:-1
    };
  }
  render(){

    return (
      <div
        style={{
          height:'100%'
        }}
      >
        <RenderAfterNavermapsLoaded
          ncpClientId={'cgujxwv7aq'}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <div style ={{
            width : '100%',
            height : '100%',
            position : 'sticky',
            top : '4px',
            backgroundColor : 'white',
            zIndex: 2
          }}
          >
            {NaverMapAPI(this.state.i)}
          </div>
        </RenderAfterNavermapsLoaded>
        {
          <div style ={{
            paddingLeft : '5px',
            position : 'fixed',
            bottom: '10%',
            zIndex : 100,
            width : '80%',
            left : '10%',
            height: '30%',
          }}
          >
            <NavigateBeforeIcon style ={{
              position : 'absolute',
              left : '-5%',
              top : '45%',
              fontSize: 50
            }}
              onClick ={()=> {
                const {i} = this.state;
                if(this.state.i===-1){
                  this.setState({
                    i: videos.length-2
                  });
                }
                else{this.setState({
                  i:i-1
                  });
                }
            }}/>
            {<Youtuber
              i = {this.state.i}
            />}
            <NavigateNextIcon style ={{
              position : 'absolute',
              right : '-5%',
              top : '45%',
              fontSize : 50,
            }}
              onClick ={()=> {
                const {i} = this.state;
                if(this.state.i>videos.length-3){
                  this.setState({
                    i:-1
                  });
                }
                else{this.setState({
                  i:i+1
                });
                }
              }}
            />
          </div>
        }
      </div>
    );
  }
}

export default withStyles(styles)(App);
