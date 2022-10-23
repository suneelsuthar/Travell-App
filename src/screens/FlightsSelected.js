import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Header, Button } from "./../components";
import { AntDesign } from "@expo/vector-icons";
export default class FlightsSelected extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { data, selectedData } = this.props.route.params;
    console.log("========selected flight====>", data);
    return (
      <View style={styles._layer}>
        <Header
          backTitle="Back"
          title={data.category}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles._data_min}>
          <Text style={styles._heading}>Departure Flight</Text>
          <View style={styles._card_header_main}>
            <View style={styles._card_img_main}>
              <Image source={data.img} style={styles._img} />
              <View>
                <Text style={styles._name}>{data.category}</Text>
                <Text style={styles._time}>{data.remainingTime}</Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles._price}>{data.price}€</Text>
              <Text style={styles._price_label}>/per adult</Text>
            </View>
          </View>
          <View style={styles._date_main}>
            <Text style={styles._date_heading}>{data.location}</Text>
            <Text style={styles._date}>{data.date}</Text>
          </View>
          <Text style={styles._airport}>
            {data.arrival} - {data.departure}
          </Text>
          <View style={styles._card_main}>
            <View style={styles._card_time_main}>
              <Text style={styles._card_time}>{data.arrivaltime}</Text>
              <Text style={styles._card_time_title}>{data.arrival} (FRA)</Text>
            </View>
            <View style={styles._card_header_main}>
              <AntDesign name="arrowdown" size={24} color="gray" />
              <View style={styles._card_img_main}>
                <Image source={data.img} style={styles._img2} />
                <View>
                  <Text style={styles._name}>{data.category}</Text>
                  <Text style={styles._time}>{data.remainingTime}</Text>
                </View>
              </View>
              <View>
                <Text style={styles._number}>{data.num}</Text>
                <Text style={styles._price_label}>{data.weight}</Text>
              </View>
            </View>
            <View style={styles._card_time_main}>
              <Text style={styles._card_time}>{data.departureTime}</Text>
              <Text style={styles._card_time_title}>
                {data.departure} (IST)
              </Text>
            </View>
          </View>
        </View>
        <View style={styles._btn_section}>
          <Button
            title="Next"
            onPress={() =>
              this.props.navigation.navigate("ContactDetails", {
                data: this.props.route.params.selectedData,
                selectedData: data,
              })
            }
          />
        </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  _layer: { flex: 1, backgroundColor: "white" },
  _data_min: {
    paddingHorizontal: 20,
  },
  _heading: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  _img: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  _img2: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  _card_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  _card_img_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _name: {
    fontSize: 18,
    color: "black",
  },
  _time: {
    color: "gray",
    fontSize: 15,
  },
  _price: {
    fontSize: 22,
    fontWeight: "bold",
  },
  _price_label: {
    fontSize: 9,
  },
  _date_main: {
    backgroundColor: "#f3f3f3",
    height: 42,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  _date_heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  _date: {
    fontSize: 18,
    marginLeft: 10,
  },
  _airport: {
    fontSize: 10,
    marginTop: 5,
  },
  _card_main: {
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 10,
    paddingRight: 10,
    marginTop: 20,
    paddingVertical: 20,
    paddingLeft: 20,
  },
  _card_time_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_time: {
    fontSize: 15,
    fontWeight: "bold",
  },
  _card_time_title: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 40,
  },
  _number: {
    fontSize: 15,
    color: "gray",
  },
  _btn_section: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
  },
});
