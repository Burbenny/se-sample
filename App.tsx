import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "./Components/Details";

const HomeScreen = ()=> {
  return (
    <View
      style={{
        flex: 1,
        padding: 50,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Check in Into Safe Entry 
      </Text>
      <Image
        style={{ marginTop: 30, width: 100, height: 100 }}
        source={require("./assets/favicon.png")}
      />
      <Details />
    </View>
  );
}
const Scan = () =>{
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Scann here!</Text>
    </View>
  );
}

const SettingsScreen = (): React.ReactElement => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scan" component={Scan} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
