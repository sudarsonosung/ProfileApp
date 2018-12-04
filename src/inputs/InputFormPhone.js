import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const InputFormPhone = ({ setUserPhone, navigateToMainPage }) => {
  let phoneUser = "";

  return (
    <View style={Styles.container}>
      <Text style={Styles.textLabel}>Phone</Text>
      <TextInput
        onChangeText={textPhone => {
          phoneUser = textPhone;
        }}
        style={Styles.inputPhone}
      />
      <TouchableOpacity
        style={Styles.buttonSubmit}
        onPress={() => {
          setUserPhone(phoneUser);
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
  inputPhone: {
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

export default InputFormPhone;
