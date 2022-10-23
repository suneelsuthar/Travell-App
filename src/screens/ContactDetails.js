import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { Header, Button } from "./../components";
import CountryCodePicker from "./../../CountryCodePicker";
import DateTimePicker from "@react-native-community/datetimepicker";
export default class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValue: null,
      mobileNum: "",
      mobileNumValue: null,
      selectedGender: "Male",
      firstName: "",
      firstNameValue: null,
      lastName: "",
      lastNameValue: null,
      date: new Date(1598051730000),
      show: false,
      data: props.route.params.data,
      validated: false,
    };
  }
  onChange = (event, selectedDate, type, i, inputtype) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ date: currentDate, show: false });
    this.handleChange(currentDate, type, i, inputtype);
    // setShow(Platform.OS === "ios");
    // setDate(currentDate);
  };

  validateFunc = () => {
    let { data, email, mobileNum } = this.state;
    let validated = false;
    console.log(data[0]);
    if (data[0].arr.length !== 0) {
      let arr = data[0].arr;
      for (var i = 0; i < arr.length; i++) {
        if (
          arr[i].name === "" ||
          arr[i].lastname === "" ||
          arr[i].gender === "" ||
          arr[i].birthday === "" ||
          email === "" ||
          mobileNum === ""
        ) {
          validated = false;
        } else {
          validated = true;
        }
      }
    }

    if (data[1].arr.length !== 0) {
      let arr = data[1].arr;
      for (var i = 0; i < arr.length; i++) {
        if (
          arr[i].name === "" ||
          arr[i].lastname === "" ||
          arr[i].gender === "" ||
          arr[i].birthday === "" ||
          email === "" ||
          mobileNum === ""
        ) {
          validated = false;
        } else {
          validated = true;
        }
      }
    }

    if (data[2].arr.length !== 0) {
      let arr = data[2].arr;
      for (var i = 0; i < arr.length; i++) {
        if (
          arr[i].name === "" ||
          arr[i].lastname === "" ||
          arr[i].gender === "" ||
          arr[i].birthday === "" ||
          email === "" ||
          mobileNum === ""
        ) {
          validated = false;
        } else {
          validated = true;
        }
      }
    }
    this.setState({ validated });
  };
  Next = () => {
    let { data } = this.state;
    let selected = this.props.route.params.selectedData;
    selected.adults = data[0].selected;
    selected.childrens = data[1].selected;
    selected.infants = data[2].selected;
    this.props.navigation.navigate("CheckOut", { data: selected });
  };

  handleChange = (val, type, i, inputtype) => {
    let { data } = this.state;
    if (type === "adults") {
      data[0].arr[i][inputtype] = val;
      this.setState({ data });
    }

    if (type === "children") {
      console.log("========val====>", data[1]);
      console.log("========val====>", val);
      data[1].arr[i][inputtype] = val;
      this.setState({ data });
    }

    if (type === "infants") {
      // console.log("========type====>",inputtype)

      data[2].arr[i][inputtype] = val;

      this.setState({ data });
    }
    this.validateFunc();
  };
  render() {
    let {
      email,
      mobileNum,
      selectedGender,
      firstName,
      lastName,
      emailValue,
      mobileNumValue,
      firstNameValue,
      lastNameValue,
      date,
      show,
      data,
      validated,
    } = this.state;

    // handleChange(firstName,"adults",i)

    return (
      <View style={styles._layer}>
        <Header
          backTitle="Lufthansa"
          title="Passengers"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <ScrollView>
          <View style={styles._data_min}>
            <Text style={styles._heading}>Contact Details</Text>
            <View style={styles._email_main}>
              <View style={styles._email_title_main}>
                <Text>E-Mail</Text>
              </View>
              <TextInput
                placeholder="name@mail.com"
                value={email}
                onChangeText={(email) => this.setState({ email: email })}
                style={styles._input}
                underlineColor="gray"
                placeholderTextColor="gray"
              />
            </View>
            { email === "" && (
              <Text style={styles._error_show}>Email is required!</Text>
            )}
            <View style={styles._email_main}>
              <View style={styles._email_title_main}>
                <CountryCodePicker />
              </View>
              <TextInput
                placeholder="123456789"
                value={mobileNum}
                onChangeText={(mobileNum) =>
                  this.setState({ mobileNum: mobileNum })
                }
                style={styles._input}
                underlineColor="gray"
                placeholderTextColor="gray"
                keyboardType="numeric"
              />
            </View>
            {mobileNum === "" && (
              <Text style={styles._error_show}>Number is required!</Text>
            )}

            {/* ADULTS DATA */}
            {data &&
              data[0].arr.map((val, i) => {
                return (
                  <View key={i}>
                    <View style={styles.about_main}>
                      <Text style={styles._about}>Abult</Text>
                    </View>
                    <View style={styles._gender_main}>
                      <Text style={styles._gender}>Gender</Text>
                      <View style={styles._select_gender_main}>
                        <TouchableOpacity
                          style={
                            val.gender === "Male"
                              ? styles._selected_gender_btn
                              : styles._gender_btn
                          }
                          onPress={() =>
                            this.handleChange("Male", "adults", i, "gender")
                          }
                        >
                          <Text
                            style={
                              val.gender === "Male"
                                ? styles._selected_gender_btn_text
                                : styles._gender_btn_text
                            }
                          >
                            Male
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={
                            val.gender === "Female"
                              ? styles._selected_gender_btn
                              : styles._gender_btn
                          }
                          onPress={() =>
                            this.handleChange("Female", "adults", i, "gender")
                          }
                        >
                          <Text
                            style={
                              val.gender === "Female"
                                ? styles._selected_gender_btn_text
                                : styles._gender_btn_text
                            }
                          >
                            Female
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles._input_main}>
                      <TextInput
                        placeholder="First name"
                        value={val.name}
                        onChangeText={(firstName) =>
                          this.handleChange(firstName, "adults", i, "name")
                        }
                        style={styles._input2}
                        underlineColor="gray"
                        placeholderTextColor="gray"
                      />
                    </View>
                    {!val.name && val.name !== null && (
                      <Text style={styles._error_show2}>
                        First Name required!
                      </Text>
                    )}
                    <View style={styles._input_main}>
                      <TextInput
                        placeholder="Last name"
                        value={val.lastName}
                        onChangeText={(lastName) =>
                          this.handleChange(lastName, "adults", i, "lastname")
                        }
                        style={styles._input2}
                        underlineColor="gray"
                        placeholderTextColor="gray"
                      />
                    </View>
                    {!val.lastname && val.lastname !== null && (
                      <Text style={styles._error_show2}>
                        Last Name required!
                      </Text>
                    )}
                    <View style={styles._birthday_main}>
                      <Text style={styles._gender}>Birthday</Text>
                      <TouchableOpacity
                        style={styles._block}
                        onPress={() => this.setState({ show: true })}
                      >
                        <Text style={styles._row_decs}>
                          {date.getDate()}-{date.getMonth()}-
                          {date.getFullYear()}
                        </Text>
                      </TouchableOpacity>
                      {/* date picker */}
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={this.state.date}
                          mode="date"
                          display="default"
                          onChange={(e, v) =>
                            this.onChange(e, v, "adults", i, "birthday")
                          }
                        />
                      )}
                    </View>
                  </View>
                );
              })}

            {/* CHILDREN DATA */}
            {data &&
              data[1].arr.map((val, i) => {
                return (
                  <View key={i}>
                    <View style={styles.about_main}>
                      <Text style={styles._about}>Children</Text>
                    </View>
                    <View style={styles._gender_main}>
                      <Text style={styles._gender}>Gender</Text>
                      <View style={styles._select_gender_main}>
                        <TouchableOpacity
                          style={
                            val.gender === "Male"
                              ? styles._selected_gender_btn
                              : styles._gender_btn
                          }
                          onPress={() =>
                            this.handleChange("Male", "children", i, "gender")
                          }
                        >
                          <Text
                            style={
                              val.gender === "Male"
                                ? styles._selected_gender_btn_text
                                : styles._gender_btn_text
                            }
                          >
                            Male
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={
                            val.gender === "Female"
                              ? styles._selected_gender_btn
                              : styles._gender_btn
                          }
                          onPress={() =>
                            this.handleChange("Female", "children", i, "gender")
                          }
                        >
                          <Text
                            style={
                              val.gender === "Female"
                                ? styles._selected_gender_btn_text
                                : styles._gender_btn_text
                            }
                          >
                            Female
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles._input_main}>
                      <TextInput
                        placeholder="First name"
                        value={val.name}
                        onChangeText={(firstName) =>
                          this.handleChange(firstName, "children", i, "name")
                        }
                        style={styles._input2}
                        underlineColor="gray"
                        placeholderTextColor="gray"
                      />
                    </View>
                    {!val.name && val.name !== null && (
                      <Text style={styles._error_show2}>
                        First Name required!
                      </Text>
                    )}
                    <View style={styles._input_main}>
                      <TextInput
                        placeholder="Last name"
                        value={val.lastName}
                        onChangeText={(lastName) =>
                          this.handleChange(lastName, "children", i, "lastname")
                        }
                        style={styles._input2}
                        underlineColor="gray"
                        placeholderTextColor="gray"
                      />
                    </View>
                    {!val.lastname && val.lastname !== null && (
                      <Text style={styles._error_show2}>
                        Last Name required!
                      </Text>
                    )}
                    <View style={styles._birthday_main}>
                      <Text style={styles._gender}>Birthday</Text>
                      <TouchableOpacity
                        style={styles._block}
                        onPress={() => this.setState({ show: true })}
                      >
                        <Text style={styles._row_decs}>
                          {date.getDate()}-{date.getMonth()}-
                          {date.getFullYear()}
                        </Text>
                      </TouchableOpacity>
                      {/* date picker */}
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={this.state.date}
                          mode="date"
                          display="default"
                          onChange={(e, v) =>
                            this.onChange(e, v, "children", i, "birthday")
                          }
                        />
                      )}
                    </View>
                  </View>
                );
              })}

            {/* INFATS DATA */}
            {data &&
              data[2].arr.map((val, i) => {
                return (
                  <View key={i}>
                    <View style={styles.about_main}>
                      <Text style={styles._about}>Infants</Text>
                    </View>
                    <View style={styles._gender_main}>
                      <Text style={styles._gender}>Gender</Text>
                      <View style={styles._select_gender_main}>
                        <TouchableOpacity
                          style={
                            val.gender === "Male"
                              ? styles._selected_gender_btn
                              : styles._gender_btn
                          }
                          onPress={() => {
                            this.handleChange("Male", "infants", i, "gender");
                          }}
                        >
                          <Text
                            style={
                              val.gender === "Male"
                                ? styles._selected_gender_btn_text
                                : styles._gender_btn_text
                            }
                          >
                            Male
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={
                            val.gender === "Female"
                              ? styles._selected_gender_btn
                              : styles._gender_btn
                          }
                          onPress={() => {
                            this.handleChange("Female", "infants", i, "gender");
                          }}
                        >
                          <Text
                            style={
                              val.gender === "Female"
                                ? styles._selected_gender_btn_text
                                : styles._gender_btn_text
                            }
                          >
                            Female
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles._input_main}>
                      <TextInput
                        placeholder="First name"
                        value={val.name}
                        onChangeText={(firstName) =>
                          this.handleChange(firstName, "infants", i, "name")
                        }
                        style={styles._input2}
                        underlineColor="gray"
                        placeholderTextColor="gray"
                      />
                    </View>
                    {!val.name && val.name !== null && (
                      <Text style={styles._error_show2}>
                        First Name required!
                      </Text>
                    )}
                    <View style={styles._input_main}>
                      <TextInput
                        placeholder="Last name"
                        value={val.lastName}
                        onChangeText={(lastName) =>
                          this.handleChange(lastName, "infants", i, "lastname")
                        }
                        style={styles._input2}
                        underlineColor="gray"
                        placeholderTextColor="gray"
                      />
                    </View>
                    {!val.lastname && val.lastname !== null && (
                      <Text style={styles._error_show2}>
                        Last Name required!
                      </Text>
                    )}
                    <View style={styles._birthday_main}>
                      <Text style={styles._gender}>Birthday</Text>
                      <TouchableOpacity
                        style={styles._block}
                        onPress={() => this.setState({ show: true })}
                      >
                        <Text style={styles._row_decs}>
                          {date.getDate()}-{date.getMonth()}-
                          {date.getFullYear()}
                        </Text>
                      </TouchableOpacity>
                      {/* date picker */}
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={this.state.date}
                          mode="date"
                          display="default"
                          onChange={(e, v) =>
                            this.onChange(e, v, "infants", i, "birthday")
                          }
                        />
                      )}
                    </View>
                  </View>
                );
              })}

            <View style={styles._btn_section}>
              <Button title="Next" onPress={validated ? this.Next : null} />
            </View>
          </View>
        </ScrollView>
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
    fontWeight: "bold",
  },
  _email_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _email_title_main: {
    backgroundColor: "#f3f3f3",
    height: 35,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  _input: {
    width: "65%",
    fontSize: 10,
    color: "#000",
    fontFamily: "Poppins-Medium",
    marginLeft: 10,
  },
  about_main: {
    backgroundColor: "#f3f3f3",
    height: 42,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _about: {
    fontWeight: "bold",
  },
  _gender_main: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _select_gender_main: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    width: "60%",
    borderRadius: 4,
    height: 35,
  },
  _selected_gender_btn: {
    backgroundColor: "#4a4b4b",
    width: "50%",
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  _gender_btn: {
    width: "50%",
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  _selected_gender_btn_text: {
    color: "white",
  },
  _gender_btn_text: {
    color: "black",
  },
  _gender: {
    fontWeight: "bold",
    fontSize: 12,
  },
  _input_main: {
    backgroundColor: "#f3f3f3",
    height: 42,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _input2: {
    width: "95%",
    fontSize: 10,
    color: "#000",
    fontFamily: "Poppins-Medium",
    marginLeft: 10,
  },
  done_btn: {
    alignSelf: "flex-end",
    marginVertical: 20,
  },
  _done_btn_text: {
    fontWeight: "bold",
    color: "#397cf5",
  },
  _error_show: {
    marginLeft: "34%",
    color: "#eb5748",
    fontSize: 10,
  },
  _error_show2: {
    color: "#eb5748",
    fontSize: 10,
  },
  _btn_section: {
    marginTop: 30,
    marginBottom: 30,
  },
  _birthday_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _block: {
    backgroundColor: "#f3f3f3",
    width: "30%",
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
