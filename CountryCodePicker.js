
import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CountryPicker from 'rn-country-picker';
export default class CountryCodePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mCountryCode: '92',
    };
  }

  _selectedValue = (index) => {
    this.setState({mCountryCode: index});
  };

  render() {
    return (
      <View style={styles.container}>
        <CountryPicker
          disable={false}
          animationType={'slide'}
          containerStyle={styles.pickerStyle}
          pickerTitleStyle={styles.pickerTitleStyle}
          dropDownImage={require('./res/ic_drop_down.png')}
          selectedCountryTextStyle={styles.selectedCountryTextStyle}
          countryNameTextStyle={styles.countryNameTextStyle}
          pickerTitle={'Country Picker'}
          searchBarPlaceHolder={'Search......'}
          hideCountryFlag={false}
          hideCountryCode={false}
          searchBarStyle={styles.searchBarStyle}
          backButtonImage={require('./res/ic_back_black.png')}
          searchButtonImage={require('./res/ic_search.png')}
          countryCode={this.state.mCountryCode}
          selectedValue={this._selectedValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  pickerTitleStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    // marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  pickerStyle: {
    // height: 50,
    // width: 250,
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: '#03F435',
    // borderRadius:5
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    textAlign: 'right',
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },

  searchBarStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 10,
  },
});