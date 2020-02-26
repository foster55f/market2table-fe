import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './MapsContainer.scss';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '600px'
};

export const MapsContainer = ({ history, google }) => {

  const [selectedPlace, setSelectedPlace] = useState({});
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const { markets, selectedMarket } = useSelector(state => state);

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  }

  const onClose = props => {
   if (showingInfoWindow) {
     setShowingInfoWindow(false);
     setActiveMarker(null);
   }
  };

  const setMarkers = () => {
    if (selectedMarket.length === 7) {
      const marketInfo = markets.find(market => market.id === selectedMarket);
      return (<Marker
          onClick={onMarkerClick}
          name={marketInfo.marketname}
          position={{ lat: marketInfo.latitude, lng: marketInfo.longitude }}
          key={marketInfo.id}
          address={marketInfo.address}
        />)
    } else {
      return markets.map(market => {
        return (
          <Marker
              onClick={onMarkerClick}
              name={market.name}
              position={{ lat: market.latitude, lng: market.longitude }}
              key={market.id}
              address={market.address}
            />
        )
      });
    }
  }

  const setCenter = () => {
    if (selectedMarket.length === 7) {
      const marketInfo = markets.find(market => market.id === selectedMarket);
      return {
        lat: marketInfo.latitude,
        lng: marketInfo.longitude
      }
    } else {
      return {
       lat: markets[0].latitude,
       lng: markets[0].longitude
      }
    }
  }

  const setZoom = () => {
    if (selectedMarket.length === 7) {
      return 14
    } else {
      return 11
    }
  }

  let toReturn;
  if (markets.length) {
    const center = setCenter();
    const marketPins = setMarkers();
    const zoom = setZoom();
    toReturn = (
      <div id='mapBox' className='map-container'>
        <Map
          google={google}
          zoom={zoom}
          style={mapStyles}
          initialCenter={center}
          center={center}
        >
          {marketPins}
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={onClose}
          >
            <div className='info-window-container'>
              <h4>{selectedPlace.name}</h4>
              <h4>{selectedPlace.address}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>)
  } else {
    toReturn = (<p>LOADING</p>);
  }
  return toReturn
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapsContainer);

MapsContainer.propTypes = {
  markets: PropTypes.array,
  selectedMarketId: PropTypes.string,
  setSelectedPlace: PropTypes.func,
  setActiveMarker: PropTypes.func,
  selectedPlace: PropTypes.string,
  showingInfoWindow: PropTypes.bool,
  setShowingInfoWindow:PropTypes.func
}
