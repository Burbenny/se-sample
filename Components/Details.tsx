import React, { useState, FunctionComponent, ReactElement } from "react";
import { TextInput, View, Text, Alert, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import CusText from "./CusText";
import CustomTextInput from "./CustomTextInput";

const Details = () => {
  const [test, setState] = useState({ nric: "", phone: "" });
  const [test1, setTest] = useState('');


  const updatenricstates = (text: string): void => {
    setState({ ...test, nric: text });
  };
  const updatephonestates = (text: string): void => {
    setState({ ...test, phone: text });
  };

  const hpum: CustomTextInput = {
    placeholder_val: "Enter Phone Number",
    height_val: 40,
    updatetext: updatephonestates,
  };
  const nric: CustomTextInput = {
    placeholder_val: "Enter NRIC tset ",
    height_val: 40,
    updatetext: updatenricstates,
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Text>Enter Details Manually</Text>
      <View style={{ marginTop: 50, flexDirection: "row" }}>
        <CusText
          placeholder_val={nric.placeholder_val}
          height_val={nric.height_val}
          updatetext={nric.updatetext}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <CusText
          placeholder_val={hpum.placeholder_val}
          height_val={hpum.height_val}
          updatetext={hpum.updatetext}
        />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Check In"
          onPress={() => {
            console.log("nric:" + test.nric);
            console.log("phone:" + test.phone);
            setTest(test.nric);
          }}
          // onPress={() => alert(test)}
        />
      </View>
      <View style={styles.container}>
        <Text>{test1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 15,
    marginTop: 10,
  },
});

export default Details;
