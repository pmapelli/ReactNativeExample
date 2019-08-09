import React, { Component } from "react";
import { Platform, StyleSheet, Text, View} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#F5FCFF"
  },
  box: {
    width: 60,
    height: 60,
    margin: 10,
    backgroundColor: "#F00"
  }
});