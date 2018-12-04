import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import InputFormAddress from "./src/inputs/InputFormAddress";
import InputFormGender from "./src/inputs/InputFormGender";
import InputFormName from "./src/inputs/InputFormName";
import InputFormPhone from "./src/inputs/InputFormPhone";
import Main from "./src/Main";
import Result from "./src/Result";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNeedsTobeRendered: "Main",
      userName: "",
      userGender: "",
      userPhone: "",
      userAddress: ""
    };
  }

  navigateToInputFormName = () =>
    this.setState({ pageNeedsTobeRendered: "inputName" });

  navigateToInputFormGender = () =>
    this.setState({ pageNeedsTobeRendered: "inputGender" });

  navigateToInputFormPhone = () =>
    this.setState({ pageNeedsTobeRendered: "inputPhone" });

  navigateToInputFormAddress = () =>
    this.setState({ pageNeedsTobeRendered: "inputAddress" });

  navigateToMainPage = () => this.setState({ pageNeedsTobeRendered: "Main" });

  setUserName = name => this.setState({ userName: name });
  setUserGender = gender => this.setState({ userGender: gender });
  setUserPhone = phone => this.setState({ userPhone: phone });
  setUserAddress = address => this.setState({ userAddress: address });

  render() {
    const {
      pageNeedsTobeRendered,
      userName,
      userGender,
      userPhone,
      userAddress
    } = this.state; // Destructuring

    if (pageNeedsTobeRendered === "inputName") {
      return (
        <InputFormName
          navigateToMainPage={this.navigateToMainPage}
          setUserName={this.setUserName}
        />
      );
    } else if (pageNeedsTobeRendered === "inputGender") {
      return (
        <InputFormGender
          navigateToMainPage={this.navigateToMainPage}
          setUserGender={this.setUserGender}
        />
      );
    } else if (pageNeedsTobeRendered === "inputPhone") {
      return (
        <InputFormPhone
          navigateToMainPage={this.navigateToMainPage}
          setUserPhone={this.setUserPhone}
        />
      );
    } else if (pageNeedsTobeRendered === "inputAddress") {
      return (
        <InputFormAddress
          navigateToMainPage={this.navigateToMainPage}
          setUserAddress={this.setUserAddress}
        />
      );
    }

    return (
      <Main
        userName={userName}
        userGender={userGender}
        userPhone={userPhone}
        userAddress={userAddress}
        navigateToInputFormName={this.navigateToInputFormName}
        navigateToInputFormGender={this.navigateToInputFormGender}
        navigateToInputFormPhone={this.navigateToInputFormPhone}
        navigateToInputFormAddress={this.navigateToInputFormAddress}
      />
    );
  }
}

export default App;

// 1. buat 4-pairs inputan
//2.
