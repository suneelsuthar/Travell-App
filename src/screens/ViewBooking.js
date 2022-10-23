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
const screen = Dimensions.get("screen");
export default class ViewBooking extends React.Component {
  constructor() {
    super();
    this.state = {
      LoaderShow: false,
      flightsShow: true,
      passengers: true,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ LoaderShow: false });
    }, 3000);
  };

  render() {
    let { LoaderShow, flightsShow, passengers } = this.state;

    return (
      <View style={styles._layer}>
        <View style={styles._header_main}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="closecircle" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles._header_timer_main}>
            <View style={styles._header_timer_show}>
              <Text style={styles.timer}>23h 58min</Text>
            </View>
            <Image
              source={require("./../images/icon7.png")}
              style={styles._img7}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles._data_main}>
            <Text style={styles._id}>F4SES4</Text>
            {!LoaderShow ? (
              <View>
                <View style={styles.selected_airport_main}>
                  <View>
                    <Text style={styles._pirchase}>Purchase time limit</Text>
                    <Text style={styles._date_top}>13.1.2020. 10:33</Text>
                  </View>
                  <TouchableOpacity style={styles._Reservation_btn}>
                    <Text style={styles._Reservation_btn_text}>
                      Reservation
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles._card_list_main}>
                  <TouchableOpacity
                    style={styles._card_list_header}
                    onPress={() => this.setState({ flightsShow: !flightsShow })}
                  >
                    <View style={styles._card_list_heder_title_main}>
                      <AntDesign name="checkcircle" size={15} color="#64c365" />
                      <Text style={styles._card_list_heder_title}>Flight</Text>
                    </View>
                    {!flightsShow ? (
                      <AntDesign name="upcircle" size={15} color="#8d8d92" />
                    ) : (
                      <AntDesign name="downcircle" size={15} color="#8d8d92" />
                    )}
                  </TouchableOpacity>
                  {flightsShow && (
                    <>
                      <View style={styles._date_main}>
                        <Text style={styles._date_heading}>FRA - IST</Text>
                        <Text style={styles._date}>20.06.2022</Text>
                      </View>
                      <Text style={styles._airport}>
                        Frankfurt Main - Istanbul Airport
                      </Text>
                      <View style={styles._card_main}>
                        <View style={styles._card_time_main}>
                          <Text style={styles._card_time}>17:15</Text>
                          <Text style={styles._card_time_title}>
                            Frankfurt Main (FRA)
                          </Text>
                        </View>
                        <View style={styles._card_header_main}>
                          <AntDesign name="arrowdown" size={24} color="gray" />
                          <View style={styles._card_img_main}>
                            <Image
                              source={require("./../images/icon5.png")}
                              style={styles._img2}
                            />
                            <View>
                              <Text style={styles._time}>3h0min</Text>
                              <Text style={styles._name}>Lufthansa</Text>
                            </View>
                          </View>
                          <View>
                            <Text style={styles._number}>LH1304</Text>
                            <Text style={styles._price_label}>OKG</Text>
                          </View>
                        </View>
                        <View style={styles._card_time_main}>
                          <Text style={styles._card_time}>21:15</Text>
                          <Text style={styles._card_time_title}>
                            stanbul Airport (IST)
                          </Text>
                        </View>
                      </View>
                    </>
                  )}
                </View>
                <View style={styles._card_list_main}>
                  <TouchableOpacity
                    style={styles._card_list_header}
                    onPress={() => this.setState({ passengers: !passengers })}
                  >
                    <View style={styles._card_list_heder_title_main}>
                      <AntDesign name="checkcircle" size={15} color="#64c365" />
                      <Text style={styles._card_list_heder_title}>
                        Passengers
                      </Text>
                    </View>
                    {!passengers ? (
                      <AntDesign name="upcircle" size={15} color="#8d8d92" />
                    ) : (
                      <AntDesign name="downcircle" size={15} color="#8d8d92" />
                    )}
                  </TouchableOpacity>
                  {passengers && (
                    <>
                      <View style={styles._card_main}>
                        <Text style={styles._contact_deails}>
                          Contact Details
                        </Text>
                        <Text style={styles.mail}>osman_2008@hotmail.de</Text>
                        <Text style={styles.mail}>0323233333233</Text>
                        <Text style={styles.name}>OSMAN ASHREF</Text>
                        <Text style={styles.mail}>05.02.2020</Text>
                      </View>
                    </>
                  )}
                </View>
                <View style={styles._card_list_main}>
                  <TouchableOpacity
                    style={styles._card_list_header}
                    onPress={() => this.setState({ passengers: !passengers })}
                  >
                    <View style={styles._card_list_heder_title_main}>
                      <AntDesign name="checkcircle" size={15} color="#64c365" />
                      <View>
                        <Text style={styles._card_list_heder_title}>
                          Payment method
                        </Text>
                        <Text style={styles.cash}>Cash in our branches</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles._change_btn}>
                      <Text style={styles._change_btn_text}>Change</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>

                  <View style={styles._price_main}>
                    <Text style={styles._total_price_title}>Total price</Text>
                    <Text style={styles._total_price}>130€</Text>
                  </View>
                  <View style={styles._btn_section}>
                    <Button
                      title="Back"
                      onPress={() =>
                        this.props.navigation.navigate("Home")
                      }
                    />
                  </View>
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  _layer: { flex: 1, backgroundColor: "white" },
  _loader_main: {
    backgroundColor: "red",
  },
  _data_main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  selected_airport_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  _date: {
    fontSize: 10,
  },
  _card_list_main: {
    marginTop: 20,
  },
  _card_list_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_list_heder_title_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_list_heder_title: {
    fontSize: 18,
    marginLeft: 10,
  },
  _date_main: {
    backgroundColor: "#f3f3f3",
    height: 42,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
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
  _card_img_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  _img2: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  _img2: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  _img7: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  _contact_deails: {
    color: "gray",
    fontWeight: "bold",
  },
  mail: {
    color: "black",
    fontSize: 17,
  },
  name: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  cash: {
    marginLeft: 10,
  },
  _change_btn: {
    backgroundColor: "#f3f3f3",
    height: 32,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  _change_btn_text: {
    color: "#3477f6",
    fontWeight: "bold",
  },
  _price_main: {
    marginTop: 20,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  _total_price_title: {
    color: "gray",
    fontSize: 10,
  },
  _total_price: {
    fontWeight: "bold",
    fontSize: 30,
  },
  _btn_section: {
    marginVertical: 20,
  },
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
  _header_timer_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _header_timer_show: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    paddingHorizontal: 10,
  },
  timer: {
    fontWeight: "bold",
  },
  _id: {
    fontWeight: "bold",
    fontSize: 30,
  },
  _pirchase: {
    fontWeight: "bold",
    color: "gray",
  },
  _date_top: {
    fontWeight: "bold",
  },
});
