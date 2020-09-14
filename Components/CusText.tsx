import React, { FunctionComponent, ReactElement, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CustomTextInput from "./CustomTextInput";

const CusText: FunctionComponent<CustomTextInput> = ({
  placeholder_val,
  height_val,
  updatetext,
} ) => {
  const [text, setText] = useState("");
 
  return (
    <TextInput
      style={{
        marginTop: 5,
        height: height_val,
        flex: 1,
        borderColor: "#D3D3D3",
        borderWidth: 1,
      }}
      placeholder={placeholder_val}
      onChangeText={(text) => {
        setText(text);
        updatetext(text);
      }}
    />
  );
};

export default CusText;
