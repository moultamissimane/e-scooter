import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Scooter } from "./types";

export default function Map() {
  const [scooters, setScooters] = useState<Scooter[]>([]);

  useEffect(() => {
    fetch("https://api.example.com/scooters")
      .then((response) => response.json())
      .then((data) => setScooters(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
