import React, { Component, PropTypes } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'
import moment from 'moment';

class GeoCodeSuggest extends Component {
  handleFormSubmit(event) {
    event.preventDefault()
    const address = this.props.location;
 
    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { throw new Error(err) }
      this.props.showLoadingIcon();

      this.props.changeLocation({
        lat: lat,
        lng: lng,
        location: this.props.location
      });
    })
  }

  onChange = (address) => {
    this.props.changeAddress(address);
  }

  render () {
    let locationStyle = { color: 'blue' }
    
    return (
      <div className="row">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <h2 style={locationStyle}>{this.props.location}</h2>

          <PlacesAutocomplete
            value={this.props.location}
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )     
  }
}

export default GeoCodeSuggest;