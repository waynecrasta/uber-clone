import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
      mapType={"mutedStandard"}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
          pinColor="blue"
        />
      )}

      <MapViewDirections
        origin={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        destination={{
          latitude: destination.location.lat,
          longitude: destination.location.lng,
        }}
        strokeWidth={3}
        strokeColor="black"
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
