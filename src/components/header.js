import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles._header}>
        <View style={styles._back_main}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Ionicons name="ios-arrow-back" size={24} color="#3477f6" />
          </TouchableOpacity>
          <Text style={styles._back_title}>{this.props.backTitle} </Text>
        </View>
        <Text style={styles._title}>{this.props.title}</Text>
        <View style={styles._back_main} />
      </View>
    );
  }
}
let styles = StyleSheet.create({
  _header: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    padding: 10,
  },
  _title: {
    fontFamily: "Poppins-Medium",
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
  _back_title: {
    fontFamily: "Poppins-Medium",
    color: "#3477f6",
    marginLeft: 5,
  },
  _back_main: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
  },
});
