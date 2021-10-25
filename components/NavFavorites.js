import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";

const NavFavorites = () => {
  const data = [
    {
      id: "home",
      icon: "home",
      location: "Home",
      coordinates: {
        lat: 37.78394814011524,
        lng: -122.4321002445078,
      },
      description: "1489 Webster Street, San Francisco, CA, USA",
    },
    {
      id: "work",
      icon: "briefcase",
      location: "Work",
      coordinates: {
        lat: 37.784553311888324,
        lng: -122.39721116666715,
      },
      description: "633 Folsom Street, San Francisco, CA, USA",
    },
  ];

  const dispatch = useDispatch(setDestination);
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tw`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { location, icon, description, coordinates } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            const destination = {
              location: coordinates,
              description,
            };

            dispatch(setDestination(destination));

            navigation.navigate("RideOptionsCard");
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
