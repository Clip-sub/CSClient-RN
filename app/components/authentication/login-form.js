'use strict';
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { requestLogin } from '../../actions/actions-user';

const onSubmit = (values, dispatch) => {
  const { username, password } = values;
  dispatch(requestLogin(username, password));
};

const usernameField = ({ input, placeholder, meta, ...inputProps }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        {...inputProps}
        name={'username'}
        onChangeText={input.onChange}
        value={input.value}
        onBlur={input.onBlur}
        selectionColor={'#ffefef'}
        placeholder={'Username'}
        placeholderTextColor={'#FFF'}
        underlineColorAndroid={'transparent'}
        style={styles.inputError}
      />
    </View>
  );
};

const passwordField = ({ input, placeholder, meta, ...inputProps }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        {...inputProps}
        name={'password'}
        onChangeText={input.onChange}
        value={input.value}
        onBlur={input.onBlur}
        secureTextEntry
        placeholder={'Password'}
        placeholderTextColor={'#FFF'}
        underlineColorAndroid={'transparent'}
        style={styles.input}
      />
    </View>
  );
};

class LoginForm extends Component {
  static defaultProps = {
    isLoading: false,
  };

  componentWillUpdate(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { isLoading, handleSubmit, submitting } = this.props;
    return (
      <View style={[this.props.style, styles.formContainer]}>
        <Field name={'username'} component={usernameField} />
        <Field name={'password'} component={passwordField} />
        <Button
          block
          rounded
          bordered
          outline
          light
          title={''}
          onPress={handleSubmit(onSubmit)}
          submitting={submitting}
        >
          <Icon active name="ios-person" style={{ color: '#747474' }} />
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
    borderColor: '#fff',
    paddingTop: 32,
    paddingBottom: 18,
    marginHorizontal: 40,
    marginTop: 50,
    padding: 12,
    alignSelf: 'stretch',
  },
  inputWrapper: {
    opacity: 0.6,
    marginBottom: 26,
  },
  input: {
    height: 40,
    color: '#fff',
    alignSelf: 'stretch',
    borderBottomWidth: 0.6,
    borderBottomColor: '#eee',
  },
  inputError: {
    height: 40,
    color: '#fff',
    alignSelf: 'stretch',
    borderBottomWidth: 0.6,
    borderBottomColor: '#ff4e4e',
  },
});

export default reduxForm({ form: 'login' })(LoginForm);
