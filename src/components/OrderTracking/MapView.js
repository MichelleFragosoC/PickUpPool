import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { faMale } from '@fortawesome/free-solid-svg-icons'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const myLatLng = {lat: 19.4368747, lng: -99.1412259};
class ViewMaps extends Component {
  static defaultProps = {
    center: myLatLng,
    zoom: 10
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
            lat={19.372794328102774}
            lng={-99.17858404330478}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default ViewMaps;
