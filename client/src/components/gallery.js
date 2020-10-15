import React from 'react';

class Gallery extends React.Component{
    state = {
        api_url: 'https://api.unsplash.com//users/patminero/photos?client_id=',
        api_key:'OgQ1koILALSpAUUVwUHbwAnY3-uVlHWF6GicDYOtYdc',
        images: [ ],
        countries: [],
        gPhotosApiKey:'254835713261-69nmsv9l30oqanctd63flombql0q8s8t.apps.googleusercontent.com',
        OAuthClientId: '254835713261-69nmsv9l30oqanctd63flombql0q8s8t.apps.googleusercontent.com'
    }
        
    
    async componentDidMount(){
        let dataArray = await (await (fetch(`https://api.unsplash.com//users/patminero/collections?client_id=${this.state.api_key}`))).json()
        let imageArray = [];
        let countryArray = [];
        dataArray.forEach(image => {
            // console.log(dataArray)
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
    // console.log(this.state)
}
    
    render(){
        const imageArray = this.state.images.length ? (
        this.state.images.map(image =>{
            return(
                <div className="mb-3 pics animation all 2" key={image.id + Math.random()}>
                    <img className="img-fluid" src={image.src} alt={image.category}/>
                </div>
            )
        })) : (<div className="text-center">Loading images</div>)
                
        const countriesList = this.state.countries.map(country =>{
            return(
                <li className="text-center text-info list-item" key={Math.random()}>{country}</li>
            )
        })

        return(
            <div>
                <div className="container d-flex p-2 info btn-group btn-block">
                    <button className="btn btn-light btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter by country
                    </button>
                    <div className="dropdown-menu w-100">
                        {countriesList}
                    </div>
                </div>
                <div className="gallery" id="gallery">
                    {imageArray}
                </div>
            </div>
        )
    }
}
export default Gallery