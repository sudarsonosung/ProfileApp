import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const InputFormAddress = ({ setUserAddress, navigateToMainPage }) => {
  let addressUser = "";

  return (
    <View style={Styles.container}>
      <Text style={Styles.textLabel}>Address</Text>
      <TextInput
        onChangeText={textAddress => {
          addressUser = textAddress;
        }}
        style={Styles.inputAddress}
      />
      <TouchableOpacity
        style={Styles.buttonSubmit}
        onPress={() => {
          setUserAddress(addressUser);
          navigateToMainPage();
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 15, paddingLeft: 15 },
  textLabel: { fontWeight: "bold", fontSize: 20 },
  inputAddress: {
    backgroundColor: "#ccccff",
    width: "90%",
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonSubmit: {
    backgroundColor: "#d2d2d2",
    borderRadius: 3,
    borderWidth: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
    left: 10
  }
});

export default InputFormAddress;
