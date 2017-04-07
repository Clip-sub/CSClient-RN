'use strict';
import React, {Component, PropTypes} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import {Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={[this.props.style, styles.formContainer]}>
        <View>
          <TextInput
            placeholder={'Username'}
            placeholderTextColor={'#FFF'}
            underlineColorAndroid={'transparent'}/>
        </View>
        <Button
          light
          block title={''}
          onPress={() => {}}>
          <Icon name="rocket" size={30} color="#900" />
          <Text>Login</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 40,
    padding: 12
  }
});
