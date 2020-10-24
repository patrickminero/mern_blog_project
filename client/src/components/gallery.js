import React from 'react';
import { withRouter } from 'react-router-dom'

class Gallery extends React.Component{
state = {
    api_url: 'https://api.unsplash.com//users/patminero/photos?client_id=',
    api_key:'OgQ1koILALSpAUUVwUHbwAnY3-uVlHWF6GicDYOtYdc',
    images: [ ],
    countries: [],
    filter: 'All',
}
async componentDidMount(){
    let dataArray = await (await (fetch(`https://api.unsplash.com//users/patminero/collections?client_id=${this.state.api_key}`))).json()
    let imageArray = [];
    let countryArray = [];
    dataArray.forEach(image => {

    image.preview_photos.forEach(element => {
        let object = {
            'id': image.id,
            'category': image.title,
            'src': element.urls.regular
        }
        imageArray.push(object)
    })
    // return imageArray
    this.setState({images: imageArray})
    });
    
    dataArray.forEach(image =>{
        countryArray.push(image.title)
    })

    this.setState({countries: countryArray})
}
handleClick(e){
    let target = e.target.innerHTML;
    this.setState({filter: target})
}
render(){
    let countries = this.state.countries
    let countriesList = countries.map(country =>{
        return(
            <li className="text-center text-info list-item" key={Math.random()} onClick={this.handleClick.bind(this)}>{country}</li>)
        })
    let rawImages = this.state.images;
    let filteredImages = [];
    let filter = this.state.filter;
    rawImages.map(image =>{
        if(image.category === filter){
            filteredImages.push(image)
        }
        return null
    })
    let allImages = rawImages.map(image =>{
        return(
            <div className="mb-3 pics animation all 2" key={image.id + Math.random()}>
                <a href={image.src} target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={image.src} filter={image.category} alt={image.category}/></a>
            </div>
        )
    })
    let renderImages = filteredImages.map(image =>{
        return(
            <div className="mb-3 pics animation all 2" key={image.id + Math.random()}>
                <a href={image.src} target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={image.src} filter={image.category} alt={image.category}/></a>
            </div>
        )
    })
        return filter === 'All' ? (
        <div>
            <div className="container d-flex p-2 info btn-group btn-block">
                <button className="btn btn-light btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by country
                </button>
                <div className="dropdown-menu w-100">
                    <li className="text-center text-info list-item" key={Math.random()} onClick={this.handleClick.bind(this)}>All</li>
                    {countriesList}
                </div>
        </div>
            <div className="gallery" id="gallery">
                {allImages}
            </div>
       </div>) : (
       <div>
           <div className="container d-flex p-2 info btn-group btn-block">
                <button className="btn btn-light btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by country
                </button>
                <div className="dropdown-menu w-100">
                    <li className="text-center text-info list-item" key={Math.random()} onClick={this.handleClick.bind(this)}>All</li>
                    {countriesList}
                </div>
            </div>
           <div className="gallery" id="gallery">
                {renderImages}
            </div>
       </div>
       )
    }
}
export default withRouter(Gallery)