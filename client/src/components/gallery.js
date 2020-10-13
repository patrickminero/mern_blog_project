import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Filter from './filter'

class Gallery extends React.Component{
    state = {
        api_url: 'https://api.unsplash.com//users/patminero/photos?client_id=',
        ai_key:'OgQ1koILALSpAUUVwUHbwAnY3-uVlHWF6GicDYOtYdc',
        images: [ ]
    }
        
    
    componentDidMount(){
        axios.get(`${this.state.api_url}${this.state.ai_key}&per_page=100`)
          .then(res => {
            this.setState({images: res.data})
            console.log(this.state.images)
          })
      }
    
    render(){
        const imageArray = this.state.images.length ? (
        this.state.images.map(image =>{
            return(
                <div className="mb-3 pics animation all 2" key={image.id}>
                    <img className="img-fluid" src={image.urls.regular} alt={image.description}/>
                </div>
            )
        })) : (<div className="text-center">Loading images</div>)
                

        return(
            <div>
                <div className="gallery" id="gallery">
                    {imageArray}
                </div>
            </div>
        )
    }
}
export default Gallery