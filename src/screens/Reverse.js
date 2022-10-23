import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Header, FlightCard, Button } from "./../components";
import { AntDesign } from "@expo/vector-icons";
import { RootTagContext } from "react-native/Libraries/ReactNative/RootTag";
const screen = Dimensions.get("screen");
export default class Reverse extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles._layer}>
        <View style={styles._header_main}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="closecircle" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles._Reservation_btn}>
            <Text style={styles._Reservation_btn_text}>Reservation</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.data_main}>
          <>
            <Text style={styles._heading}>
              Your reservation has been created successfully!
            </Text>
            <Image
              source={require("./../images/icon6.png")}
              style={styles._img2}
            />
            <AntDesign
              name="checkcircle"
              size={15}
              color="#64c365"
              style={{ alignSelf: "center" }}
            />
            <Text style={styles._booking_number_title}>Booking number</Text>
            <Text style={styles._booking_number}>F4FE4D</Text>
            <Text style={styles._des}>
              You reservation was successfull. Please note that this is one a
              reservation and is not confirmed until it has been paid for and
              successfully issued by the relevant airlines. prices can cary.
            </Text>
            <Text style={styles._time_limit}>Purchase time limit</Text>
            <View style={styles._time_show}>
              <Text style={styles._time}>13.1.2022 10:33</Text>
            </View>
          </>
          <>
            <Text style={styles._des2}>
              As soon as the trip is firmly booked, you will receive all
              necessary information about your booking to you e-mail address
              (osman_2008@hotmail.com).
            </Text>
            <View style={styles._btn_section}>
              <Button
                title="View Booking"
                onPress={() => this.props.navigation.navigate("ViewBooking")}
              />
            </View>
          </>
        </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  _layer: { flex: 1, backgroundColor: "white" },
  _header_main: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    padding: 10,
  },
  _Reservation_btn: {
    backgroundColor: "#ee855b",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  _Reservation_btn_text: {
    fontWeight: "bold",
  },
  _heading: {
    marginHorizontal: 20,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 12,
  },
  _img2: {
    alignSelf: "center",
    marginTop: 5,
  },
  _booking_number_title: {
    textAlign: "center",
    color: "gray",
    marginTop: 20,
    fontWeight: "bold",
  },
  _booking_number: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  _des: {
    marginHorizontal: 20,
    textAlign: "center",
    marginTop: 30,
  },
  _des2: {
    marginHorizontal: 20,
    textAlign: "center",
    marginTop: 50,
  },
  _time_limit: {
    marginHorizontal: 20,
    textAlign: "center",
    marginTop: 30,
    color: "gray",
  },
  _time_show: {
    backgroundColor: "#fbe9ce",
    width: "40%",
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 5,
  },
  _time: {
    fontWeight: "bold",
  },
  _btn_section: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  data_main: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: 20,
  },
});
