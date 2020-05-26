import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import videos from './video.js';


class Youtuber extends React.Component {
  render(){
  return (
    <div>
      
    <Card style={{
        width: '27%',
        height: '100%',
        border: '1px solid black' ,
        paddingTop: '5px',
        float: 'left',
        paddingLeft: '5px',
        zIndex : 99,
        position : 'relative',
        left : '0%',
      }}
    >
      <CardMedia
        title={videos[this.props.i<0?videos.length-1:this.props.i].title}>
        {<iframe width="98%" height="180px" src={videos[this.props.i<0?videos.length-1:this.props.i].href} title ={videos[this.props.i<0?videos.length-1:this.props.i].title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>}
      </CardMedia>
      <CardActions disableSpacing>
        <a href ={videos[this.props.i<0?videos.length-1:this.props.i].restaurantInfo}>식당정보</a>
      </CardActions>
    </Card>
    <Card style={{
      width: '40%',
      height: '120%',
      border: '1px solid black' ,
      paddingTop: '5px',
      float: 'left',
      paddingLeft: '5px',
      zIndex : 100,
      position : 'absolute',
      textAlign : 'center',
      left : '30%',
      top : '-10%'
    }}
  >
    <CardMedia
      title={videos[this.props.i+1].title}>
      {<iframe width="98%" height="240px" src={videos[this.props.i+1].href} title ={videos[this.props.i+1].title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>}
    </CardMedia>
    <CardActions disableSpacing>
      <a href ={videos[this.props.i+1].restaurantInfo}>식당정보</a>
    </CardActions>
  </Card>
  <Card style={{
    width: '27%',
    border: '1px solid black' ,
    paddingTop: '5px',
    float: 'left',
    paddingLeft: '5px',
    zIndex : 99,
    position : 'absolute',
    left : '73%',
  }}
>
  <CardMedia
    title={videos[this.props.i+2<videos.length?this.props.i+2:0].title}>
    {<iframe width="98%" height="180px" src={videos[this.props.i+2<videos.length?this.props.i+2:0].href} title ={videos[this.props.i+2<videos.length?this.props.i+2:0].title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>}
  </CardMedia>
  <CardActions disableSpacing>
    <a href ={videos[this.props.i+2<videos.length?this.props.i+2:0].restaurantInfo}>식당정보</a>
  </CardActions>
</Card>
</div>
  );}
}

export default Youtuber