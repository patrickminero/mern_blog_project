import React , { Component } from 'react';

class Filter extends Component{
    constructor(props){
        super(props);
        // countries = this.props.blogsCountries.map(country =>{
        //     return (<li className="dropdown-item text-center" key={country.id}>{country.country}</li>)
        // })
        console.log(props);
    }
    
    
    
    render() {
        return(
            <div className="container d-flex p-2 info btn-group btn-block">
                <button className="btn btn-light btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by country
                </button>
                <div className="dropdown-menu w-100">
                    {this.countries}
                </div>
            </div>
        )
    }}
export default Filter;