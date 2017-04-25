"use strict";
import React, { Component, PropTypes } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import { requestLogin } from "../../actions/actions-user";

const onSubmit = (values, dispatch) => {
  console.log("Submitting form: ", values);
};

const usernameField = ({ input, placeholder, meta, ...inputProps }) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#4e4242",
        opacity: 0.6,
        marginBottom: 16
      }}>
      <TextInput
        {...inputProps}
        name={"username"}
        onChangeText={input.onChange}
        value={input.value}
        onBlur={input.onBlur}
        placeholder={placeholder}
        placeholderTextColor={"#FFF"}
        underlineColorAndroid={"transparent"}
      />
    </View>
  );
};

const passwordField = ({ input, placeholder, meta, ...inputProps }) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#4e4242",
        opacity: 0.6,
        marginBottom: 26
      }}>
      <TextInput
        {...inputProps}
        name={"password"}
        onChangeText={input.onChange}
        value={input.value}
        onBlur={input.onBlur}
        secureTextEntry={true}
        placeholder={"Password"}
        placeholderTextColor={"#FFF"}
        underlineColorAndroid={"transparent"}
      />
    </View>
  );
};

const phoneFormatter = number => {
  if (!number) return "";
  // NNN-NNN-NNNN
  const splitter = /.{1,3}/g;
  number = number.substring(0, 10);
  return number.substring(0, 7).match(splitter).join("-") + number.substring(7);
};

// remove dashes added by the formatter
const phoneParser = number => (number ? number.replace(/-/g, "") : "");

class LoginForm extends Component {
  static defaultProps = {
    isLoading: false
  };

  render() {
    const { isLoading, handleSubmit, submitting } = this.props;
    return (
      <View style={[this.props.style, styles.formContainer]}>
        <Field name={"username"} component={usernameField} />
        <Field name={"password"} component={passwordField} />
        <Button info block rounded title={""}
          onPress={handleSubmit(onSubmit)}
          submitting={submitting}>
          <Text>Login</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#fff",
    paddingTop: 32,
    paddingBottom: 18,
    marginHorizontal: 40,
    marginTop: 100,
    padding: 12,
    alignSelf: "stretch"
  }
});

export default reduxForm({ form: "login" })(LoginForm);
