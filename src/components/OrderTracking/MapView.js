import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { faMale } from '@fortawesome/free-solid-svg-icons'
 
const myLatLng = {lat: 19.429102, lng: -99.132366};
class ViewMaps extends Component {
  static defaultProps = {
    center: myLatLng,
    zoom: 15
  };
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC6ymkUmHMLmj5Sr6xDHhC50YYfmT1QP3U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <FontAwesomeIcon icon = {faMale}
            style ={{fontSize:"2em", color:"#13D304"}}
            lat={19.4346847270784}
            lng={-99.13188100275427}
          />
          <FontAwesomeIcon icon = {faTruckPickup}
            style ={{fontSize:"2em", color:"#F71963"}}
            lat={19.42197262954501}
            lng={-99.13691287730504}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default ViewMaps;