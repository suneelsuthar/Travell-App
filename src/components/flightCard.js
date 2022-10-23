import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
export default class FlightCard extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <View style={styles._outer_view}>
        <TouchableOpacity
          style={styles._card}
          activeOpacity={0.5}
          onPress={this.props.onPress}
        >
          <View style={styles._row}>
            <Image source={data.img} style={styles._img} />
            <View style={styles._desc_view}>
              <View style={styles._label}>
                <Text style={styles._text}>{data.category}</Text>
              </View>
              <Text style={styles._location}>{data.location}</Text>
              <Text style={styles._time}>{data.time}</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <View style={styles._card_footer}>
            <View style={styles._footer_row}>
              <Text style={styles._location}>{data.remainingTime} </Text>
              <Octicons name="primitive-dot" size={10} color="black" />
              <Text style={styles._location}> {data.weight} </Text>
              {data.stop && (
                <Octicons name="primitive-dot" size={10} color="black" />
              )}
              {data.stop && (
                <View style={styles._stop_view}>
                  <Text style={styles._stop}>Stop {data.stop}</Text>
                </View>
              )}
            </View>

            <View>
              <Text style={styles._price}>{data.price} €</Text>
              <Text style={styles._price_label}>/per adult</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles._hr} />
      </View>
    );
  }
}
let styles = StyleSheet.create({
  _card: {
    // backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    backgroundColor: "white",
    elevation: 1,
    padding: 10,
  },
  _btn_text: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
  _outer_view: {},
  _hr: {
    borderBottomWidth: 2,
    borderColor: "#eeeeef",
    marginVertical: 2,
    width: "90%",
    alignSelf: "center",
  },
  _label: {
    backgroundColor: "#f2f2f3",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: "flex-start",
  },
  _text: {
    fontFamily: "Poppins-Regular",
  },
  _img: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginRight: 10,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
  },
  _desc_view: {
    flex: 1,
    flexDirection: "column",
  },
  _category: {
    fontFamily: "Poppins-Regular",
  },
  _location: {
    fontFamily: "Poppins-Medium",
  },
  _time: {
    fontFamily: "Poppins-Bold",
  },
  _card_footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  _footer_row: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  _stop_view: {
    backgroundColor: "#fae9cf",
    width: 70,
    padding: 3,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  _stop: {
    fontFamily: "Poppins-Regular",
  },
  _price: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
  },
  _price_label: {
    fontFamily: "Poppins-Regular",
    fontSize: 9,
  },
});
