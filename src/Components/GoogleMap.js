import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [{ latitude: 32.17981, longitude: 74.183109 }]
        };
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: store.latitude,
                        lng: store.longitude
                    }}
                />
            );
        });
    };

    render() {
        return (
            <div className="page">
                <section>
                    <Map
                        google={this.props.google}
                        zoom={13}
                        style={mapStyles}
                        initialCenter={{ lat: 32.17981, lng: 74.183109 }}>
                        {this.displayMarkers()}
                    </Map>
                </section>
            </div>
        );
    }
}

const mapStyles = {
    width: "75%",
    height: "100%"
};
export default GoogleApiWrapper({
    apiKey: 'GOOGLE_MAPS_API_KEY'
})(GoogleMap);
