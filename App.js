import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { LogBox, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigaionMain from "./src/config/Navigation";
LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
LogBox.ignoreAllLogs(); // ignore all logs

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getFonts = () => {
    try {
      return Font.loadAsync({
        "CG-regular": require("./assets/fonts/CormorantGaramond-Regular.ttf"),
        "CG-bold": require("./assets/fonts/CormorantGaramond-Bold.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      });
    } catch (err) {
      // console.log("--------->", err);
    }
  };

  if (fontsLoaded) {
    return (
      <SafeAreaProvider>
        <StatusBar
          hidden={false}
          backgroundColor="white"
          barStyle="dark-content"
          translucent={false}
        />
        <NavigaionMain />
      </SafeAreaProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log("")}
      />
    );
  }
}
