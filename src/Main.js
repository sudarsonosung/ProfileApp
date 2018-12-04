import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

class Main extends Component {
  render() {
    const { userName, userGender, userPhone, userAddress } = this.props;
    return (
      <View style={Styles.classContainer}>
        <Text style={Styles.text}>testing semua inputan field revisi</Text>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Name</Text>
          </View>

          <TouchableOpacity
            style={Styles.inputContainer}
            onPress={() => this.props.navigateToInputFormName()}
          >
            <Text style={Styles.inputResult}>{userName}</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Gender</Text>
          </View>

          <TouchableOpacity
            style={Styles.inputContainer}
            onPress={() => this.props.navigateToInputFormGender()}
          >
            <Text style={Styles.inputResult}>{userGender}</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Phone</Text>
          </View>

          <TouchableOpacity
            style={Styles.inputContainer}
            onPress={() => this.props.navigateToInputFormPhone()}
          >
            <Text style={Styles.inputResult}>{userPhone}</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Address</Text>
          </View>
          <TouchableOpacity
            style={Styles.inputContainer}
            onPress={() => this.props.navigateToInputFormAddress()}
          >
            <Text style={Styles.inputResult}>{userAddress}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Styles.buttonSubmit}>
          <Text style={Styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  classContainer: { flex: 1, padding: 15 },
  containerPerSection: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  textContainer: { width: "30%" },
  text: { fontSize: 20, fontWeight: "bold" },
  inputContainer: { width: "70%", backgroundColor: "#e1f7d5" },
  inputResult: { fontSize: 20, marginLeft: 5 },
  buttonSubmit: {
    backgroundColor: "#d2d2d2",
    borderRadius: 3,
    borderWidth: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
    left: 10
  },
  textButton: { textAlign: "center", margin: 10 }
});

export default Main;
