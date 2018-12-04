import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const InputFormName = ({ setUserName, navigateToMainPage }) => {
  let nameUser = "";

  return (
    <View style={Styles.container}>
      <Text style={Styles.textLabel}>Name</Text>
      <TextInput
        onChangeText={textName => {
          nameUser = textName;
        }}
        style={Styles.inputName}
      />
      <TouchableOpacity
        style={Styles.buttonSubmit}
        onPress={() => {
          setUserName(nameUser);
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
  inputName: {
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

export default InputFormName;
