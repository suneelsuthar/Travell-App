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
import RBSheet from "react-native-raw-bottom-sheet";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
const screen = Dimensions.get("screen");
export default class FlightsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      LoaderShow: true,
      withBaggage: false,
      withoutBaggage: false,
      directFlight: false,
      stop1: false,
      stops2: false,
      royalJordanin: false,
      egyptair: false,
      royalAirMaroc: false,
      lufthansa: false,
      airFranceHOP: false,
      brusselsAirlines: false,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ LoaderShow: false });
    }, 1000);
  };
  ResetAll = () => {
    this.setState({ withBaggage: false });
    this.setState({ withoutBaggage: false });
    this.setState({ directFlight: false });
    this.setState({ stop1: false });
    this.setState({ stops2: false });
    this.setState({ royalJordanin: false });
    this.setState({ egyptair: false });
    this.setState({ royalAirMaroc: false });
    this.setState({ lufthansa: false });
    this.setState({ airFranceHOP: false });
    this.setState({ brusselsAirlines: false });
  };
  render() {
    let {
      LoaderShow,
      withBaggage,
      withoutBaggage,
      directFlight,
      stop1,
      stops2,
      royalJordanin,
      egyptair,
      royalAirMaroc,
      lufthansa,
      airFranceHOP,
      brusselsAirlines,
    } = this.state;
    console.log(withBaggage);

    // setTimeout(() => {
    //   this.setState({ LoaderShow: false });
    // }, 1000);
    let data = [
      {
        category: "Lufthansa",
        location: "FRA - IST",
        time: "17:15 - 21:15",
        price: "135",
        remainingTime: "3h0min",
        weight: "0KG",
        img: require("./../images/icon1.png"),
        stop: false,
        date: "20-06-2020",
        arrival: "Frankfurt Main",
        departure: "Istanbul Airport",
        arrivaltime: "17:15",
        departureTime: "21:15",
        num: "LH1304",
      },
      {
        category: "LOT Polish Airlines",
        location: "FRA - IST",
        time: "07:20 - 16:15",
        price: "135",
        remainingTime: "8h15min",
        weight: "0KG",
        img: require("./../images/icon2.png"),
        stop: "1",
        date: "20-06-2020",
        arrival: "Frankfurt Main",
        departure: "Istanbul Airport",
        arrivaltime: "07:20",
        departureTime: "16:15",
        num: "LH1305",
      },
      {
        category: "Air Serbia",
        location: "FRA - IST",
        time: "20:20 - 16:15",
        price: "150",
        remainingTime: "18h30min",
        weight: "1PC",
        img: require("./../images/icon3.png"),
        stop: "1",
        date: "20-06-2020",
        arrival: "Frankfurt Main",
        departure: "Istanbul Airport",
        arrivaltime: "20:20",
        departureTime: "16:15",
        num: "LH1306",
      },
      {
        category: "LOT Polish Airlines",
        location: "FRA - IST",
        time: "10:30 - 16:35",
        price: "150",
        remainingTime: "18h30min",
        weight: "0KG",
        img: require("./../images/icon4.png"),
        stop: "1",
        date: "20-06-2020",
        arrival: "Frankfurt Main",
        departure: "Istanbul Airport",
        arrivaltime: "10:30",
        departureTime: "16:35",
        num: "LH1307",
      },
    ];

    var stateValue = this.state;
    let count = 0;
    for (const key in stateValue) {
      if (key !== LoaderShow) {
        if (stateValue[key]) {
          count++;
        }
      }
    }

    let { date } = this.props.route.params;
    
    
    return (
      <View style={styles._layer}>
        <View style={styles._header}>
          <View style={styles._back_main}>
            <TouchableOpacity
              onPress={this.props.onPress}
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicons name="ios-arrow-back" size={24} color="#3477f6" />
            </TouchableOpacity>
            <Text style={styles._back_title}>Flight</Text>
          </View>
          <Text style={styles._title}>
            {date.getDate()}-{date.getMonth()}-{date.getFullYear()} FRA - IST
          </Text>
          <View style={styles._back_main} />
        </View>
        {LoaderShow ? (
          <View style={styles._loader_main}>
            <ActivityIndicator />
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        ) : (
          <View style={styles._data_main}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles._sub_header}>
                <Text style={[styles._h5, { color: "black" }]}>
                  57 Flight offers
                </Text>
                <TouchableOpacity style={styles._alignment}>
                  <Image
                    source={require("./../images/swapicon.png")}
                    style={{ height: 15, width: 15 }}
                  />
                  <Text style={styles._h5}> Price (lowest first)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles._alignment}
                  onPress={() => this.RBSheet.open()}
                >
                  <View style={styles._circle}>
                    <MaterialCommunityIcons
                      name="filter-variant"
                      size={15}
                      color="white"
                    />
                  </View>
                  <Text style={styles._h5}>Filter (0)</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles._label}>Select your departure flight</Text>
              <View style={styles._inner_view}>
                {data.map((val, i) => {
                  return (
                    <FlightCard
                      key={i}
                      data={val}
                      onPress={() =>
                        this.props.navigation.navigate("FlightsSelected", {
                          data: val,
                          selectedData: this.props.route.params.data,
                        })
                      }
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
        )}
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          closeOnDragDown={false}
          closeOnPressMask={false}
          height={screen.height - 70}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,.8)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
            container: {
              backgroundColor: "#fff",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}
        >
          <View style={styles._bs_main}>
            <View style={styles._bs_header}>
              <TouchableOpacity onPress={() => this.RBSheet.close()}>
                <Text style={styles._close_btn_text}>Close</Text>
              </TouchableOpacity>
              {withBaggage ||
              withoutBaggage ||
              directFlight ||
              stop1 ||
              stops2 ||
              royalJordanin ||
              egyptair ||
              royalAirMaroc ||
              lufthansa ||
              airFranceHOP ||
              brusselsAirlines ? (
                <TouchableOpacity onPress={this.ResetAll}>
                  <Text style={styles._reset_all_selected}>Reset all</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity>
                  <Text style={styles._reset_all}>Reset all</Text>
                </TouchableOpacity>
              )}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <>
                <View style={styles._bs_list_main}>
                  <Text style={styles._bs_list_heading}>BAGGAGE</Text>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() => {
                      this.setState({
                        withBaggage: !withBaggage,
                      });
                    }}
                  >
                    <Text style={styles._bs_list_title}>With baggage</Text>
                    {withBaggage ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles._bs_list2}
                    onPress={() =>
                      this.setState({ withoutBaggage: !withoutBaggage })
                    }
                  >
                    <Text style={styles._bs_list_title}>Without baggage</Text>
                    {withoutBaggage ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                </View>
                <View style={styles._bs_list_main}>
                  <Text style={styles._bs_list_heading}>STOPS</Text>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() =>
                      this.setState({ directFlight: !directFlight })
                    }
                  >
                    <Text style={styles._bs_list_title}>Direct flight</Text>
                    {directFlight ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() => this.setState({ stop1: !stop1 })}
                  >
                    <Text style={styles._bs_list_title}>1 stop</Text>
                    {stop1 ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles._bs_list2}
                    onPress={() => this.setState({ stops2: !stops2 })}
                  >
                    <Text style={styles._bs_list_title}>2 stops</Text>
                    {stops2 ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                </View>
                <View style={styles._bs_list_main}>
                  <Text style={styles._bs_list_heading}>AIRLINES</Text>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() =>
                      this.setState({ royalJordanin: !royalJordanin })
                    }
                  >
                    <Text style={styles._bs_list_title}>Royal Jordanin</Text>
                    {royalJordanin ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() => this.setState({ egyptair: !egyptair })}
                  >
                    <Text style={styles._bs_list_title}>Egyptair</Text>
                    {egyptair ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() =>
                      this.setState({ royalAirMaroc: !royalAirMaroc })
                    }
                  >
                    <Text style={styles._bs_list_title}>Royal Air Maroc</Text>
                    {royalAirMaroc ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() => this.setState({ lufthansa: !lufthansa })}
                  >
                    <Text style={styles._bs_list_title}>Lufthansa</Text>
                    {lufthansa ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() =>
                      this.setState({ airFranceHOP: !airFranceHOP })
                    }
                  >
                    <Text style={styles._bs_list_title}>Air France HOP</Text>
                    {airFranceHOP ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles._bs_list}
                    onPress={() =>
                      this.setState({ brusselsAirlines: !brusselsAirlines })
                    }
                  >
                    <Text style={styles._bs_list_title}>Brussels Airlines</Text>
                    {brusselsAirlines ? (
                      <AntDesign name="checkcircle" size={15} color="#3477f6" />
                    ) : null}
                  </TouchableOpacity>
                </View>
              </>
              <View style={{ paddingBottom: 200 }} />
            </ScrollView>
          </View>
          <View style={styles._btn_section}>
            {count !== 0 ? (
              <Text style={styles._filter_Counter}>
                Number of current filters : {count}
              </Text>
            ) : null}
            <Button
              title="Apply filter"
              // onPress={() =>
              //   this.props.navigation.navigate("FlightsScreen")
              // }
            />
          </View>
        </RBSheet>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  _layer: { flex: 1, backgroundColor: "white" },
  _btn_text: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
  _sub_header: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  _alignment: {
    flexDirection: "row",
    alignItems: "center",
  },
  _circle: {
    height: 16,
    width: 16,
    borderRadius: 25,
    backgroundColor: "#3478f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  _h5: {
    color: "#3478f6",
    fontFamily: "Poppins-Medium",
    fontSize: 13,
  },
  _label: {
    fontFamily: "Poppins-Medium",
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  _inner_view: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    padding: 10,
  },
  _loader_main: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  _data_main: {
    flex: 1,
  },
  _bs_main: {
    paddingHorizontal: 20,
  },
  _bs_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _close_btn_text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  _reset_all: {
    fontWeight: "bold",
    fontSize: 15,
    color: "gray",
  },
  _bs_list_main: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  _bs_list_heading: {
    color: "gray",
    fontSize: 15,
    fontStyle: "normal",
  },
  _bs_list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#f3f3f3",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 10,
  },
  _bs_list2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 10,
  },
  _bs_list_title: {
    color: "black",
  },
  _reset_all_selected: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#eb5748",
  },
  _btn_section: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 20,
    alignSelf: "center",
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  _filter_Counter: {
    textAlign: "center",
    marginBottom: 5,
    fontSize: 13,
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
  },
  _back_title: {
    fontFamily: "Poppins-Medium",
    color: "#3477f6",
    marginLeft: 5,
  },
  _back_main: {
    flexDirection: "row",
    alignItems: "center",
  },
});
