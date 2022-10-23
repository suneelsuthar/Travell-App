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
import { Button } from "./../components";
import { AntDesign } from "@expo/vector-icons";
const screen = Dimensions.get("screen");
export default class CheckOut extends React.Component {
  constructor() {
    super();
    this.state = {
      LoaderShow: true,
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
    let { data } = this.props.route.params;
    console.log("----s0000000000---->", this.props.route.params.data);
    return (
      <View style={styles._layer}>
        <View style={styles._header}>
          <View style={styles._back_main}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={styles._cancel_btn_Text}>Cancel</Text>
            </TouchableOpacity>
          </View>
          {LoaderShow ? (
            <Text style={styles._title}>Loading</Text>
          ) : (
            <Text style={styles._title}>Checkout</Text>
          )}
          <View style={styles._back_main2}>
            {LoaderShow ? (
              <>
                <ActivityIndicator size="small" color="#0000ff" />
              </>
            ) : null}
          </View>
        </View>
        <ScrollView>
          <View style={styles._data_main}>
            {!LoaderShow ? (
              <View>
                <View style={styles.selected_airport_main}>
                  <Text style={styles.selected_airport_Data}>
                   {data.arrival}
                  </Text>
                  <Text>-</Text>
                  <Text style={styles.selected_airport_Data}>
                    {data.departure}
                  </Text>
                </View>
                <Text style={styles._short_frm}>{ data.location}</Text>
                <Text style={styles._date}>{ data.date}</Text>
                <Text style={styles._date}>
                  {data.adults} Adults, {data.childrens} Children, {data.infants} Infants
                </Text>
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
                        <Text style={styles._date_heading}>
                          {data.location}
                        </Text>
                        <Text style={styles._date}>{data.date}</Text>
                      </View>
                      <Text style={styles._airport}>
                        {data.arrival} - {data.departure}
                        {/* lskdjflskdjfskldf */}
                      </Text>
                      <View style={styles._card_main}>
                        <View style={styles._card_time_main}>
                          <Text style={styles._card_time}>17:15</Text>
                          <Text style={styles._card_time_title}>
                            {data.arrival} (FRA)
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
                              <Text style={styles._time}>
                                {data.remainingTime}
                              </Text>
                              <Text style={styles._name}>{data.category}</Text>
                            </View>
                          </View>
                          <View>
                            <Text style={styles._number}>{data.num}</Text>
                            <Text style={styles._price_label}>
                              {data.weight}
                            </Text>
                          </View>
                        </View>
                        <View style={styles._card_time_main}>
                          <Text style={styles._card_time}>
                            {data.departureTime}
                          </Text>
                          <Text style={styles._card_time_title}>
                            {data.departure} (IST)
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
                    <Text style={styles._total_price}>{ data.price}€</Text>
                  </View>
                  <View style={styles._btn_section}>
                    <Button
                      title="Reserve"
                      onPress={() => this.props.navigation.navigate("Reverse")}
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
    fontWeight: "bold",
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
  _back_main2: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  _cancel_btn_Text: {
    color: "#eb5748",
    fontWeight: "bold",
  },
  selected_airport_main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selected_airport_Data: {
    width: "46%",
    fontSize: 12,
  },
  _short_frm: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
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
});
