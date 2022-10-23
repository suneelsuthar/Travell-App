import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles._btn} onPress={this.props.onPress}>
        <Text style={styles._btn_text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
let styles = StyleSheet.create({
  _btn: {
    backgroundColor: "#3477f6",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
  },
  _btn_text: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
});
