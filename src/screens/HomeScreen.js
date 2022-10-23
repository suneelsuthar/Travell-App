import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";
import { Button } from "./../components";
import DateTimePicker from "@react-native-community/datetimepicker";
import RBSheet from "react-native-raw-bottom-sheet";
const screen = Dimensions.get("screen");
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(1598051730000),
      show: false,
      search: "",
      type: "arrival",
      departure: null,
      arrival: null,

      Adults: [
        {
          name: "Adults",
          year: "12+ years",
          selected: 1,
        },
        {
          name: "Children",
          year: "2-11 years",
          selected: 0,
        },
        {
          name: "Infants",
          year: "Under 2 years",
          selected: 0,
        },
      ],
    };
  }

  componentDidMount() {
    this.addData();
  }
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ date: currentDate, show: false });
  };

  clearSearch = () => {
    this.setState({ search: "" });
  };
  HistroyTag = (val) => {
    if (this.state.type === "arrival") {
      this.setState({ arrival: val });
    } else {
      this.setState({ departure: val });
    }
    this[RBSheet + 0].close();
  };
  AddItem = (i, type) => {
    let { Adults } = this.state;
    if (type === "inc") {
      Adults[i].selected = Number(Adults[i].selected) + 1;
    } else {
      if (Adults[i].selected > 0) {
        Adults[i].selected = Number(Adults[i].selected) - 1;
      }
    }
    this.setState({ Adults: Adults });
    console.log(Adults);
  };

  addData = () => {
    let { Adults } = this.state;
    let adultsArray = [];
    for (var i = 0; i < this.state.Adults[0].selected; i++) {
      adultsArray.push({
        name: "",
        lastname: "",
        birthday: new Date(1598051730000),
        gender: "Male",
      });
    }

    let childrenArr = [];
    for (var i = 0; i < this.state.Adults[1].selected; i++) {
      childrenArr.push({
        name: "",
        lastname: "",
        birthday: new Date(1598051730000),
        gender: "Male",
      });
    }

    let infantsArr = [];
    for (var i = 0; i < this.state.Adults[2].selected; i++) {
      infantsArr.push({
        name: "",
        lastname: "",
        birthday: new Date(1598051730000),
        gender: "",
      });
    }
    Adults[0].arr = adultsArray;
    Adults[1].arr = childrenArr;
    Adults[2].arr = infantsArr;
    this.setState({ Adults });
  };

  select = () => {
    this.addData();
    // this.props.navigation.navigate("ContactDetails", {
    //   data: this.state.Adults,
    // });
    this.props.navigation.goBack();
    this[RBSheet + 1].close();
  };

  Search = () => {
    this.addData();

    this.props.navigation.navigate("FlightsScreen", {
      date: this.state.date,
      data: this.state.Adults,
    });
  };
  render() {
    let { show, date, search, Adults, type } = this.state;
    console.log("===================>", Adults);
    return (
      <View style={styles._container}>
        <TouchableOpacity style={styles._header}>
          <FontAwesome5
            name="user-alt"
            size={16}
            color="black"
            style={styles._user_icon}
          />
          <Text style={styles._bold}>My Accout</Text>
        </TouchableOpacity>
        <Text style={styles._h1}>Flight</Text>
        <View style={styles._notification}>
          <Text style={styles._text}>Up-to-date information about flying</Text>
          <AntDesign name="infocirlce" size={20} color="#3477f6" />
        </View>
        {/* departure & arrival */}
        <View style={styles._dept_arrival_section}>
          <TouchableOpacity
            style={styles._row}
            onPress={() => {
              this[RBSheet + 0].open(), this.setState({ type: "departure" });
            }}
          >
            <View style={styles._icon_view}>
              <Image
                source={require("./../images/departureicon.png")}
                style={styles._icons}
              />
            </View>

            <View style={styles._desc_view}>
              <Text style={styles._row_title}>Departure</Text>
              <Text style={styles._row_decs}>{this.state.departure}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles._circle} activeOpacity={0.5}>
            <Image
              source={require("./../images/swapicon.png")}
              style={styles._swapicon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles._row}
            onPress={() => {
              this[RBSheet + 0].open(), this.setState({ type: "arrival" });
            }}
          >
            <View style={styles._icon_view}>
              <Image
                source={require("./../images/arrivalicon.png")}
                style={styles._icons}
              />
            </View>
            <View style={styles._desc_view}>
              <Text style={styles._row_title}>Arrival</Text>
              <Text style={styles._row_decs}>{this.state.arrival}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* date & return */}
        <View style={styles._section_two}>
          <TouchableOpacity
            style={styles._block}
            onPress={() => this.setState({ show: true })}
          >
            <Text style={styles._row_title}>Date</Text>
            <Text style={styles._row_decs}>
              {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
            </Text>
          </TouchableOpacity>
          {/* date picker */}
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode="date"
              display="default"
              onChange={(e, v) => this.onChange(e, v)}
            />
          )}

          <TouchableOpacity
            style={[
              styles._block,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Feather name="plus" size={16} color="black" />
            <Text style={styles._row_decs}> Return</Text>
          </TouchableOpacity>
        </View>
        {/* traveler */}
        <TouchableOpacity
          style={[styles._row, { marginVertical: 20 }]}
          onPress={() => this[RBSheet + 1].open()}
        >
          <View style={styles._icon_view}>
            <FontAwesome5
              name="user-alt"
              size={16}
              color="black"
              style={styles._user_icon}
            />
          </View>
          <View style={styles._desc_view}>
            <Text style={styles._row_title}>Traveler</Text>
            <Text style={styles._row_decs}>
              {Adults[0].selected} Adults {Adults[1].selected} Children{" "}
              {Adults[2].selected} Infants
            </Text>
          </View>
        </TouchableOpacity>
        {/* Search */}
        <View style={styles._btn_section}>
          <Button title="Search" onPress={() => this.Search()} />
        </View>

        <RBSheet
          ref={(ref) => {
            this[RBSheet + 0] = ref;
          }}
          closeOnDragDown={true}
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
            <Text style={styles._bs_heading}>
              {type === "arrival" ? "Arrival" : "Departure"}
            </Text>
            <View style={styles._input_main}>
              <AntDesign name="search1" size={24} color="black" />
              <TextInput
                placeholder="stanbullAnkara"
                value={search}
                onChangeText={(search) => this.setState({ search: search })}
                style={styles._input}
                underlineColor="#000"
                placeholderTextColor="#000"
              />
              {search !== "" ? (
                <TouchableOpacity onPress={this.clearSearch}>
                  <AntDesign name="closecircle" size={24} color="gray" />
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={styles._search_list}>
              <Text style={styles.search_list_data}>
                lahore: Allama Iqbal Inti, LHE
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.HistroyTag(" lahore: Allama Iqbal Inti, LHE")
                }
              >
                <Text style={styles.search_list_tag}>LHE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
        <RBSheet
          ref={(ref) => {
            this[RBSheet + 1] = ref;
          }}
          closeOnDragDown={true}
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
          <View style={styles._bs2_main}>
            <View style={{ flex: 1 }}>
              {Adults.map((v, i) => {
                return (
                  <View style={styles.bs2_card} key={i}>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>{v.name}</Text>
                      <Text>{v.year}</Text>
                    </View>
                    <View style={styles._bs2_btn_main}>
                      <TouchableOpacity onPress={() => this.AddItem(i, "dec")}>
                        <AntDesign
                          name="minuscircle"
                          size={24}
                          color="#8d8d91"
                        />
                      </TouchableOpacity>
                      <Text style={{ fontWeight: "bold" }}>{v.selected}</Text>
                      <TouchableOpacity onPress={() => this.AddItem(i, "inc")}>
                        <AntDesign
                          name="pluscircle"
                          size={24}
                          color="#3377f6"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles._info_main}>
              <AntDesign name="infocirlce" size={15} color="#3477f6" />
              <View style={{ marginLeft: 20 }}>
                <Text style={styles._info_heading}>
                  Travelling with young children
                </Text>
                <Text style={styles._info_Des}>
                  There must be one adult for each infant in the booking.
                </Text>
              </View>
            </View>
            <View style={styles._btn_section2}>
              <Button
                title="Select"
                onPress={() => {
                  this.select();
                }}
              />
            </View>
          </View>
        </RBSheet>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  _header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 40,
    alignItems: "center",
  },
  _bold: {
    fontFamily: "Poppins-Bold",
  },
  _user_icon: {
    marginRight: 5,
  },
  _h1: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  _notification: {
    backgroundColor: "#f9e179",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  _text: {
    fontFamily: "Poppins-Regular",
    marginRight: 10,
    fontSize: 13,
  },
  _icons: {
    height: 20,
    width: 20,
  },
  _row: {
    borderWidth: 2,
    borderColor: "#e7e7e8",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    height: 70,
    marginBottom: 10,
  },
  _icon_view: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
  },
  _row_title: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
  },
  _row_decs: {
    fontFamily: "Poppins-Medium",
  },
  _swapicon: {
    height: 20,
    width: 20,
  },
  _circle: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: "#e7e7e8",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    alignSelf: "center",
    top: 55,
    backgroundColor: "white",
    zIndex: 100,
  },
  _section_two: {
    flexDirection: "row",
    alignItems: "center",
  },
  _block: {
    backgroundColor: "#f3f3f3",
    flex: 1,
    margin: 10,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  _btn_section: {
    flex: 1,
    justifyContent: "center",
  },
  _bs_main: {
    paddingHorizontal: 20,
  },
  _bs2_main: {
    flexDirection: "column",
    flex: 1,
  },
  _bs_heading: {
    color: "#000",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
  },
  _input_main: {
    backgroundColor: "#f3f3f3",
    height: 52,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  _input: {
    width: "80%",
    fontSize: 10,
    color: "#000",
    fontFamily: "Poppins-Medium",
    marginLeft: 10,
  },
  _search_list: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  search_list_data: {
    fontSize: 10,
    color: "#000",
    fontFamily: "Poppins-Medium",
  },
  search_list_tag: {
    fontSize: 15,
    color: "#000",
    fontFamily: "Poppins-Medium",
    fontWeight: "bold",
  },
  bs2_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 20,
    marginTop: 20,
  },
  _bs2_btn_main: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    justifyContent: "space-between",
  },
  _info_main: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  _info_heading: {
    fontWeight: "bold",
    fontSize: 15,
  },
  _info_Des: {
    fontSize: 10,
  },
  _btn_section2: {
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
});
